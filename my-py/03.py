
a = 5
b = 2

print (a + b)  # 7
print (a - b)  # 3
print (a * b)  # 10
print (a / b)  # 2.5
print (a // b) # 2		Floor division (//)	

print (a % b)  # 1 		Modulus (%)	or reminder	
print (a ** b) # 32 = 2*2* 2*2* 2      Exponentiation (**)		x power y

print (a == b) # False

print (a>0) and (b>0)  # True


x = a
print(x) # 5
x = x + 2
print(x) # 7
x += 2
print(x) # 9


x = "abc"
print ("a" in x) # True
print ("z" in x) # False


if x is "abc":
	print ("yes, x is abc")
else:
	print ("no, x is not abc")


x = 'apple'
if x in [ "apple", 'banana', 'somethingelse' ]:
	print ("yes, x is in list")
else:
	print ("yes, x is Not in list")


y = 5
if y > 0:
	print ("positive")
else:
	print ("not positive")


y = 5
if y > 0:
	print ("positive")
else:
	if y < 0:
		print ("negative")
	else:
		print (" is 0")


y = 5
if y > 0:
	print ("positive")
elif y < 0:
	print ("negative")
else:
	print (" is 0")

# if (condition): statement 1; statement 2; statement 3;…;statement n
# elif (condition): statement 1; statement 2; statement 3;…;statement n
# else: statement 1; statement 2; statement 3;…;statement n

x = 69
if (x >= 60 and x < 70):
	print ("1st class")





fruitlist = [ "apple", 'banana', 'three', 'four', 'five' ]

print (0)
print (fruitlist[0])

# fruit will take each of the list values
for fruit in fruitlist:
	print (fruit)


numOfFruits = len(fruitlist)
indexlist = range(numOfFruits) # [0,1,2]

print ("")
for i in indexlist:
	if i != 1  and  i != 2:
		print (fruitlist[i])

print ("")
for i in indexlist:
	if i == 1  or  i == 2:
		continue
	print (fruitlist[i])

print ("")
for i in indexlist:
	if i == 2:
		break
	print (fruitlist[i])



def aaa:
	pass

aaa()

