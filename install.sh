#!/bin/sh
# packages to install on every new debian/ubuntu system I get

# on systems without apt
sudo apt-get install apt --assume-yes
sudo apt update --assume-yes
sudo apt upgrade --assume-yes
wget -O /tmp/chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i /tmp/chrome.deb
sudo apt-get install -f --assume-yes
sudo apt install preload --assume-yes
sudo apt install guake --assume-yes
sudo apt install blender --assume-yes
sudo apt install inkscape --assume-yes
sudo apt install audacity --assume-yes
sudo apt install gimp --assume-yes
sudo apt install nautilus-dropbox --assume-yes
sudo apt install gparted --assume-yes
sudo apt install cmake --assume-yes
sudo apt install git --assume-yes
sudo apt install ruby --assume-yes
sudo add-apt-repository 'deb http://www.mediahuman.com/packages/ubuntu trusty main'
sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 7D19F1F3
sudo apt-get update
sudo apt install youtube-to-mp3 --assume-yes

# run programs to easily add them all to dock

google-chrome #web browser
blender #3d software
inkscape #vector image editor
audacity #audio editor
gimp #image editor
guake #amazingly useful drop-down terminal
#nautilus-dropbox for dropbox file sync, set up window automatically opens on install
