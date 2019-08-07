

def openApp():
	print ("openApp - begin")
	print ("openApp - end")

def searchForFoodItem(food_item):
	print ("searchForFoodItem - begin")
	print (food_item)
	print ("searchForFoodItem - end")

def selectRestraunt(restrauntName):
	print ("selectRestraunt - begin")
	print (restrauntName)
	print ("selectRestraunt - end")

def addItemsToCart(cakeNames):
	print ("addItemsToCart - begin")
	for cakeName in cakeNames:
		print (cakeName)
	print ("addItemsToCart - end")

def checkOut():
	print ("checkOut - begin")
	print ("checkOut - end")

def trackStatus():
	print ("trackStatus - begin")
	print ("trackStatus - end")

print ("main - begin")
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
print ("main - end")
