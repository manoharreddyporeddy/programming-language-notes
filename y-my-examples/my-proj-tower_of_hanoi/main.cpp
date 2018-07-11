// projects.cpp : Defines the entry point for the console application.

/*
*******************************************************************************************************************
* TOWER OF HANOI - NON RECURSIVE
*******************************************************************************************************************
*/
#include "tower_of_hanoi__non_recursive.h"
void test_TowerOfHanoi_NonRecursive()
{
	cout << " -- test_TowerOfHanoi_NonRecursive -- " << endl;
	using namespace TOWER_OF_HANOI__NON_RECURSIVE;

	TowerOfHanoi_NonRecursive::play(1);
	TowerOfHanoi_NonRecursive::play(2);
	TowerOfHanoi_NonRecursive::play(3);
	TowerOfHanoi_NonRecursive::play(4);

	cout << endl;
}

/*
*******************************************************************************************************************
* TOWER OF HANOI - RECURSIVE
*******************************************************************************************************************
*/
#include "tower_of_hanoi__recursive.h"
void test_TowerOfHanoi_Recursive()
{
	cout << " -- test_TowerOfHanoi_Recursive -- " << endl;
	using namespace TOWER_OF_HANOI__RECURSIVE;

	cout << "Number of discs = 1" << endl;
	TowerOfHanoi_Recursive::moveDisk('A', 'B', 'C', 1);
	cout << "Number of discs = 2" << endl;
	TowerOfHanoi_Recursive::moveDisk('A', 'B', 'C', 2);
	cout << "Number of discs = 3" << endl;
	TowerOfHanoi_Recursive::moveDisk('A', 'B', 'C', 3);
	cout << "Number of discs = 4" << endl;
	TowerOfHanoi_Recursive::moveDisk('A', 'B', 'C', 4);

	cout << endl;
}

int main(int argc, char* argv[])
{
	test_TowerOfHanoi_Recursive();
	test_TowerOfHanoi_NonRecursive();

	return 0;
}
