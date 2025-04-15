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

---

## Data Types and Variables

### Data Types
- **int**: Whole numbers → `a = 10`
- **float**: Decimal numbers → `b = 10.5`
- **string**: Text → `name = "Soumika"`
- **list**: Ordered, mutable collection → `lst = [1, 2, 3]`
- **tuple**: Ordered, immutable collection → `tup = (1, 2, 3)`
- **dictionary**: Key-value pairs → `d = {"key": "value"}`
- **set**: Unordered, unique elements → `s = {1, 2, 3}`

### Variable Declaration and Assignment
```python
x = 5
name = "Python"
```

### Type Casting and Checking
```python
int("10")
float("3.14")
type(x)  # <class 'int'>
```

---

## Control Flow

### Conditional Statements
```python
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")
```

### Loops
```python
# For loop
for i in range(5):
    print(i)

# While loop
while x > 0:
    x -= 1
```

### Break, Continue, and Pass
```python
for i in range(5):
    if i == 3:
        break
    elif i == 1:
        continue
    else:
        pass
    print(i)
```

---

## Functions

### Defining and Calling
```python
def greet(name):
    return f"Hello, {name}"

print(greet("Soumika"))
```

### Arguments and Return Values
```python
def add(a, b):
    return a + b
```

### Lambda Functions and Higher-Order Functions
```python
square = lambda x: x**2
print(square(4))

# Higher-order function
nums = [1, 2, 3]
print(list(map(lambda x: x * 2, nums)))
```

---

## Modules and Packages

### Importing
```python
import math
from datetime import datetime
```

### Custom Modules
- Create `my_module.py` with functions.
- Import using `import my_module`.

### Standard Library Modules
- `math`, `datetime`, `os`, `sys`, `random`

---

## File Handling

### Reading and Writing
```python
# Writing
with open("file.txt", "w") as f:
    f.write("Hello, File!")

# Reading
with open("file.txt", "r") as f:
    content = f.read()
```

### File Modes
- `r`: Read
- `w`: Write
- `a`: Append
- `b`: Binary

### Exception Handling
```python
try:
    with open("file.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")
```

---

## Object-Oriented Programming

### Classes and Objects
```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hi, I'm {self.name}"

p = Person("Soumika")
print(p.greet())
```

### Inheritance and Polymorphism
```python
class Student(Person):
    def greet(self):
        return f"Hi, I'm student {self.name}"

s = Student("Devarakonda")
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

## References for Further Learning
- [Python Official Docs](https://docs.python.org/3/)
- [W3Schools Python Tutorial](https://www.w3schools.com/python/)
- [Real Python](https://realpython.com/)
- [Corey Schafer YouTube Channel](https://www.youtube.com/user/schafer5)

---

This comprehensive documentation should help learners and developers understand the core and advanced features of Python effectively.

