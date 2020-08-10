

--------------------------------------------------------

A Plan for Mastering DP (Dynamic Programming)

--------------------------------------------------------

Basics

https://practice.geeksforgeeks.org/problems/difference-between-dp-and-recursion

https://practice.geeksforgeeks.org/problems/dynamic-programming-2

https://practice.geeksforgeeks.org/problems/dynamic-programming-principles

More, if needed:

https://en.wikipedia.org/wiki/Optimal_substructure

https://en.wikipedia.org/wiki/Overlapping_subproblems

		

	Optimal substructure—optimal solution can be constructed from optimal solutions of its subproblems

	Overlapping sub-problems—problem can be broken down into subproblems which are reused several times or a recursive algorithm for the problem solves the same subproblem over and over rather than always generating new subproblems

--------------------------------------------------------

Learn in depth

https://www.geeksforgeeks.org/solve-dynamic-programming-problem/

		Typically, all the problems that require to 

			maximize or 

			minimize certain quantity or 

			counting problems that say to count the arrangements under certain condition or 

			certain probability problems

				can be solved by using Dynamic Programming.



		1. Identify if the problem is a DP problem.

		2. Decide a state for the problem.

		3. Find a relation between 		previous states to reach the current state.

			---------------------------------------------------------------------------------------------------------------------------------------

			1   3   5                        state(n)   arrangements   to get   sum as n                                       

			---------------------------------------------------------------------------------------------------------------------------------------

			in 2d

			it can be 1d                                                                              

			---------------------------------------------------------------------------------------------------------------------------------------

				0  1   2   3   4   5   6   7

			1   0  1                         state(1)   1,

			2         1                      state(2)   1,1

			3            2                   state(3)   1,1,1           3,

			4               3                state(4)   1,1,1,1         3,1         1,3

			5                  5             state(5)   1,1,1,1,1       3,1,1       1,3,1       5,    1,1,3

			6                     8          state(6)   1,1,1,1,1,1     3,1,1,1     1,3,1,1     5,1   1,1,3,1     1,1,1,3     3,3    1,5

			7                        12      state(7)   1,1,1,1,1,1,1   3,1,1,1,1   1,3,1,1,1   5,1,1 1,1,3,1,1   1,1,1,3,1   3,3,1  1,5,1   1,1,1,1,3   3,1,3   1,3,3   1,1,5

			---------------------------------------------------------------------------------------------------------------------------------------

											 state(n)   state(n-1) +   state(n-3)    +            state(n-5)                           

			---------------------------------------------------------------------------------------------------------------------------------------



https://www.geeksforgeeks.org/tabulation-vs-memoization/

https://www.geeksforgeeks.org/greedy-approach-vs-dynamic-programming/



https://www.geeksforgeeks.org/dynamic-programming-vs-divide-and-conquer/

	decision tree - Don’t have overlapping sub-problems - not dynamic programming problem - Divide and Conquer Example: Binary Search

	decision graph

	minimum edit distance/ levenshteinDistance

					EACH cell number in the matrix is being calculated based on PREVIOUS ones.

						SO TABULATION technique

							(filling the cache in bottom-up direction) is being applied here.



				""	k	i	t	t	e	n				""	s	a	t	u	r	d	a	y						a

			""	0	1	2	3	4	5	6			""	0	1	2	3	4	5	6	7	8						..

			s	1	1	0	0	0	0	0			s	1	0	1	2	3	4	5	6	7				this	top	

			i	2	0	2	0	0	0	0			u	2	1	1	2	2	3	4	5	6		b	..	left	from here	

			t	3	0	0	1	1	0	0			n	3	2	2	2	3	3	4	5	6						

			t	4	0	0	1	1	0	0			d	4	3	3	3	3	4	3	4	5						

			i	5	0	1	0	0	0	0			a	5	4	3	4	4	4	4	3	4						

			n	6	0	0	0	0	0	1			y	6	5	4	4	5	5	5	4	3					a == b	this

			g	7	0	0	0	0	0	0																	a != b	this +1

																												

																											min(top+1, left+1, this/ this +1)



--------------------------------------------------------

dp problem - sets

https://www.geeksforgeeks.org/overlapping-subproblems-property-in-dynamic-programming-dp-1/

https://www.geeksforgeeks.org/optimal-substructure-property-in-dynamic-programming-dp-2/

https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/

https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/

https://www.geeksforgeeks.org/edit-distance-dp-5/

https://www.geeksforgeeks.org/min-cost-path-dp-6/

https://www.geeksforgeeks.org/coin-change-dp-7/

https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/

https://www.geeksforgeeks.org/binomial-coefficient-dp-9/

https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/

https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/

https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/

https://www.geeksforgeeks.org/cutting-a-rod-dp-13/

https://www.geeksforgeeks.org/maximum-sum-increasing-subsequence-dp-14/

https://www.geeksforgeeks.org/longest-bitonic-subsequence-dp-15/

https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/

https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/

https://www.geeksforgeeks.org/partition-problem-dp-18/

https://www.geeksforgeeks.org/word-wrap-problem-dp-19/

https://www.geeksforgeeks.org/maximum-length-chain-of-pairs-dp-20/

https://www.geeksforgeeks.org/variations-of-lis-dp-21/

https://www.geeksforgeeks.org/box-stacking-problem-dp-22/

https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/

https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/

https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/

https://www.geeksforgeeks.org/maximum-sum-rectangle-in-a-2d-matrix-dp-27/

https://www.geeksforgeeks.org/minimum-insertions-to-form-a-palindrome-dp-28/

https://www.geeksforgeeks.org/longest-common-substring-dp-29/

https://www.geeksforgeeks.org/dice-throw-dp-30/

https://www.geeksforgeeks.org/optimal-strategy-for-a-game-dp-31/

https://www.geeksforgeeks.org/word-break-problem-dp-32/

https://www.geeksforgeeks.org/word-break-problem-dp-32-set-2/

https://www.geeksforgeeks.org/find-if-a-string-is-interleaved-of-two-other-strings-dp-33/

https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/

https://www.geeksforgeeks.org/longest-arithmetic-progression-dp-35/

https://www.geeksforgeeks.org/maximum-product-cutting-dp-36/

https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/

https://www.geeksforgeeks.org/longest-common-substring-space-optimized-dp-solution/

https://www.geeksforgeeks.org/count-numbers-less-than-n-containing-digits-from-the-given-set-digit-dp/

https://www.geeksforgeeks.org/digit-dp-introduction/

https://www.geeksforgeeks.org/dp-on-trees-set-3-diameter-of-n-ary-tree/

https://www.geeksforgeeks.org/edit-distance-dp-using-memoization/

https://www.geeksforgeeks.org/lca-for-general-or-n-ary-trees-sparse-matrix-dp-approach-onlogn-ologn/

https://www.geeksforgeeks.org/longest-common-subsequence-dp-using-memoization/

https://www.geeksforgeeks.org/partition-of-a-set-into-k-subsets-with-equal-sum-using-bitmask-and-dp/

https://www.geeksforgeeks.org/space-optimized-dp-solution-0-1-knapsack-problem/

https://www.geeksforgeeks.org/split-the-given-string-into-odds-digit-dp/

https://www.geeksforgeeks.org/split-the-given-string-into-primes-digit-dp/

https://www.geeksforgeeks.org/tag/digit-dp/

https://www.geeksforgeeks.org/tag/digit-dp/page/2/

https://www.geeksforgeeks.org/tag/dp-coin-change/



dp problem - non sets

https://www.geeksforgeeks.org/ackermanns-function-using-dynamic-programming/

https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1-count-ways-to-assign-unique-cap-to-every-person/

https://www.geeksforgeeks.org/bitmasking-dynamic-programming-set-2-tsp/

https://www.geeksforgeeks.org/compute-ncr-p-set-1-introduction-and-dynamic-programming-solution/

https://www.geeksforgeeks.org/construction-of-longest-increasing-subsequence-using-dynamic-programming/

https://www.geeksforgeeks.org/convert-n-to-m-with-given-operations-using-dynamic-programming/

https://www.geeksforgeeks.org/distinct-palindromic-sub-strings-of-the-given-string-using-dynamic-programming/

https://www.geeksforgeeks.org/double-knapsack-dynamic-programming/

https://www.geeksforgeeks.org/dynamic-programming-building-bridges/

https://www.geeksforgeeks.org/dynamic-programming-high-effort-vs-low-effort-tasks-problem/

https://www.geeksforgeeks.org/dynamic-programming-trees-set-1/

https://www.geeksforgeeks.org/dynamic-programming-trees-set-2/

https://www.geeksforgeeks.org/dynamic-programming-wildcard-pattern-matching-linear-time-constant-space/

https://www.geeksforgeeks.org/expected-number-of-moves-to-reach-the-end-of-a-board-dynamic-programming/

https://www.geeksforgeeks.org/longest-path-in-a-directed-acyclic-graph-dynamic-programming/

https://www.geeksforgeeks.org/longest-subsequence-with-a-given-or-value-dynamic-programming-approach/

https://www.geeksforgeeks.org/maximum-sum-of-nodes-in-binary-tree-such-that-no-two-are-adjacent-dynamic-programming/

https://www.geeksforgeeks.org/minimum-time-required-to-rot-all-oranges-dynamic-programming/

https://www.geeksforgeeks.org/number-of-unique-bst-with-a-given-key-dynamic-programming/

https://www.geeksforgeeks.org/optimal-strategy-for-the-divisor-game-using-dynamic-programming/

https://www.geeksforgeeks.org/python-implementing-dynamic-programming-using-dictionary/

https://www.geeksforgeeks.org/sum-subsets-dynamic-programming/

https://www.geeksforgeeks.org/ugly-numbers/

https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/

https://www.geeksforgeeks.org/vertex-cover-problem-set-2-dynamic-programming-solution-tree/



--------------

dynamic-programming



Main index

https://www.geeksforgeeks.org/fundamentals-of-algorithms/#DynamicProgramming



Pages:

https://www.geeksforgeeks.org/dynamic-programming/

https://www.geeksforgeeks.org/algorithms-dynamic-programming-question-2/

https://www.geeksforgeeks.org/category/dynamic-programming/page/2/

https://www.geeksforgeeks.org/category/algorithm/dynamic-programming/page/2/

https://www.geeksforgeeks.org/tag/algorithms-dynamic-programming/page/2/



Searches:

https://www.geeksforgeeks.org/basic/dynamic-programming/2/

https://www.geeksforgeeks.org/easy/dynamic-programming/2/

https://www.geeksforgeeks.org/medium/dynamic-programming/2/

https://www.geeksforgeeks.org/hard/dynamic-programming/2/

https://www.geeksforgeeks.org/expert/dynamic-programming/2/



https://www.geeksforgeeks.org/basic/algorithms-dynamic-programming/

https://www.geeksforgeeks.org/easy/algorithms-dynamic-programming/

https://www.geeksforgeeks.org/medium/algorithms-dynamic-programming/

https://www.geeksforgeeks.org/hard/algorithms-dynamic-programming/

https://www.geeksforgeeks.org/expert/algorithms-dynamic-programming/



Practice

https://practice.geeksforgeeks.org/explore/?category%5B%5D=Dynamic%20Programming&page=1



Top 20 interview questions

https://www.geeksforgeeks.org/top-20-dynamic-programming-interview-questions/



Quiz

https://www.geeksforgeeks.org/algorithms-gq/dynamic-programming-gq/

https://www.geeksforgeeks.org/algorithms-quiz-dynamic-programming-question-8/



c/c++

https://www.geeksforgeeks.org/c-programs-gq/cc-dynamic-programming-programs-gq/

--------------------------------------------------------

inurl:dynamic-programming -inurl:basic/dynamic-programming -inurl:basic/algorithms-dynamic-programming -inurl:basic/ -inurl:easy/ -inurl:medium/ -inurl:hard/ -inurl:expert/ -inurl:tag/algorithms-dynamic-programming -inurl:algorithms-dynamic-programming-question -inurl:category/dynamic-programming -inurl:category/algorithm/dynamic-programming/ site:https://www.geeksforgeeks.org

--------------------------------------------------------

