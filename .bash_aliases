alias desk="cd ~/Desktop"
alias docs="cd ~/Documents"
alias myip="ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}'"
alias exip="dig +short myip.opendns.com @resolver1.opendns.com"
alias iface="ip link | awk '{ print $2}'"

genpass() {
  if [ -z "$1" ]; then
    echo "First argument should be length of password string"
    return
  fi
  tr -dc A-Za-z0-9_ < /dev/urandom | head -c $1
  printf "\n"
}

serve() {
  python3 -m http.server
}

regem() {
  if [ -z "$1" ]; then
    echo "Please tell which gem"
    return
  fi
  echo Rebuilding and installing $1
  echo Uninstalling current gem...
  sudo gem uninstall $1
  echo Removing pkg directory...
  rm -rf pkg
  echo Building gem...
  gem build $1.gemspec
  echo Installing new gem...
  sudo rake install
}

fd() {
  cd $1
  ls
}

grp() {
  ls -a | grep $1
}

pie() {
  if [ -z "$1" ]; then
    echo "First argument should be username"
    return
  fi
  IP=$(arp -a | grep -i B8:27 | gawk 'match($0, /\(([0-9.]+)\)/, a) {print a[1]}')
  echo Logging in as $1 on $IP...
  ssh $1@$IP
}

xsleep() {
  xset -display :0.0 dpms force off
}

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

update-vscode() {
  debinst https://vscode-update.azurewebsites.net/latest/linux-deb-x64/stable
}
