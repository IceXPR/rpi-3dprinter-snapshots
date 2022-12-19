//Start the child process to capture still images and videos every 60sec
var exec = require('child_process').exec;
exec('./start-photo-snapshots.sh', function (err, stdout, stderr) {
  if (err) {
  console.error(err);
  return;
}
console.log(stdout);
process.exit(0);// exit process once it is opened
})

// Express js code
const fs = require('fs')
const path = require('path');
const express = require('express')
const app = express()
const oneHour  = 60*60*1000            // 60m in * 60sec * 1000ms
const fiveMinutes = 5*60*1000;         // 5min & 60sec * 1000ms
const twentyfourHours = 24*60*60*1000; // 24hours * 60min * 60sec * 1000ms

app.use('/printer-photos', express.static('public/printer-photos', { maxAge: twentyfourHours}))
app.use('/printer-thumbnails', express.static('public/printer-thumbnails', { maxAge: twentyfourHours}))
app.use(express.static('public', {maxAge: fiveMinutes}))
app.use(express.static('node_modules/jquery/dist', { maxAge: oneHour }))

// Return json with the list of photos available
app.get('/api/v1.0/thumbnails', (req, res) => {
  
  const directoryPath = path.join(__dirname, 'public', 'printer-thumbnails');
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.debug('Unable to scan directory: ' + err);
      res.json({ 'error': 'Unable to scan directory' }).status(400);
    }
    sortedFiles = files.map(function (fileName) {
      return {
        name: fileName,
        time: fs.statSync(directoryPath + '/' + fileName).mtime.getTime()
      };
    })
    .sort(function (a, b) {
      return b.time - a.time; })
    .map(function (v) {
      return v.name; });
    res.json({ 'thumbnails': sortedFiles }).status(200)
  });

});

app.listen(8080)
