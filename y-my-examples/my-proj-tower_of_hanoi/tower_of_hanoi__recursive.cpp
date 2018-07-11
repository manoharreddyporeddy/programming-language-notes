#include "tower_of_hanoi__recursive.h"
using namespace TOWER_OF_HANOI__RECURSIVE;

void TowerOfHanoi_Recursive::moveDisk(char pegA, char pegB, char pegC, int discCount)
{
	if (discCount > 0)
	{
		moveDisk(pegA, pegC, pegB, discCount - 1);
		cout << "Move the top Disk from " << pegA << " to " << pegC << endl;
		moveDisk(pegB, pegA, pegC, discCount - 1);
	}
}
