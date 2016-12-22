#!/usr/bin/env/ruby

# Solutions I made for the problems at:
# http://www.shiftedup.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour

# 1 :
## Write three functions that compute the sum of the numbers in a given list
## using a for-loop, a while-loop, and recursion.

list = (1..15).to_a

def floop(list)
end

def wloop(list)
end

def recurs(list)
end

floop(list)
wloop(list)
recurs(list)

# 2 :
## Write a function that combines two lists by alternatingly taking elements. For example: 
## given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3]

atoz = ('a'..'z').to_a
onetotwentysix = (1..26).to_a

def altcombine(a, b)
  combo = []
  i = 0
  while combo.length < (a.length + b.length)
    combo << a[i]
    combo << b[i]
    i += 1
  end
  combo
end

result = altcombine(atoz, onetotwentysix).join(' ')
print result

# 3 :
## Write a function that computes the list of the first 100 Fibonacci numbers.
## By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and 
## each subsequent number is the sum of the previous two. 
## As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

def fib()
  max = 15
  n = 2
  seq = [0, 1]
  while seq.length < max
    seq << ((seq[n - 1]) + (seq[n - 2]))
    n += 1
  end
  seq
end

fibonnaci = fib()
puts fibonnaci

# 4 :
## Write a function that given a list of non negative integers,
## arranges them such that they form the largest possible number.
## For example, given [50, 2, 1, 9], the largest formed number is 95021.

#list = [50, 2, 1, 9]
#concat = list.join
#stringdigits = concat.split('')
#digits = stringdigits.map(&:to_i)
#result = digits.sort.reverse.join.to_i ## This does't work dangit
#puts result

# 5 :
## Write a program that outputs all possibilities to put + or - 
## or nothing between the numbers 1, 2, ..., 9 (in this order)
## such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
