#! /bin/bash

# By Daniel Ethridge
# mount the partition or device with a distro
# if not already done, then chroot into
# that distro's user space and do stuff.

clear
printf "Enter the full path to the device/partition the target distro is on. \n\n\tExample: /dev/sda7 \n\n"
read -r devicetarget
export devicetarget
printf "What is this distro called exactly?\n\n"
read -r distroname
export distroname
sudo mkdir /mnt/$distroname 2> /dev/null
sudo mount $devicetarget /mnt/$distroname 2> /dev/null
sudo chroot /mnt/$distroname
