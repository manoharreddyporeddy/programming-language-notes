#!/usr/bin/ruby -w

# ruby links
#   https://www.digitalocean.com/community/tutorials/how-to-work-with-string-methods-in-ruby
#   https://ruby-doc.org/core-2.2.0/Hash.html
#   https://ruby-doc.org/core-2.6.3/Enumerable.html#method-i-group_by
#   https://apidock.com/ruby/Array/length
#   https://apidock.com/ruby/String/start_with%3F
#   https://www.tutorialspoint.com/ruby/ruby_strings.htm


puts "Hello, Ruby!";

puts "This is main Ruby Program"

puts "This is main Ruby Program"


p "1 2"           #       "1 2"
print "1 2"       #        1 2

a = "hello "
b = "world"
print "#{a}#{b}"


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


def mytake (arr, len = 1)
  arr.drop(len)
end
# take([1,2,3], 1)
#   [2, 3]
# take([1,2,3], 2)
#   [3]
# take([1,2,3])
#   [2, 3]




#                    122 123 124
#  push(125)         122 123 124 125
#  unshift(121)  121 122 123 124 125
#  
#                      3 4 5   7 8 9
#  insert(3, 6)        3 4 5 6 7 8 9
#  
#  
#            arr = [5, 6, 5, 4, 3, 1, 2, 5, 4, 3, 3, 3] 
#  arr.pop   arr = [5, 6, 5, 4, 3, 1, 2, 5, 4, 3, 3] 
#  
#              arr = [5, 6, 5, 4, 3, 1, 2, 5, 4, 3, 3]
#  arr.shift   arr =    [6, 5, 4, 3, 1, 2, 5, 4, 3, 3]
#  
#                              [6, 5, 4, 3, 1, 2, 5, 4, 3, 3]
#  arr.delete_at(2)   arr =    [6, 5,    3, 1, 2, 5, 4, 3, 3]
#  
#                     arr =    [6, 5,    3, 1, 2, 5, 4, 3, 3]
#  arr.delete(5)      arr =    [6,       3, 1, 2,    4, 3, 3]
#  arr.delete(3)      arr =    [6,          1, 2,    4      ]
#  
#         0123  4      -3 -2  -1
#  str = "Hell  o  Wo  r  l d"
#  
#  str[0,4]


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


user = {"viv" : 10, "simmy" : 20, "sp2hari" : 30}

user.each do |key, value|
    # some code on individual key, value
end

user.each do |arr|
    # here arr[0] is the key and arr[1] is the value
end


def iter_hash(hash)
    hash.each do |key1, value1|
      puts key1
      puts value1
    end
end

# hash.each { |p| puts p }
#         puts prints each element in seperate line
#
# puts hash.to_a
#
# puts hash.map.to_a
#
# hash.each {|key, value| puts "#{key}\n#{value}"}



h = Hash.new
h.default = 0

# add key value to hash
h[key] = value
h.store(key, value)

# delete key from hash
h.delete(key)

# For destructive selection and deletion
#     keep_if and delete_if
#       similar to Array
h = {1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25}
#       {1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25}

h.keep_if {|key, value| key % 2 == 0}
# or h.delete_if {|key, value| key % 2 != 0}
#       {2 => 4, 4 => 16}

# For non-destructive selection or rejection
#   select, reject, and drop_while
#       similar to Array



hackerrank = Hash.new
hackerrank.store(543121, 100)
# hackerrank[543121]=100
hackerrank.keep_if { |key, value| key.is_a? Integer }
hackerrank.delete_if { |key, value| key % 2 == 0 }


# `all`
#     are true? (not nil and not false)
%w[ant bear cat].all? { |word| word.length >= 3 } #=> true
%w[ant bear cat].all? { |word| word.length >= 4 } #=> false
%w[ant bear cat].all?(/t/)                        #=> false
[1, 2i, 3.14].all?(Numeric)                       #=> true
[nil, true, 99].all?                              #=> false
[].all?                                           #=> true

arr = [1, 2, 3, 4, 5, 6]              # => [1, 2, 3, 4, 5, 6]
h = {"a" => 1, "b" => 2, "c" => 3}    # => {"a" => 1, "b" => 2, "c" => 3}
> arr.all? {|a| a.is_a? Integer} # checks if all elements of the array are of the type Integer
# => True
> h.all? {|key, value| key.is_a? String} # checks if all keys of the Hash object are of the type String
# => True

# `any`
#     any one is true? (not nil and not false)
%w[ant bear cat].any? { |word| word.length >= 3 } #=> true
%w[ant bear cat].any? { |word| word.length >= 4 } #=> true
%w[ant bear cat].any?(/d/)                        #=> false
[nil, true, 99].any?(Integer)                     #=> true
[nil, true, 99].any?                              #=> true
[].any?                                           #=> false

arr = [1, 2, 3, 4, 5, 6]              # => [1, 2, 3, 4, 5, 6]
h = {"a" => 1, "b" => 2, "c" => 3}    # => {"a" => 1, "b" => 2, "c" => 3}
> arr.any? {|a| a % 2 == 0} # checks if any number in the array is even
# => True
> h.any? {|key, value| value.is_a? String} # checks if any value of the Hash object is of the type String
# => False

# `none`
#     none is true? (not nil and not false)

arr = [1, 2, 3, 4, 5, 6]              # => [1, 2, 3, 4, 5, 6]
h = {"a" => 1, "b" => 2, "c" => 3}    # => {"a" => 1, "b" => 2, "c" => 3}
> arr.none? {|a| a.nil?} # Checks if none of the elements in the array are of nil type
# => True
> h.none? {|key, value| value < 3} # checks if all values of the Hash object are less than 3
# => False

# `find`
#     returns first   element (array incase of hash element)   which is true (not nil and not false)
arr = [1, 2, 3, 4, 5, 6]              # => [1, 2, 3, 4, 5, 6]
h = {"a" => 1, "b" => 2, "c" => 3}    # => {"a" => 1, "b" => 2, "c" => 3}
> arr.find {|a| a > 5} # returns the first element greater than 5 and `nil` if none satisfies the condition
# => 6
> h.find {|key, value| key == "b"} # returns an Array of the first match [key, value] that satisfies the condition and nil otherwise
# => ["b", 2]
#   or nil


def func_any(hash)
    # Check and return true if any key object within the hash is of the type Integer
    # If not found, return false.
  hash.any? { |key1, value1|  key1.is_a? Integer }
end

def func_all(hash)
    # Check and return true if all the values within the hash are Integers and are < 10
    # If not all values satisfy this, return false.
  hash.all? { |key1, value1|  (value1.is_a? Integer) and (value1 < 10) }
end

def func_none(hash)
    # Check and return true if none of the values within the hash are nil
    # If any value contains nil, return false.
  hash.none? { |key1, value1|  (value1 == nil) }
end

def func_find(hash)
    # Check and return the first object that satisfies either of the following properties:
    #   1. There is a [key, value] pair where the key and value are both Integers and the value is < 20 
    #   2. There is a [key, value] pair where the key and value are both Strings and the value starts with `a`.
  hash.find {
    |key1, value1|
    ((key1.is_a? Integer) and (value1.is_a? Integer) and (value1 < 20)) or
    ((key1.is_a? String)  and (value1.is_a? String)  and (value1.start_with?('a')))
  }
end





(1..5)
  .group_by {
    |x| x%2
  }
# { 1=>[1,3,5],  0=>[2, 4]  }




















def iterate_colors(colors)
  colors.to_a
  colors.select { |obj| obj }
  colors.map { |e| e }
  # (1..4).collect { "cat"  }   #=> ["cat", "cat", "cat", "cat"]
  colors.enum_for.to_a
end

def skip_animals(animals, skip)
  arr = []
  (animals.each_with_index { |item, index| arr.push("#{index}:#{item}") if index >= skip }).to_a
  arr
end

# skip_animals(['leopard', 'bear', 'fox', 'wolf'], 2)
#   ["2:fox", "3:wolf"]
def skip_animals(animals, skip)
    results = []
    animals.drop(skip).each_with_index do |animal, i|
        results << "#{i+skip}:#{animal}"
    end
    results
end

def skip_animals(animals, skip)
    animals.map.with_index { |v, i| "#{i}:#{v}" }.drop(skip)
end

def skip_animals(animals, skip)
     animals.drop_while {|a| animals.index(a) < skip }.map.with_index{|a, index| "#{index}:#{a}"}
end

# -------------------- collect/map method --------------------------
# returns new collection   (each returns same collection)

[1,2,3].map { |x| 2*x }
# [2, 4, 6]

# ???????? :
{:a=>1, :b=>2, :c=>3}.collect { |key, value| 2*value }
# [2, 4, 6]



rot13 = {
"a" : "n", "b" : "o", "c" : "p", "d" : "q", "e" : "r", "f" : "s", "g" : "t",
"h" : "u", "i" : "v", "j" : "w", "k" : "x", "l" : "y", "m" : "z",

"A" : "N", "B" : "O", "C" : "P", "D" : "Q", "E" : "R", "F" : "S", "G" : "T",
"H" : "U", "I" : "V", "J" : "W", "K" : "X", "L" : "Y", "M" : "Z",

}

text = "Something has a balloon"
indices = text.chars
  .each_with_index
  .select{|char, index| char == "a" }
  .map{|pair| pair.last}

print indices



def rot13(secret_messages)
  
  # small   letters a to m should change to n to z
  # small   letters n to z should change to a to m
  # capital letters A to M should change to N to Z
  # capital letters N to Z should change to A to M
  
  # tr
  #   translate
  #     https://ruby-doc.org/core-2.4.1/String.html#method-i-tr

  secret_messages.map {
    |a_word|
      a_word
        .tr("a-mn-zA-MN-Z", "n-za-mN-ZA-M")
  }
end


def rot13(secret_messages)
  
  rot13 = {
    "a" => "n", "b" => "o", "c" => "p", "d" => "q", "e" => "r", "f" => "s", "g" => "t", "h" => "u", "i" => "v", "j" => "w", "k" => "x", "l" => "y", "m" => "z",
    "n" => "a", "o" => "b", "p" => "c", "q" => "d", "r" => "e", "s" => "f", "t" => "g", "u" => "h", "v" => "i", "w" => "j", "x" => "k", "y" => "l", "z" => "m",
    "A" => "N", "B" => "O", "C" => "P", "D" => "Q", "E" => "R", "F" => "S", "G" => "T", "H" => "U", "I" => "V", "J" => "W", "K" => "X", "L" => "Y", "M" => "Z",
    "N" => "A", "O" => "B", "P" => "C", "Q" => "D", "R" => "E", "S" => "F", "T" => "G", "U" => "H", "V" => "I", "W" => "J", "X" => "K", "Y" => "L", "Z" => "M"
  }

  secret_messages
    .map {
      |word|

      newWord =
        word
          .chars
            .each_with_index
            .select{|char, index| 1 == 1 }
            .map{ |pair| rot13[pair.first] || pair.first }
            .join

      newWord
  }
end

#         (x.ord+13).chr  


    # puts rot13(["Jul", "qvq"])

    #       indices =
    #         word.chars
    #           .each_with_index
    #           .select{|char, index| char == "a" }
    #           .map{|pair| pair.last}
    #       print indices

"hello".tr('el', 'ip')      #=> "hippo"
"hello".tr('aeiou', '*')    #=> "h*ll*"
"hello".tr('a-y', 'b-z')    #=> "ifmmp"
"hello".tr('^aeiou', '*')   #=> "*e**o"





# https://apidock.com/ruby/String/tr
# https://apidock.com/ruby/String/tr
# https://apidock.com/ruby/String/tr




(5..10).inject(1) {|product, n| product * n }
# 151200

(5..10).reduce(1, :*)   # :* is shorthand for multiplication
# 151200


def sum_terms(n)
  # (1..n).reduce(0, :+)
  # (1..n).inject(0) { |sum, i|  sum + (i*i + 1)  }
  (1..n).reduce(0) { |sum, i|  sum + (i*i + 1)  }

end

# sum_terms(3)






def group_by_marks(marks, pass_marks)

  # print " --------------- "
  # print marks
  # print "\n"

  hash_1_pass_0_fail =
    marks
    .group_by {
      |name, marks|
      marks >= pass_marks
    }

  new1 = {}

  hash_1_pass_0_fail
    .map {
      |key, val|
      case key
        when true
          new1["Passed"] = val
        when false
          new1["Failed"] = val
      end
    }

  new1

end

def group_by_marks(marks, pass_marks)

  # print " --------------- "
  # print marks
  # print "\n"

  hash_1_pass_0_fail =
    marks
    .group_by {
      |name, marks|
      marks >= pass_marks
    }
  
  hash_1_pass_0_fail
    .map {
      |key, val|
      case key
        when true
          [ "Passed", val ]
        when false
          [ "Failed", val ]
      end
    }
    .to_h
end

# group by first letter:
['cat', 'dog', 'cow', 'horse', 'donkey'].group_by{|animal| animal[0]}
# => {"c"=>["cat", "cow"], "d"=>["dog", "donkey"], "h"=>["horse"]}

cats = ["Tiger", "Lion", "Puma", "Leopard", "Jaguar", "Cheetah", "Bobcat"]
grouped_by_length = cats.group_by { |cat| cat.length }
#{5=>[Tiger], 4=>[Lion, Puma], 7=>[Leopard, Cheetah], 6=>[Jaguar, Bobcat]}






#   root Object class 
#     all will be private methods
#
# def hello_world
#     'Eha! Ruby'
# end
# 
# is same as
# 
# class Object
#     private
# 
#     def hello_world2
#         'Eha! Ruby'
#     end
# end






def prime? (n)

  if (n < 2)
    return false
  end

  # for i in 2..(n-1)
  # for i in 2..(n/2)
  for i in 2..(Math.sqrt n)
      if (n % i == 0)
        return false
      end
  end

  return true
end

def prime?(a)
        Prime.prime?(a)    
end

def prime? (n)

  if (n < 2)
    return false
  end

  (2..(Math.sqrt n)).none? { |i| (n % i == 0) }
end


#  -------------------------- splat (*) collects all the extra named keywords as a array parameter --------------------------


def sum(first1, *rest1)
    rest1.reduce(first1) { |ans, x| ans + x }
end

# sum(1)          # first = 1, rest = []
#     1
# sum(1, 2)       # first = 1, rest = [2]
#     3
# sum(1, 2, 3)    # first = 1, rest = [2, 3]
#     6


def full_name (first, *rest)

  rest.reduce(first) {
      |fullword1, word1|
      fullword1 + " " + word1
  }

end

def full_name(first_name, *middle_names, last_name)
  middle_names
    .unshift(first_name)
    .push(last_name)
    .join(' ')
end

def full_name(f_name,*rest,l_name)

    a = rest.reduce(f_name){|x,y| "#{x} #{y}"}

    "#{a} #{l_name}"
end


def full_name(*names)
    names.join(' ');
end

def full_name(firts_name, *rest)
    return "#{firts_name} #{rest.join(' ')}"
end





def fetch_file(uri, options)
    if options.has_key?(:proxy)
        # do something
    end
end


def foo(x, str: "foo", num: 424242)
  [x, str, num]
end

#   foo(13) #=> [13, 'foo', 424242]
#   foo(13, str: 'bar') #=> [13, 'bar', 424242]


#  -------------------------- double splat (*) collects all the extra named keywords as a hash parameter --------------------------

def foo(str: "foo", num: 424242, **options)
  [str, num, options]
end

#   foo                 # => ['foo', 424242, {}]
#   foo(check: true)    # => ['foo', 424242, {check: true}]




def convert_temp (temperature, input_scale, output_scale='celsius')
  case input_scale
    when "celsius"
      case output_scale
        when "fahrenheit"
          temperature * (9/5.0) + 32
        when "kelvin"
          temperature + 273.15
        else
          temperature
      end
    when "fahrenheit"
      case output_scale
        when "celsius"
          (temperature - 32) * (5/9.0)
        when "kelvin"
          (temperature - 32) * (5/9.0) + 273.15
        else
          temperature
      end
    when "kelvin"
      case output_scale
        when "celsius"
          temperature - 273.15
        when "fahrenheit"
          (temperature - 273.15) * (9/5.0) + 32
        else
          temperature
      end
  end
  return converted_temperature
end

#   convert_temp(0, input_scale: 'celsius', output_scale: 'kelvin')           => 273.15
#   convert_temp(0, input_scale: 'celsius', output_scale: 'fahrenheit')       => 32.0




# def convert_temp(temp, input_scale:, output_scale: 'Celsius')
def convert_temp (temperature, output_scale: 'celsius', **options)

  input_scale = options.first.last

  case input_scale
    when "celsius"

      case output_scale
        when "fahrenheit"
          return temperature * (9/5.0) + 32
        when "kelvin"
          return temperature + 273.15
        else
          return temperature
      end # case output_scale

    when "fahrenheit"

      case output_scale
        when "celsius"
          return (temperature - 32) * (5/9.0)
        when "kelvin"
          return (temperature - 32) * (5/9.0) + 273.15
        else
          return temperature
      end # case output_scale

    when "kelvin"

      case output_scale
        when "celsius"
          return temperature - 273.15
        when "fahrenheit"
          return (temperature - 273.15) * (9/5.0) + 32
        else
          return temperature
      end # case output_scale

    else
      return temperature

  end # case input_scale

end

# 273.15 
# print "  "
# print convert_temp(0, input_scale: 'celsius', output_scale: 'fahrenheit')
# 32.0
# print "  "






# ------------------- blocks -------------------------------

# define `method1`   with no parameters
def method1
    puts " mmm 1"
    yield   #    Calling yield will execute the code within the block that is provided to the method.
    puts " mmm 2"
end 

# call the `method1`
#   pass the  block of code  as parameter
method1 do
    puts " blockkkk "
end

#     mmm 1
#     blockkkk
#     mmm 2
# ----------------------------------------------------------

# define `method1`   with parameters
def method1(a,b)
    yield(a, b)         #  yield statement invokes the  block  with parameters a and b, and executes it.
end

# call the `method1`
#   pass the expected parameters  and
#   then an additional  block of code  as parameter
puts method1(15, 10) {|a, b| a - b}  
# ----------------------------------------------------------


def factorial
    yield
end

n = gets.to_i
factorial do 
    puts (1..n).reduce(1, :*)
end





# Blocks (do .. end) are not objects, and they can't be saved to variables
# `Proc` objects are blocks of code that can be bound to a set of local variables
#     think of a proc object as a "saved" block

add = proc {|x, y| x + y}

def foo(a, b, my_proc)
    my_proc.call(a, b)
end

puts foo(15, 10, add)



proc_square_number = proc { |x| x*x }
proc_sum_array     = proc { |arr| arr.reduce(0, :+) }

def square_of_sum (my_array, proc_square, proc_sum)
    sum = proc_sum.call(my_array)
    proc_square.call(sum)
end

my_array = gets.split().map(&:to_i)
puts square_of_sum(my_array, proc_square_number, proc_sum_array)



# Lambdas are anonymous functions
#     objects of the class Proc
#     can be used
#         as arguments to higher-order functions
#         to construct the result of a higher-order function that needs to return a function.

#Ruby version <= 1.8
    lambda { /**/ } 

    lambda do
        /**/
    end

#Ruby version >= 1.9, "stabby lambda" syntax is added
    -> { /**/ }

    -> do
        /**/
    end


# examples

#   no arguments

def area (l, b)
   -> { l * b } 
end

x = 10.0; y = 20.0

area_rectangle = area(x, y).call
area_triangle = 0.5 * area(x, y).()

puts area_rectangle     #200.0
puts area_triangle      #100.0

#   one or more arguments.

area = ->(a, b) { a * b }

x = 10.0; y = 20.0

area_rectangle = area.call(x, y)
area_triangle = 0.5 * area.(x, y)

puts area_rectangle     #200.0
puts area_triangle      #100.0    


--
# Write a lambda which takes an integer and square it
square      = ->(x) { x*x }

# Write a lambda which takes an integer and increment it by 1
plus_one    = ->(x) { x+1 }

# Write a lambda which takes an integer and multiply it by 2
into_2      = ->(x) { x*2 }

# Write a lambda which takes two integers and adds them
adder       = ->(x,y) { x+y }

# Write a lambda which takes a hash and returns an array of hash values
values_only = ->(hash1) { hash1.values }


input_number_1 = gets.to_i
input_number_2 = gets.to_i
input_hash = eval(gets)

a = square.(input_number_1); b = plus_one.(input_number_2);c = into_2.(input_number_1); 
d = adder.(input_number_1, input_number_2);e = values_only.(input_hash)

p a; p b; p c; p d; p e


--




# closures
# Blocks, Procs and Lambdas     are     closures in Ruby.


def plus_1(y)
   x = 100      # no effect on y call below
   y.call       #remembers the value of x = 1
end

x = 1
y = -> { x + 1 }  # x value will always be 1 (check ?????????)
puts plus_1(y)  #2




def block_message_printer
    message = "Welcome to Block Message Printer"
    if block_given?
        yield
    end
  puts "But in this function/method message is :: #{message}"
end

message = gets
block_message_printer { puts "This message remembers message :: #{message}" }

#####################################################################################

def proc_message_printer(my_proc)
    message = "Welcome to Proc Message Printer"
    my_proc.call
    puts "But in this function/method message is :: #{message}"
end


my_proc = proc { puts "This message remembers message :: #{message}" }
proc_message_printer(my_proc)
    
######################################################################################    
    
def lambda_message_printer(my_lambda)
    message = "Welcome to Lambda Message Printer"
    my_lambda.call
    puts "But in this function/method message is :: #{message}"
end

my_lambda = -> { puts "This message remembers message :: #{message}" }
lambda_message_printer(my_lambda)    
    
######################################################################################





# In Partial Application, we create a lambda that takes a parameter and returns a lambda that does something with it.
# https://en.wikipedia.org/wiki/Partial_application

multiply_function = -> (number) do
   -> (another_number) do
       number * another_number
   end
end

doubler = multiply_function.(2)
tripler = multiply_function.(3)

puts doubler.(4)
puts tripler.(4)






combination = -> (n) {  -> (r) {
    r = n-r    if (r > n-r)
    ((n-r+1)..n).reduce(1, :*) /  (1..r).reduce(1, :*)   # numer/denom
  }}

n = gets.to_i
r = gets.to_i
nCr = combination.(n)
puts nCr.(r)

# combination = -> (n) do
#   -> (r) do
#     k=1
#     r.times{
#       |i|
#       k=k*(n-i)/(i+1)
#     }
#   k
# end 

# combination = -> (number) do
#   -> (another_number) do
#     (
#       number.fact/ (another_number.fact * (number - another_number).fact)
#     )
#   end
# end



z.downto(1)




# Currying is a technique in which
#     a function accepts  parameters and
#       turns it into a sequence of  functions
#         each of them take 1 parameter.

multiply_numbers = -> (x,y) do
    x*y
end

doubler = multiply_numbers.curry.(2)
tripler = multiply_numbers.curry.(3)

puts doubler.(4)    #8
puts tripler.(4)    #12





power_function = -> (x, z) {
    (x) ** z
}

base = gets.to_i
raise_to_power = power_function.curry.(base)

power = gets.to_i
puts raise_to_power.(power)












# remove all whitespace     from one or both ends
"        Something".rstrip    # "Something"
"Something        ".lstrip    # "Something"
"  \t    Something \r\n ".strip     # "Something"



# remove multiple char at end
a = "Something"
a2 = a.chomp("ng")                              # a2 is "Somethi"   (check this)

a = "Something\n"
b = a.chomp                                     # default: remove traling newline

a = "Something"
b = a.chomp                                     # default: <nothing is done since no newline>

# chomp! is used for in-place remove


# remove 1 char at end
# creates new string
a = "Something"
a2 = a.chop                                     # a2 is "Somethin" (a is unchanged)

a = "Something\n"
b = a.chop                                      # a2 is "Something" (a is unchanged)

# inplace
a = "Something"
a.chop!                                         # a is "Somethin"

a = "Something\n"
a.chop!                                         # a is "Something"





def process_text(strarr)

  strarr
    .map { |str1| str1.strip }
    .join(' ')

end




"hello".include? "lo"   #=> true  
"hello".include? "ol"   #=> fals

"hello".gsub(/[aeiou]/, '*')                  #=> "h*ll*"
"hello".gsub(/([aeiou])/, '')             #=> "hll"




def strike(str1)
    "<strike>#{str1}</strike>"
end

def mask_article(str1, arr1)
  
  if (arr1.length == 0)
    strike(str1)
    
  else
    arr1
    .map {
        |a_str|
        str1.gsub!(a_str, strike(a_str))
    }

    str1
  end

end
















