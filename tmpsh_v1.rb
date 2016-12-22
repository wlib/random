#!/usr/bin/env ruby

=begin

 Made by Daniel Ethridge

 TeMPorary SHell "tmpsh" is a simple program that mimics a real shell.
 In reality however, all the actions the user makes are faked.
 This is perfect for many applications, including but of course not limited to:

	Simply playing around in a shell without worry of consequences.
	Allowing guest users to experience a shell.
	Learning the basics of the shell environment.

=end

# set colors
class String
def black;          "\e[30m#{self}\e[0m" end
def red;            "\e[31m#{self}\e[0m" end
def green;          "\e[32m#{self}\e[0m" end
def brown;          "\e[33m#{self}\e[0m" end
def blue;           "\e[34m#{self}\e[0m" end
def magenta;        "\e[35m#{self}\e[0m" end
def cyan;           "\e[36m#{self}\e[0m" end
def gray;           "\e[37m#{self}\e[0m" end

def bg_black;       "\e[40m#{self}\e[0m" end
def bg_red;         "\e[41m#{self}\e[0m" end
def bg_green;       "\e[42m#{self}\e[0m" end
def bg_brown;       "\e[43m#{self}\e[0m" end
def bg_blue;        "\e[44m#{self}\e[0m" end
def bg_magenta;     "\e[45m#{self}\e[0m" end
def bg_cyan;        "\e[46m#{self}\e[0m" end
def bg_gray;        "\e[47m#{self}\e[0m" end

def bold;           "\e[1m#{self}\e[22m" end
def italic;         "\e[3m#{self}\e[23m" end
def underline;      "\e[4m#{self}\e[24m" end
def blink;          "\e[5m#{self}\e[25m" end
def reverse_color;  "\e[7m#{self}\e[27m" end
end

# set username 
print"Input your name : ".cyan
$uname= gets.chomp.downcase
# if no input, use default username
if $uname==""
	$uname="guest"
else
	$uname=$uname.gsub(/\s+/, "")
end
puts"#{$uname} is your username here, your files are in your home directory located at /home/#{$uname}"

# define default directories
$home="/home"
$root="/"
$etc="/etc"
$tmp="/tmp"
$bin="/bin"
$usr="/usr"

# define directory contents
$content_home= Array[$uname]
$content_root= Array["/etc", "/home", "/tmp", "/bin", "/usr"]
$content_etc= Array["permission r,w denied"]
$content_tmp= Array["permission r,x denied"]
$content_bin= Array["permission r,w denied"]
$content_usr= Array["permission r,w denied"]

# list of acceptable commands user can run
exec_bin= Array["ls", "cd", "echo", "clear", "pwd", "whoami", "id"]

# set the terminal prompt true
$prompt=true
# set default directory on login
$currentdir=$root
# set the contents of the current directory
$dir_content=$content_root

# where everything happens
while $prompt
	# what the prompt looks like
	print"#{$uname}@tmpsh".green + ":" + "#{$currentdir}".blue + "$ "
	# user input gets processed into two variables, the program...
	$input=gets.downcase.lstrip.strip
	$command=$input.gsub(/\s.+/, '')
	# ...and the program options
	$flags=$input.partition(" -")
	$flags=$flags.map {|s| s.gsub("#{$command}", '')}
        $flags=$flags.map {|s| s.gsub(" -", '')} 
	$flags=$flags.join(" ").to_s.strip

	# if the user input program is valid, continue
	if exec_bin.include? $command
		# x holds the program name
		x=$command
		# f holds options
		f=$flags
# ls
		if x=="ls"
			list=$dir_content.join(' ')
			print "#{list}" + "\n"
# cd
		elsif x=="cd"
			if f==""
				$currentdir=$home
				$dir_content=$content_home
			elsif f=="~"
				$currentdir=$home
				$dir_content=$content_home
			elsif f=="#{$home}"
				$currentdir=$home
				$dir_content=$content_home
			elsif f=="/"
				$currentdir=$root
				$dir_content=$content_root
			elsif f=="/etc"
				$currentdir=$etc
				$dir_content=$content_etc
			elsif f=="/tmp"
				$currentdir=$tmp
				$dir_content=$content_tmp
			elsif f=="/bin"
				$currentdir=$bin
				$dir_content=$content_bin
			elsif f=="/usr"
				$currentdir=$usr
				$dir_content=$content_usr
			else
				puts "#{f}" + ": No such file or directory".red
			end
# echo
		elsif x=="echo"
			puts f
# clear
		elsif x=="clear"
			system "clear" or system "cls"
# pwd
		elsif x=="pwd"
			if f==""
				puts $currentdir
			else
				puts "retry that"
			end
#whoami
		elsif x=="whoami"
			if f==""
				puts $uname
			else
				puts "retry that"
			end
# id
		elsif x=="id"
			if f==""
				puts $uname
			else
				puts "retry that"
			end
# hope this doesn't happen
		else
				puts"something terrible just happened"
			exit
		end

# quitting the session
	elsif $command=="exit"
		puts"aborting"
		exit
	elsif $command=="quit"
		puts"aborting"
		exit
	elsif $command=="logout"
		puts"aborting"
		exit
# if input is not valid
	else
		puts "command not found".red
	end
end
