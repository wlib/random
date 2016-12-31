# Simple .bashrc
# See /usr/share/doc/bash/examples/startup-files for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

HISTCONTROL=ignoreboth # Don't put duplicate or empty lines in history
HISTSIZE=1000
HISTFILESIZE=2000

shopt -s histappend # Append to history instead of overwriting it
shopt -s checkwinsize # Update lines and columns on window size change
shopt -s globstar # Use "**" to match all files, directories and subdirectories

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
  debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
  xterm-color|*-256color) color_prompt=yes;;
esac

force_color_prompt=yes # I prefer a colored prompt, but turning it off is a simple comment out

if [ -n "$force_color_prompt" ]; then
  if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	    color_prompt=yes
  else
    	color_prompt=
  fi
fi

# This part is the actual colorization of the prompt using color codes
if [ "$color_prompt" = yes ]; then
  PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
  PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
  PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
   ;;
*)
  ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
  test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
  alias ls='ls --color=auto'
  alias dir='dir --color=auto'
  alias vdir='vdir --color=auto'

  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Aliases

# Execute ~/.bash_aliases if it exists
if [ -f ~/.bash_aliases ]; then
  source ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# Add your custom stuff here

alias desk='cd ~/Desktop'
alias docs='cd ~/Documents'
alias myip="ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}'"
alias exip='dig +short myip.opendns.com @resolver1.opendns.com'
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
  sudo apt install $1 --assume-yes
}

debinst() {
  wget $1 -O /tmp/install.deb
  sudo dpkg -i /tmp/install.deb
  inst -f
}

update-vscode() {
  debinst https://vscode-update.azurewebsites.net/latest/linux-deb-x64/stable
}
