# rpi-3dprinter-snapshots
A printerhouse that records the printers lifehood using RaspberryPI

## Install 

### Prepare the PI
```bash
apt update
apt install raspistill
wget https://nodejs.org/dist/latest-v11.x/node-v11.15.0-linux-armv6l.tar.gz
tar -xzf node-v11.15.0-linux-armv6l.tar.gz
cd node-v11.15.0-linux-armv6l/
sudo cp -R * /usr/local/
```

### Install Code Dependencies
```bash
npm install
```

### Execute inside the RaspberryPI
Start the node web application
```bash
npm start
```

In your computer open the browser pointing to the raspberry pi and use port 8080

For example: http://my3dprinter:8080/


### To run on boot
```bash
sudo npm install pm2 -g
pm2 startup systemd
```
Follow the instruction to install the script
```
pm2 start --name=3DPRINTER npm -- start
pm2 save
```


## References
- https://coderrocketfuel.com/article/how-to-run-a-npm-start-script-with-pm2
- https://www.tecmint.com/enable-pm2-to-auto-start-node-js-app/
- http://frozen.ca/streaming-raw-h-264-from-a-raspberry-pi/
```
raspivid -n -ih -t 0 -rot 0 -w 1280 -h 720 -fps 15 -b 1000000 -o - | nc -lkv4 5001
```

- https://fullstack.network/streaming-video-from-raspberrypi-to-the-network-using-node-js-33a5b6b78c3d

- https://linuxize.com/post/how-to-install-node-js-on-raspberry-pi/
- https://stackfame.com/list-all-files-in-a-directory-nodejs#:~:text=Steps%20to%20get%20list%20of%20all%20the%20files,of%20files%20list%20from%20the%20directory.%20More%20items
- https://stackoverflow.com/questions/26802201/bash-get-date-and-time-from-another-time-zone