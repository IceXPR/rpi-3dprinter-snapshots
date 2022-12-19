#! /usr/bin/bash

while true
do
 mkdir -p public/printer-photos
 mkdir -p public/printer-thumbnails
 find public/printer-photos/ -name '*.*' -type f -mmin +1440 -delete
 find public/printer-thumbnails/ -name '*.*' -type f -mmin +1440 -delete
 raspistill -o public/printer-photos/printer-photo-`date +%H%M`.jpg
 raspistill -w 640 -h 480 -q 100 -o public/printer-thumbnails/printer-thumbnail-`date +%H%M`.jpg
 sleep 300
done
