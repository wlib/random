#!/usr/bin/env ruby
# BACON ipsum via https://baconipsum.com and their awesome api
# Daniel Ethridge

require 'open-uri'
require 'json'
require 'yaml'

=begin

Here's the documented API in simple YAML:
---
url: https://baconipsum.com/api?
params:
- type:
  - all-meat
  - meat-and-filler
  paras: "range from 0 to 100"
  sentences: "range from 0 to 100"
  start-with-lorem:
  - 0
  - 1
  format:
  - json
  - text
  - html

=end

# Now this is the Ruby equivalent - a hash
# It has every possible value we can have for each key
api = {
  "url" => "https://baconipsum.com/api?",
  "params" => [
    "type" => [
      "all-meat",
      "meat-and-filler"
    ],
    "paras" => (0..100).to_a,
    "sentences" => (0..100).to_a,
    "start-with-lorem" => [0, 1],
    "format" => [
      "json",
      "text",
      "html"
    ]
  ]
}

# Get tasty bacon data
def get(params, url="https://baconipsum.com/api?")
  if params["paras"] && params["sentences"]
    puts "Just a warning that sentences override paras..."
  end
  endpoint = url + URI.encode_www_form(params)
  print "Endpoint is : "
  puts endpoint
  body = open(endpoint).read
  return body
end

# Custom paramater generator
def cust_params(type=0, paras_or_sentences=0, size=5, start_with_lorem=0, format=0)
  if type.is_a?(Integer)
    a = { "type" => ["all-meat", "meat-and-filler"][type] }
  elsif type.is_a?(String)
    a = { "type" => type }
  else
    puts "type should be an Integer or String but you put #{type}"
    return
  end
  if paras_or_sentences.is_a?(Integer)
    b1 = ["paras", "sentences"][paras_or_sentences]
  elsif paras_or_sentences.is_a?(String)
    b1 = paras_or_sentences
  else
    puts "paras_or_sentences should be an Integer or String but you put #{paras_or_sentences}"
    return
  end
  if size.is_a?(Integer)
    b2 = size
  else
    puts "size should be an Integer but you put #{size}"
    return
  end
  b = { b1 => b2 }
  if start_with_lorem.is_a?(Integer)
    c = { "start-with-lorem" => start_with_lorem }
  else
    puts "start_with_lorem should be an Integer but you put #{start_with_lorem}"
    return
  end
  if format.is_a?(Integer)
    d = { "format" => ["json", "text", "html"][format] }
  elsif format.is_a?(String)
    d = { "format" => format }
  else
    puts "format should be an Integer or String but you put #{format}"
    return
  end
  params = (a).merge(b).merge(c).merge(d)
  return params
end

# Random paramater generator
def rand_params()
  a = {
    "type" =>
    ["all-meat", "meat-and-filler"].sample
  }
  b = {
    ["paras", "sentences"].sample =>
    rand(0..100)
  }
  c = {
    "start-with-lorem" =>
    [0, 1].sample
  }
  d = {
    "format" =>
    ["json", "text", "html"].sample
  }
  params = (a).merge(b).merge(c).merge(d)
  return params
end