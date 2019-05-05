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

array = Array.new
# array = []

array_1 = Array.new(1)
# array_1 = [nil]

array_2 = Array.new(2, 10)
# array_2 = [10,10]



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





# return, access from end, use -ve indexes
array[-1]
# return 1st element
array.first
# return last element
array.last
# return 1st 3 elements
array.take(3)
# return not 1st 3 elements
array.drop(3)



# added at the beginning of the list
x = [4, 5, 6]
x.unshift(1, 2, 3)
# => [1, 2, 3, 4, 5, 6]

x = [1,2]
x.push(3)
# [1,2,3]

x = [12,19]
x.insert(1, 15, 16, 17)
# [12, 15, 16, 17, 19]

def end_arr_add(arr, element)
    # Add `element` to the end of the Array variable `arr` and return `arr`
    arr.push(element)
end

def begin_arr_add(arr, element)
    # Add `element` to the beginning of the Array variable `arr` and return `arr`
  arr.unshift(element)
end

def index_arr_add(arr, index, element)
    # Add `element` at position `index` to the Array variable `arr` and return `arr`
  arr.insert(index, element)
end

def index_arr_multiple_add(arr, index)
    # add any two elements to the arr at the index
  arr.insert(index, 1)
  arr.insert(index, 2)
end

def element_at(arr, index)
    # return the element of the Array variable `arr` at the position `index`
    # arr.at(index) # or
    # arr[index]
  
  arr[index]
  
end

def inclusive_range(arr, start_pos, end_pos)
    # return the elements of the Array variable `arr` between the start_pos and end_pos (both inclusive)
  
    arr[start_pos .. end_pos]

end

def non_inclusive_range(arr, start_pos, end_pos)
    # return the elements of the Array variable `arr`, start_pos inclusive and end_pos exclusive
  
      arr[start_pos ... end_pos]

end

def start_and_length(arr, start_pos, length)
    # return `length` elements of the Array variable `arr` starting from `start_pos`

  arr[start_pos, length]

end


def end_arr_delete(arr)
    # delete the element from the end of the array and return the deleted element
    return arr.pop

end

def start_arr_delete(arr)
    # delete the element at the beginning of the array and return the deleted element
  
  return arr.shift
    
end

def delete_at_arr(arr, index)
    # delete the element at the position #index
  
  arr.delete_at(index)
    
end

def delete_all(arr, val)
    # delete all the elements of the array where element = val

    arr.delete(val)

end




def serial_average(str)
  # str = SSS-XX.XX-YY.YY
  # print str
  
  d1 = str[4,5]
  d2 = str[10,5]
  
  # print " d1 "
  # print d1
  # print " d2 "
  # print d2
  # print " "
  
  aa = (d1.to_f + d2.to_f).to_f / 2
  # print " aa "  
  # print aa
  
  # print " str[0,4] "
  # print str[0,4]
  
  # print "" + str[0,4] + "#{aa.round(2)}"
  # print " "
  
  "" + str[0,4] + "#{aa.round(2)}"
end

# ===========================================
# select subset of an array

# An element in a block is
#     selected
#     rejected
#     deleted, or
#     kept
#         based on the True or False value
#           generated by that block on that element

# For a destructive behavior
#     for select and reject or any method that one wants to enforce a change in the original array,
#       a ! can be used at the end of the method i.e.,
#         select!
#         reject!

# A) Non-Destructive Selection
# a block is a group of code within {} that accepts a variable and returns a value

arr = [3, 4, 2, 1, 2, 3, 4, 5, 6]

arr.select {|a| a > 2}
# [3, 4, 3, 4, 5, 6]

arr.reject {|a| a > 2}
# [2, 1, 2]

arr
# [3, 4, 2, 1, 2, 3, 4, 5, 6]     # array remains unchanged. This is called Non-Destructive Selection. 

# ?????????????????
arr.drop_while {|a| a > 1} # removes elements till the block returns false for the first time
# [1, 2, 3, 4, 5, 6]
# ?????????????????


# B) Destructive Selection (change to the original array)

arr = [3, 4, 2, 1, 2, 3, 4, 5, 6]  
arr.delete_if {|a| a < 2}
# [3, 4, 2, 2, 3, 4, 5, 6]  
arr.keep_if {|a| a < 4}  
# [3, 2, 2, 3]




def select_arr(arr)
  # select and return all odd numbers from the Array variable `arr`
  arr.select {|a| a%2 == 1}
end

def reject_arr(arr)
  # reject all elements which are divisible by 3
  arr.reject {|a| a%3 == 0}
end

def delete_arr(arr)
  # delete all negative elements
  arr.delete_if {|a| a < 0}
end

def keep_arr(arr)
  # keep all non negative elements ( >= 0)
  arr.keep_if {|a| a >= 0}
end


# Hashes
#   associative arrays
#       dictionary-like data structures
#           similar to arrays
#               instead of using integers to index an object
#               hashes use any object as its index.
#

empty_hash = Hash.new 
# empty_hash = {}

# Hash.default is used to
#     set the default value returned
#     when
#         you query a key
#         that doesn't exist.
default_hash = Hash.new(-1)
# default_hash = Hash.new
# default_hash.default = -1

hackerrank = {"simmy" => 100, "vivmbbs" => 200}
#
# hackerrank = { "simmy" : 100, "vivmbbs" : 200 }
#
# hackerrank = Hash.new
# hackerrank["simmy"] = 100
# hackerrank["vivmbbs"] = 200
#
# hackerrank = Hash["simmy", 100, "vivmbbs", 200]
#
# hackerrank = Hash[["simmy", 100], ["vivmbbs", 200]]














