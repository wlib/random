#!/usr/bin/env ruby
require 'socket'
require 'zlib'

Help = "Usage:\n\t#{__FILE__} [client/server] [Server's IP (if client)] [sent/received file]\n\n\
\tThe last argument is always the in/out file\n\
\tRunning as client means the second argument must be the server's IP\n\
\n -h, --help      :    Display this help\
\n -c, --client    :    Start in client mode\
\n -s, --server    :    Start in server mode\
\n my_file         :    Open file for i/o\
\n\n Examples: \n\t\
#{__FILE__} --client 127.0.0.1 recieve.html\n\t\
#{__FILE__} --server infile.png\n\t"

Args = ARGV.to_s.downcase
if Args.include? '-c' || '--client '
  $SIP = ARGV[1]
  $RFile = ARGV[-1]
  puts "Starting as client"
  $mode = 'client'
elsif Args.include? '-s' || '--server '
  $SFile = ARGV[-1]
  puts $SFile
  puts "Starting as server"
  $mode = 'server'
elsif Args.include? '-h' || '--help'
  $mode = 'help'
else
  $mode = 'help'
end

def compress(file)
  input = file.read
  Zlib::Deflate.deflate(input)
end

def decompress(file)
  input = file
  Zlib::Inflate.inflate(input)
end

def client()
  socket = TCPSocket.new("#{$SIP}", 1174)
  rdata = socket.read
  rfile = File.open("#{$RFile}", 'w')
  rstream = decompress(rdata)
  rfile.write rstream
  rfile.close
end

def server()
  server = TCPServer.new 1174
  sfile = File.open("#{$SFile}", 'r')
  sstream = compress(sfile)
  while true
    Thread.new(server.accept) do |client|
      client.write sstream
      client.close
    end
  end
  sfile.close
end

case $mode
  when 'client'
    client()
  when 'server'
    server()
  when 'help'
    puts Help
    exit
end
