#!/usr/bin/env ruby
# Daniel Ethridge
# Basic logic gates implementation

gatelist = ["NOT", "AND", "NAND", "OR", "NOR", "XOR", "XNOR"]

class String
  def to_b
    return true if self =~ (/^(true|t|yes|y|1)$/i)
    return false if self.empty? || self =~ (/^(false|f|no|n|0)$/i)
    raise ArgumentError.new "invalid boolean : #{self}"
  end
end

def NOT(a)
  case a
    when false
      return true
    when true
      return false
    else
      return "err"
  end
end

def AND(a, b)
  if a == true && b == true
    return true
  else
    return false
  end
end

def NAND(a, b)
  if a == true && b == true
    return false
  else
    return true
  end
end

def OR(a, b)
  if a == false && b == false
    return false
  else
    return true
  end
end

def NOR(a, b)
  if a == false && b == false
    return true
  else
    return false
  end
end

def XOR(a, b)
  if a == true && b == true
    return false
  elsif a == false && b == false
    return false
  else
    return true
  end
end

def XNOR(a, b)
  if a == true && b == true
    return true
  elsif a == false && b == false
    return true
  else
    return false
  end
end

if ARGV.empty?
  print "Gate name? : "
  gate = gets.strip.upcase
  if gate == "NOT"
    print "A : "
    a = gets.strip.to_b
  elsif gatelist.include? gate
    print "A : "
    a = gets.strip.to_b
    print "B : "
    b = gets.strip.to_b
  else
    raise ArgumentError.new "invalid gate : #{gate}"
  end
elsif ARGV.length == 2 && ARGV[0].strip.upcase == "NOT"
  gate = ARGV[0].strip.upcase
  a = ARGV[1].strip.to_b
elsif ARGV.length == 3
  gate = ARGV[0].strip.upcase
  a = ARGV[1].strip.to_b
  b = ARGV[2].strip.to_b
else
  raise ArgumentError.new "Input 3 arguments - GATE A B"
end

def execgate(gate, a, b)
  case gate
    when "NOT"
      out = NOT(a)
    when "AND"
      out = AND(a,b)
    when "NAND"
      out = NAND(a,b)
    when "OR"
      out = OR(a,b)
    when "NOR"
      out = NOR(a,b)
    when "XOR"
      out = XOR(a,b)
    when "XNOR"
      out = XNOR(a,b)
    else
      puts "unknown gate"; exit # raise ArgumentError.new "invalid gate : #{gate}"
  end
  puts out
end

execgate(gate, a, b)