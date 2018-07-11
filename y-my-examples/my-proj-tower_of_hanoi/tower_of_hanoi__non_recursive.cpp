#include "tower_of_hanoi__non_recursive.h"
using namespace TOWER_OF_HANOI__NON_RECURSIVE;

struct Stack
{
public:
	Stack(int *pstack, int top) : pEles(pstack), _top(top)
	{
	}
	int *pEles = NULL;
	int _top = -1;
};
typedef struct Stack STACK;

void printStack(const STACK &pegA, int discCountInitial)
{
	int i;
	for (i = 0; i <= pegA._top; i++)
	{
		cout << pegA.pEles[i] << " ";
	}

	if (i == 0) {
		cout << "- ";
		for (; i < discCountInitial; i++)
		{
			cout << "  ";
		}
	}
	else {
		for (; i <= discCountInitial; i++)
		{
			cout << "  ";
		}
	}
}

void printStacks(const STACK &pegA, const STACK &pegB, const STACK &pegC, int discCountInitial)
{
	printStack(pegA, discCountInitial);
	printStack(pegB, discCountInitial);
	printStack(pegC, discCountInitial);
	cout << endl;
}

bool makeLegalMoveBetween(STACK &peg1, STACK &peg2)
{
	// Both stacks are non-empty
	if ((peg1._top != -1) && (peg2._top != -1))
	{
		// Ele on peg2 top is bigger than on peg1 top, so move smaller to bigger
		if (peg2.pEles[peg2._top] > peg1.pEles[peg1._top])
		{
			// FIXME: Overflow check
			peg2._top++;
			peg2.pEles[peg2._top] = peg1.pEles[peg1._top];
			peg1._top--;
		}
		// Ele on peg1 top is bigger than on peg2 top, so move smaller to bigger
		else if (peg1.pEles[peg1._top] > peg2.pEles[peg2._top])
		{
			peg1._top++;
			peg1.pEles[peg1._top] = peg2.pEles[peg2._top];
			peg2._top--;
		}
		else // (peg1.pEles[peg1._top] == peg2.pEles[peg2._top])
		{	// Not possible? Looks so
			return false;
		}
	}
	// Stack is empty
	else if (peg1._top == -1)
	{
		peg1._top++;
		peg1.pEles[peg1._top] = peg2.pEles[peg2._top];
		peg2._top--;
	}
	// Stack2 is empty
	else if (peg2._top == -1)
	{
		peg2._top++;
		peg2.pEles[peg2._top] = peg1.pEles[peg1._top];
		peg1._top--;
	}
	// Both Stacks1 & Stack2 is empty
	else  // ((peg1._top == -1) && (peg2._top == -1))
	{	// Can't move
		return false;
	}

	return true;
}

void TowerOfHanoi_NonRecursive::play(int discCountInitial)
{
	cout << "Number of discs = " << discCountInitial << endl;

	STACK pegA = { new int[discCountInitial], -1 };
	STACK pegB = { new int[discCountInitial]{}, -1 }; // 1st param array elements intialize to 0
	STACK pegC = { new int[discCountInitial]{}, -1 };

	for (int i = 0; i < discCountInitial; i++)
	{
		pegA._top++;
		pegA.pEles[i] = discCountInitial - i;			// 3,2,1 for discCountInitial = 3
	}
	printStacks(pegA, pegB, pegC, discCountInitial);

	// odd, say 3, left
	if (discCountInitial % 2 != 0)
	{
		do
		{
			makeLegalMoveBetween(pegA, pegC);
			printStacks(pegA, pegB, pegC, discCountInitial);
			if (pegC._top == (discCountInitial - 1)) {
				break;
			}

			makeLegalMoveBetween(pegA, pegB);
			printStacks(pegA, pegB, pegC, discCountInitial);
			if (pegC._top == (discCountInitial - 1)) {
				break;
			}

			makeLegalMoveBetween(pegB, pegC);
			printStacks(pegA, pegB, pegC, discCountInitial);
			if (pegC._top == (discCountInitial - 1)) {
				break;
			}
		} while (true);
	}
	else
	{
		do
		{
			makeLegalMoveBetween(pegA, pegB);
			printStacks(pegA, pegB, pegC, discCountInitial);
			if (pegC._top == (discCountInitial - 1)) {
				break;
			}

			makeLegalMoveBetween(pegA, pegC);
			printStacks(pegA, pegB, pegC, discCountInitial);
			if (pegC._top == (discCountInitial - 1)) {
				break;
			}

			makeLegalMoveBetween(pegB, pegC);
			printStacks(pegA, pegB, pegC, discCountInitial);
			if (pegC._top == (discCountInitial - 1)) {
				break;
			}
		} while (true);
	}
}
