// Start the child process to capture still images and videos every 60sec
// var exec = require('child_process').exec;
// exec('./start-photo-snapshots.sh', function (err, stdout, stderr) {
//   if (err) {
//   console.error(err);
//   return;
// }
// console.log(stdout);
// process.exit(0);// exit process once it is opened
// })

// Express js code
const fs = require('fs')
const path = require('path');
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules/jquery/dist'))

// Return json with the list of photos available
app.get('/api/v1.0/photos', (req, res) => {
  
  const directoryPath = path.join(__dirname, 'public', 'printer-photos');
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.debug('Unable to scan directory: ' + err);
      res.json({ 'error': 'Unable to scan directory' }).status(400);
    }
    res.json({ 'photos': files }).status(200)
  });

});

app.listen(8080)
