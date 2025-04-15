# Python Programming Language Notes

## Introduction to Python

### Brief History and Overview
Python is a high-level, interpreted programming language created by Guido van Rossum and released in 1991. Known for its simplicity and readability, Python supports multiple programming paradigms including procedural, object-oriented, and functional programming.

### Installation and Setup
- Download Python from the [official website](https://www.python.org/downloads/).
- Install using the default settings.
- Verify installation:
  ```bash
  python --version
  ```
- Use IDEs like VS Code, PyCharm, or Jupyter Notebook for coding.

### Basic Syntax and Structure
```python
# This is a comment
print("Hello, World!")
```
- Indentation is crucial in Python.
- No need for semicolons.

### Basic Input and Output
```python
# Basic print statement
print("hello")

# Printing without line breaks
print("a", end="")
print("b", end="")
print("c", end="")
print()  # This adds a newline after abc

# Taking user input
str = input()             # String input
n = int(input())          # Integer input
f = float(input())        # Float input

# Formatted print statements
name = "Ram"
age = 25
marks = 80.5

print("name\t", name)    # name	 Ram
print("age\t", age)      # age	 25
print("marks\t", marks)  # marks	 80.5
```

---

## Data Types and Variables

### Data Types
- **int**: Whole numbers → `a = 10`
- **float**: Decimal numbers → `b = 10.5`
- **string**: Text → `name = "John"`
- **list**: Ordered, mutable collection → `lst = [1, 2, 3]`
- **tuple**: Ordered, immutable collection → `tup = (1, 2, 3)`
- **dictionary**: Key-value pairs → `d = {"key": "value"}`
- **set**: Unordered, unique elements → `s = {1, 2, 3}`

### Variable Declaration and Assignment
```python
x = 5
name = "Python"

# Multiple assignment
a = b = c = 1
print(a, b, c)  # 1 1 1

# Reassigning variables
name = "Ram"
print(name)  # Ram
name = "Shyam"
print(name)  # Shyam
```

### Lists and List Operations
```python
# Homogeneous list (same data type)
l1 = [1, 2, 3]

# Heterogeneous list (mixed data types)
l2 = [1, 'a', "abc"]
l2.append(4.44)  # Adding element to list

list1 = [2, 5.5, "Hi"]
print(list1)      # [2, 5.5, 'Hi']

# Lists are mutable
list1[0] = 3
print(list1)      # [3, 5.5, 'Hi']
```

### Tuples
```python
# Tuples are immutable
tuple1 = (50, 25.6, "Python")
print(tuple1)     # (50, 25.6, 'Python')

# tuple1[0] = 51  # TypeError: 'tuple' object does not support item assignment
```

### Sets
```python
# Set - unordered collection of unique items
set1 = {5, 1, 2.6, "python"}
print(set1)       # {1, 2.6, 5, 'python'} (order may vary)

# print(set1[0])  # TypeError: 'set' object is not subscriptable
# set1[0] = 51    # TypeError: 'set' object does not support item assignment
```

### Dictionaries
```python
# Creating empty dictionary
m1 = {}
# Adding key-value pairs
m1["key1"] = "value1"
m1["key2"] = "value2"

# Dictionary with various data types as keys
dict1 = {"name": 'Ram', "age": 25, 3: 'junk'}
print(dict1)            # {'name': 'Ram', 'age': 25, 3: 'junk'}
# print(dict1[0])       # KeyError: 0
print(dict1["age"])     # 25
```

### Type Casting and Checking
```python
int("10")
float("3.14")
type(x)  # <class 'int'>
```

---

## Operators

### Arithmetic Operators
```python
a = 5
b = 2

print(a + b)   # 7     Addition
print(a - b)   # 3     Subtraction
print(a * b)   # 10    Multiplication
print(a / b)   # 2.5   Division
print(a // b)  # 2     Floor division
print(a % b)   # 1     Modulus (remainder)
print(a ** b)  # 25    Exponentiation (power)
```

### Comparison Operators
```python
print(a == b)  # False
print(a > b)   # True
```

### Logical Operators
```python
print((a > 0) and (b > 0))  # True
```

### Assignment Operators
```python
x = a
print(x)    # 5
x = x + 2
print(x)    # 7
x += 2      # Compound assignment operator
print(x)    # 9
```

### Membership Operators
```python
x = "abc"
print("a" in x)  # True
print("z" in x)  # False

x = 'apple'
if x in ["apple", 'banana', 'somethingelse']:
    print("yes, x is in list")
else:
    print("yes, x is Not in list")
```

### Identity Operators
```python
if x is "abc":
    print("yes, x is abc")
else:
    print("no, x is not abc")
```

---

## Control Flow

### Conditional Statements
```python
y = 5
# Simple if-else
if y > 0:
    print("positive")
else:
    print("not positive")

# Nested if-else
if y > 0:
    print("positive")
else:
    if y < 0:
        print("negative")
    else:
        print("is 0")

# If-elif-else
if y > 0:
    print("positive")
elif y < 0:
    print("negative")
else:
    print("is 0")

# Complex condition
x = 69
if (x >= 60 and x < 70):
    print("1st class")
```

### Loops
```python
# For loop
for i in range(5):
    print(i)

# While loop
while x > 0:
    x -= 1
    
# Looping through a list
fruitlist = ["apple", 'banana', 'three', 'four', 'five']
for fruit in fruitlist:
    print(fruit)
    
# Looping with index
numOfFruits = len(fruitlist)
indexlist = range(numOfFruits)  # [0,1,2,3,4]
for i in indexlist:
    print(fruitlist[i])
```

### Break, Continue, and Pass
```python
# Continue example
for i in indexlist:
    if i == 1 or i == 2:
        continue  # Skip iterations where i is 1 or 2
    print(fruitlist[i])

# Break example
for i in indexlist:
    if i == 2:
        break  # Exit loop when i is 2
    print(fruitlist[i])
    
# Pass example
def aaa():
    pass  # Function stub, does nothing
```

---

## Functions

### Defining and Calling
```python
def openApp():
    print("openApp - begin")
    print("openApp - end")

def searchForFoodItem(food_item):
    print("searchForFoodItem - begin")
    print(food_item)
    print("searchForFoodItem - end")

# Calling the functions
openApp()
searchForFoodItem("\t chocolate cake")
```

### Functions with Parameters
```python
def printTill(n):
    for n in range(n):
        print(n)

print("")
printTill(3)  # Prints 0, 1, 2

print("")
printTill(5)  # Prints 0, 1, 2, 3, 4

def sum(a, b, c):
    print(a + b + c)

sum(1, 1, 1)  # 3
sum(1, 2, 3)  # 6
```

### Positional and Keyword Arguments
```python
def printInSeq(a, b, c):
    print(a, b, c)

printInSeq(1, 2, 3)        # Positional arguments
printInSeq(c=3, a=1, b=2)  # Keyword arguments
```

### Default Arguments
```python
def printSumOfScores(s1, s2, s3, s4=-1, s5=-1):
    print(s1 + s2 + s3 + s4 + s5)

printSumOfScores(1, 2, 3, 4, 5)  # 15
printSumOfScores(1, 2, 3)        # Using default values for s4 and s5
printSumOfScores(1, 2, 3, 4)     # Using default value for s5
```

### Variable-Length Arguments
```python
def printSumOfScores2(*scoreList):
    sum = 0
    for x in scoreList:
        sum = sum + x
    print(sum)  # Note: fixed bug - was printing x instead of sum

printSumOfScores2(1)             # 1
printSumOfScores2(1, 2)          # 3
printSumOfScores2(1, 2, 3)       # 6
printSumOfScores2(1, 2, 3, 4, 5) # 15
```

### Lambda Functions and Higher-Order Functions
```python
square = lambda x: x**2
print(square(4))

# Higher-order function
nums = [1, 2, 3]
print(list(map(lambda x: x * 2, nums)))
```

### Example of Function Usage in a Program
```python
def openApp():
    print("openApp - begin")
    print("openApp - end")

def searchForFoodItem(food_item):
    print("searchForFoodItem - begin")
    print(food_item)
    print("searchForFoodItem - end")

def selectRestraunt(restrauntName):
    print("selectRestraunt - begin")
    print(restrauntName)
    print("selectRestraunt - end")

def addItemsToCart(cakeNames):
    print("addItemsToCart - begin")
    for cakeName in cakeNames:
        print(cakeName)
    print("addItemsToCart - end")

def checkOut():
    print("checkOut - begin")
    print("checkOut - end")

def trackStatus():
    print("trackStatus - begin")
    print("trackStatus - end")

print("main - begin")
openApp()
searchForFoodItem("\t chocolate cake")
selectRestraunt("\t abc backers")
addItemsToCart(
    [
        "\t chocolate cake",
        "\t chocolate cake 2",
        "\t chocolate cake 3",
        "\t pineapple cake"
    ]
)
checkOut()
trackStatus()
print("main - end")
```

---

## File Handling

### Reading and Writing
```python
# Writing to a file
f = open("file.txt", "w")
f.write("Hello Python \n")
f.write("Hello World")
f.close()

# Reading from a file
fobj = open("f1.txt")
print(fobj.read())
print(fobj.readline())
```

### File Modes
- `r`: Read
- `w`: Write
- `a`: Append
- `b`: Binary

### File Operations with OS Module
```python
import os

# Delete a file
os.remove("file.txt")

# Check if file exists before deleting
if os.path.exists("file.txt"):
    os.remove("file.txt")
    print("File deleted successfully")
else:
    print("The file does not exist")
```

### Exception Handling
```python
try:
    with open("file.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")
```

---

## Modules and Packages

### Importing
```python
import math
from datetime import datetime
import os  # For file operations
```

### Custom Modules
- Create `my_module.py` with functions.
- Import using `import my_module`.

### Standard Library Modules
- `math`, `datetime`, `os`, `sys`, `random`

---

## Object-Oriented Programming

### Classes and Objects
```python
class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        return f"Hi, I'm {self.name}"

p = Person("John")
print(p.greet())
```

### Inheritance and Polymorphism
```python
class Student(Person):
    def greet(self):
        return f"Hi, I'm student {self.name}"

s = Student("Doe")
print(s.greet())
```

### Encapsulation and Abstraction
```python
class BankAccount:
    def __init__(self):
        self.__balance = 0  # Private attribute
    
    def deposit(self, amount):
        self.__balance += amount
    
    def get_balance(self):
        return self.__balance
```

---

## Advanced Topics

### List Comprehensions and Generators
```python
# List comprehension
squares = [x**2 for x in range(5)]

# Generator expression
gen = (x**2 for x in range(5))
```

### Decorators
```python
def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()
```

### Context Managers
```python
with open("file.txt", "r") as f:
    data = f.read()
```

### Async Programming
```python
import asyncio

async def main():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

asyncio.run(main())
```

---
