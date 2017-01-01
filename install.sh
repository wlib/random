#!/bin/sh
# Packages to install on every new debian/ubuntu system

# First install apt and then update/upgrade everything
sudo apt-get install apt --assume-yes
sudo apt update --assume-yes
sudo apt upgrade --assume-yes
sudo apt dist-upgrade

# Functions to make auto-installation simple
inst() {
  sudo apt install $* --assume-yes
}

debinst() {
  for link in "$@"; do
    wget $link -O /tmp/install.deb
    sudo dpkg -i /tmp/install.deb
    inst -f
  done
}

# Install a list of programs from repo
inst preload guake blender inkscape audacity gimp nautilus-dropbox vim gparted cmake git ruby nodejs-legacy npm

# Download and install these
debinst https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb https://vscode-update.azurewebsites.net/latest/linux-deb-x64/stable

# Other packages
sudo gem install aft
sudo gem install surgescrape
sudo npm install -g surge

# Add and install
sudo add-apt-repository 'deb http://www.mediahuman.com/packages/ubuntu trusty main'
sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 7D19F1F3
sudo apt-get update
inst youtube-to-mp3

# Clean up
sudo apt autoremove
sudo apt autoclean

# Run the new programs to easily add them all to dock
google-chrome
blender
inkscape
audacity
gimp
guake
code
