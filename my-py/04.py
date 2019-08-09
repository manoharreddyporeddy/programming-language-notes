

def printTill(n):
	for n in range(n):
		print(n)

print("")
printTill(3)

print("")
printTill(5)




def sum(a, b, c):
	print (a+b+c)

print("")
sum(1,1,1)

print("")
sum(1,2,3)



def printInSeq(a, b, c):
	print (a,b,c)


printInSeq(1,2,3)
printInSeq(3,1,2)

printInSeq(c=3,a=1,b=2) # Keyworded Arguments



# Default Arguments
def printSumOfScores (s1,s2,s3, s4=-1, s5=-1):
	print (s1+s2+s3+s4+s5)

printSumOfScores(1,2,3,4,5)
printSumOfScores(1,2,3)
printSumOfScores(1,2,3,4)



# Variable-length Arguments   (*)

def printSumOfScores2 (*scoreList):
	sum = 0
	for x in scoreList:
		sum = sum + x
	print (x)

print ("")
printSumOfScores2(1)
printSumOfScores2(1,2)
printSumOfScores2(1,2,3)

print ("")
printSumOfScores2(1,2,3,4,5)
printSumOfScores2(1,2,3)
printSumOfScores2(1,2,3,4)


