Recursive  Tower[s] of Hanoi
	Following: http://en.wikipedia.org/wiki/Tower_of_movedisk
	
	Tower of Hanoi (Tower of Brahma/ Lucas' Tower,[1] and sometimes pluralized)
		is a mathematical   game or puzzle.
	It consists of 
		three rods, and a 
		number of disks of   different sizes 
			which can slide onto any rod.
	The puzzle starts with the 
			disks in a neat STACK 
				in ascending order of size 
					on one rod, the SMALLEST AT THE TOP, thus making a conical shape.

	The OBJECTIVE OF THE PUZZLE is to 
			move the  entire stack   to another rod, 
			obeying the following  simple rules:

		1. Only one disk can be moved at a time.
		2. Each move consists of 
				taking the upper disk  from one of the stacks  and 
				placing it  on top of another stack
					i.e. a disk   can only be moved   if it is the   uppermost disk   on a stack.
		3. No disk   may be placed   on top of a   smaller disk.

	The minimum number of moves required   to solve a Tower of Hanoi puzzle is   (2 power discCount - 1),    where discCount is the number of disks.
	With three disks, 
		the puzzle can be solved in 7 moves. (2power3-1 = 8-1 = 7)

	A simple solution for the toy puzzle:
		Alternate moves between the
			smallest piece and a non - smallest piece.
		When moving the smallest piece,
			always move it to the next position in the same direction
				(to left if odd disks,
				to right if even disks)
			If there is no tower position in the chosen direction,
				move the piece to the opposite end,
			but then continue to move in the correct direction.
			For example, if you started with three pieces, you would move the smallest piece to the opposite end,
				then continue in the left direction after that.
		When the turn is to move the non - smallest piece, there is only one legal move.
			Doing this will complete the puzzle in the fewest number of moves.
