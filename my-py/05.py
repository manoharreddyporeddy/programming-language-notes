
x = 45
print (x)

y = input("enter y value: ")
print (y)


fobj = open("f1.txt")
fobj = open("C:/cf1.txt")
print(f.read())
print(f.readline())


f = open("file.txt", "w")
f.write("Hello Python \n")
f.write("Hello World")
f.close()


import os
os.remove("file.txt")


import os
if os.path.exists("file.txt"):
	os.remove("file.txt")
	print("File deleted successfully")
else:
	print("The file does not exist")
