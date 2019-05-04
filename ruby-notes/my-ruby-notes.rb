#!/usr/bin/ruby -w

puts "Hello, Ruby!";

puts "This is main Ruby Program"

puts "This is main Ruby Program"

# I am a comment. Just ignore me.

= begin
This is a comment.
This is a comment, too.
This is a comment, too.
I said that already.
= end


END {
   puts "Terminating Ruby Program"
}
BEGIN {
   puts "Initializing Ruby Program" # will be execulted first # Declares code to be called before the program is run.
}

# Initializing Ruby Program
# This is main Ruby Program
# Terminating Ruby Program


# Everything is an Object
print self

# Object Methods

def odd_or_even(number)
  return number.even?
end

(0...gets.to_i).each do |i|
    puts odd_or_even(gets.to_i)
end

# Object Method Parameters

def a()
  return a.range?(b, c)
end

def scoring(array)
  # iterate through each of the element in array using *each* and call update_score on it
  array.each do |user|  # each element of array is bound to user
    user.update_score()
  end
end


def scoring(array)
  # update_score of every user in the array unless the user is admin
  array.each do |user|
    unless user.is_admin?
        user.update_score
    end
  end
  # array.each { |user| user.update_score unless user.is_admin? }
  # array.reject { |user| user.is_admin? }.each { |user| user.update_score }
end

loop do
  coder.practice
  break if coder.oh_one?
  
  # coder.oh_one? ? break : coder.practice
end

until coder.oh_one? # while not
  coder.practice
end

# coder.practice until coder.oh_one?

# while not coder.oh_one?
#     coder.practice
# end


# ------------------

print <<EOF
   This is the first way of creating
   here document ie. multiple line string.
EOF

print <<"EOF";                # same as above
   This is the second way of creating
   here document ie. multiple line string.
EOF

print <<`EOC`                 # execute commands
	echo hi there
	echo lo there
EOC

print <<"foo", <<"bar"  # you can stack them
	I said foo.
foo
	I said bar.
bar
# ------------------


def identify_class(obj)
  case obj
    when Hacker
      puts "It's a Hacker!"
    when Submission
      puts "It's a Submission!"
    when TestCase
      puts "It's a TestCase!"
    when Contest
      puts "It's a Contest!"
    else
      puts "It's an unknown model"
  end
end

def identify_class__2(obj)
    case obj
    when Hacker,Submission,TestCase,Contest
        puts "It's a #{obj.class}!"
    else
        puts "It's an unknown model"
    end
end


# global variables - available across classes
$abc

class Customer

  # class variables - available across different objects
  @@abc = 0

  # instance variables - change from object to object
  @abc

  fun1 ???
    # local variables
    abc
    _abc
    
  ???
end

Class Vehicle {

   Number       no_of_wheels
   Number       horsepower
   Characters   type_of_tank
   Number       Capacity

   Function speeding {
   }

   Function driving {
   }

   Function halting {
   }
}





# arrays

names = Array.new
names = Array.new(20)
names = Array.new(20)
puts names.size  # This returns 20
puts names.length # This also returns 20

names = Array.new(4, "mac")
puts "#{names}"
# ["mac", "mac", "mac", "mac"]

nums = Array.new(10) { |e| e = e * 2 }
puts "#{nums}"
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

nums = Array.[](1, 2, 3, 4,5)
nums = Array[1, 2, 3, 4,5]

digits = Array(0..9)
puts "#{digits}
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# create an instance of Array object
#   Array.[](...)
#   Array[...]
#   [...]

digits = Array(0..9)
num = digits.at(6)
puts "#{num}"
# 6

# Array pack Directives
a = [ "a", "b", "c" ]
n = [ 65, 66, 67 ]
puts a.pack("A3A3A3")   #=> "a  b  c  "
puts a.pack("a3a3a3")   #=> "a\000\000b\000\000c\000\000"
puts n.pack("ccc")      #=> "ABC"
# a  b  c
# abc
# ABC












