#! /usr/bin/bash

while true
do
 mkdir -p public/printer-videos
 mkdir -p public/printer-photos
 raspistill -o public/printer-photos/printer-photo-`date +%H%M`.jpg
 raspivid -o - -t 59000 | ffmpeg -r 8 -i - -y -vcodec copy public/printer-videos/printer-video-`date +%H%M`.mp4
done
