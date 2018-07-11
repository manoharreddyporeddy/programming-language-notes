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
public class MyCls1 {  // this is the class name, will be PascalCase/ UpperCamelCase - must be same as file name

    private int n;

    public MyCls1(int n1) {
        setn(n1);
    }

    public final void setn(int n1) {
        n = n1; // this.n = n; when n1 is also n
    }

    @Override
    public String toString() {  // my own tostring override
        return n + "";
    }

};
