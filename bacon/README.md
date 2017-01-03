# BaconIpsum.com's API in Ruby

## Usage

### CLI

`./bacon.rb` will generate a random output for you
`./bacon.rb --details` will give you slightly more info on what's going on under the hood

### Ruby

Refer to `lib.rb` and then `examples.rb` - Don't worry, they are readable.

Basically, the flow looks like this:
```ruby
# Create a hash that is equivalent to the query parameters in the endpoint url
# Since I don't care about the output, I'll just generate random parameters
params = rand_params()
# The get() function here takes the parameter hash and uses it to make a valid GET request
# To our baconipsum endpoint
bacon = get(params)
# Now we just bring home the bacon
puts bacon
```

## The actual site API

Here's a neat little description of the api in YAML...

```YAML
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
```
