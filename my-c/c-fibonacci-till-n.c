#include <stdio.h>

void fibonacci_till_n(int n) {

	int first = 0;	// this may start from 1 too
	int second = 1;

	// print the 1st two fibonacii numbers
	printf("%d %d ", first, second);

	int third;
	while (1) {

		// third will calculated  as addition of  first and second
		third = first + second;

		// we need only till n, if third is greater than n, stop the loop
		if (third > n) {
			// ALL DONE - stop the loop
			break;
		}

		// print the next fibonacii number
		printf("%d ", third);

		// first takes the value of second
		first = second;

		// second takes the value of third
		second = third;

		// third will be recalculated, later, in the next iteration
	}

	// ALL DONE - exit this function
}

void main() {

	// prints
	//	0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
	fibonacci_till_n(1729);

	getchar();
}
