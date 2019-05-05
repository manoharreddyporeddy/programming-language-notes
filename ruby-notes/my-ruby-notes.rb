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



%w[ant bear cat].all? { |word| word.length >= 3 } #=> true
%w[ant bear cat].all? { |word| word.length >= 4 } #=> false
%w[ant bear cat].all?(/t/)                        #=> false
[1, 2i, 3.14].all?(Numeric)                       #=> true
[nil, true, 99].all?                              #=> false
[].all?                                           #=> true

%w[ant bear cat].any? { |word| word.length >= 3 } #=> true
%w[ant bear cat].any? { |word| word.length >= 4 } #=> true
%w[ant bear cat].any?(/d/)                        #=> false
[nil, true, 99].any?(Integer)                     #=> true
[nil, true, 99].any?                              #=> true
[].any?                                           #=> false

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

text = "Sammy has a balloon"
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









