#!/usr/bin/env ruby
# BACON ipsum via https://baconipsum.com and their awesome api
# Examples for lib.rb
# Daniel Ethridge

load "./lib.rb"

# Test rand_params()
params = rand_params()
puts "Generated paramaters are : "
puts params.to_yaml
bacon = get(params)
puts "Got bacon! : "
puts bacon

=begin

This should end up looking something like this...

Generated paramaters are :
---
type: all-meat
sentences: 64
start-with-lorem: 1
format: text
Endpoint is : https://baconipsum.com/api?type=all-meat&sentences=64&start-with-lorem=1&format=text
Got bacon! :
Bacon ipsum dolor amet turducken sirloin tenderloin tri-tip, brisket leberkas boudin picanha ham hock tongue pork....

=end

# Example cust_params()

puts "Here is the mess that I like to call 'cust_params()'..."
puts cust_params(0, 1, 45, 1, 2).to_yaml
# You can use a string argument where applicable instead of numbers
# This has the same output :
#puts cust_params("all-meat", "sentences", 45, 1, "html").to_yaml

=begin

This is what it is output:

---
type: all-meat
sentences: 45
start-with-lorem: 1
format: html

=end
