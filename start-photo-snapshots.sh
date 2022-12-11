#! /usr/bin/bash

while true
do
 mkdir -p public/bird-videos
 mkdir -p public/bird-photos
 raspistill -o public/bird-photos/bird-photo-`date +%H%M`.jpg
 raspivid -o - -t 59000 | ffmpeg -r 8 -i - -y -vcodec copy public/bird-videos/bird-video-`date +%H%M`.mp4
done
