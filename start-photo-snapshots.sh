#! /usr/bin/bash

while true
do
 mkdir -p public/printer-photos
 raspistill -o public/printer-photos/printer-photo-`date +%H%M`.jpg
 sleep 300
done
