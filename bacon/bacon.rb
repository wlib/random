#!/usr/bin/env ruby
# BACON ipsum via https://baconipsum.com and their awesome api
# This is a simple command line interface for lib.rb
# Daniel Ethridge

load "./bacon.rb"

case ARGV[0].downcase
  when "-d", "d", "--details", "details"
    params = rand_params()
    puts "Generated paramaters are : "
    puts params.to_yaml
    bacon = get(params)
    puts "Got bacon! : "
    puts bacon
    exit
  else
    params = rand_params()
    bacon = get(params)
    puts bacon
    exit
end