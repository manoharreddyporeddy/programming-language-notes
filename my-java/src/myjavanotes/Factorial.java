/*
     * This is my notes on github
     * contains my learning of java
 */
package myjavanotes;        // this is the package name, will be lower case

// https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html
/**
 *
 * @author manoharreddyporeddy
 */
public class Factorial {

    public static long factorial(int n) {  // takes int, but returns long

        if (n == 1) {		// when 1, returns 1
            return 1;
        } else {
            // recursion => calls factorial again, with changed argument (n-1)
            return n * factorial(n - 1);		// 5in will be 4*3		again 3 will be 3*2,		again 2 will be 2*1		1 will be 1, so 5*4*3*2*1 = 120
        }
    }
}
