
name = "Ram"
age = 25
marks = 80.5

print ("name\t", name)
print ("age\t", age)
print ("name\t", marks)

name = "Shyam"

print ("name\t", name)

a = b = c = 1;
print (a, b, c)



list1 = [2, 5.5, "Hi"]
print(list1)

list1[0] = 3
print(list1)


# tuples are immutable

tuple1 = (50, 25.6, "Python")
print(tuple1)

# tuple1[0] = 51    # TypeError: 'tuple' object does not support item assignment
# print(tuple1)



# set - ordered collection of items
set1 = {5, 1, 2.6, "python"}
print(set1)
# print(set1[0]) # TypeError: 'set' object is not subscriptable

# set1[0] = 51    # TypeError: 'set' object does not support item assignment
# print(set1)


dict1 = {"name":'Ram',  "age":25,   3:'junk'}
print(dict1)
# print(dict1[0]) # KeyError: 0
# print(dict1[1]) # KeyError: 1
print(dict1["age"])
