#ifndef TOWER_OF_HANOI__RECURSIVE_H_INCLUDED
#define TOWER_OF_HANOI__RECURSIVE_H_INCLUDED

#include "assert.h"
#include "iostream"
using namespace std;

namespace TOWER_OF_HANOI__RECURSIVE
{
	class TowerOfHanoi_Recursive
	{
	public:
		static void moveDisk(char pegA, char pegB, char pegC, int discCount);
	};
}
#endif // TOWER_OF_HANOI__RECURSIVE_H_INCLUDED
