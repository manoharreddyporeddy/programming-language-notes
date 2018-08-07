// https://in.udacity.com/course/java-programming-basics--ud282

package com.company;

import sun.awt.Symbol;


/*

Java Development Kit (JDK) includes:
1. Java compiler - javac
        converts
            program code to byte code       ( not plaform/ OS specific)
2. Java runtime environmenet - JRE
        includes
            a) types, and bultin functions
            b) java virtual machine (JVM)
                helps java code to run on any plaform (OS)
                converts
                    byte code to machine code (0 & 1s) (plaform/ OS specific)

3. check if you have java
    java -version
        // java version 1.8..0_91

4. download JDK

        http://www.oracle.com/technetwork/java/javase/downloads/index.html
        example: Java Platform (JDK) 8u91/8u92

                a) dmg (for MAC OS X)
                a) x86 OR x64.exe (for Windows OS)
                a) dmg (for MAC OS)
                a) dmg (for MAC OS)
5. verify java
    java -version
        // java version 1.8..0_91



MACOS
    Applications > Utilities > Terminal
        click
    OR
    Spotlight (the magnifier icon) > type "Terminal"
WINDOWS OS
    Start > Run > Cmd > OK
    OR
    Search > "command prompt"


5.1
WindowsOS
    where is the JDK?
    System> Advanced system settings >  Advanced > Environment Variables > System Variables > Path >
        C:\Program Files(x86)\Java\jdk1.8.0_92\bin\

6. Write code
MAC OS:
    Appliations > Text Edit   (use text mode. not rich text mode)
Windows:
    Notepad

7. Compile
javac a.java        // compile , generates a.class file
java a        // execute/ run



 */


public class Main {

    public static void main(String[] args) {
        // write your code here

        System.out.println("hello world!");

        String name1;
        name1 = "Mano";
        System.out.println(name1);
        System.out.println(name1.length());
        name1 = name1.toUpperCase();
        System.out.println(name1.toUpperCase());

        String first1 = "Mano";
        String last1 = "Red";
        System.out.println(first1 + " " + last1);

        int n1 = 1;
        System.out.println(first1 + " " + last1 + " " + n1);

        int maxI = 2147483647;
        long maxL = 2147483647 * 10000000;
        double d1 = 1.1;

        String s1 = "(a) WEe 1";
        char ch1 = 'a'; // '2', //'1'

        boolean b1 = true; // false


        int x = 1 + 2; // 3
        int y = 1 - 2; // -1
        int z = 3 * 2; // 6
        double q1 = 5 / 2; // 2
        double q2 = 5 / 2.0; // 2.5
        double q3 = (double) 5 / 2; // 2.5
        double q4 = 5 / (double) 2; // 2.5

        double q5 = 10 - 8 * 1.1; // ?
        double q6 = (10 - 8) * 1.1; // ?

        double q7 = 2.5;
        int iq7 = (int) q1;


        // single line comment
        /*
            multi
            line
            comment
         */


        boolean isCold = true;
        if (isCold) {
            System.out.println("wear a jacket");
        }


        // sunny && rainy = rainbow (both)
        //  else, nothing

        // charged battery || power outlet (anyone)
        //  true

        boolean cond1 = false;
        boolean cond2 = 2 < 3;
        boolean cond3 = 3 > 2; // 3>=3 // 3<=3 //3 == 3 // 3 != 3
        if (cond1) {
            System.out.println("cond1 is satisfied.");
        } else if (cond2) {
            System.out.println("cond2 is satisfied.");
        } else if (cond3) {
            System.out.println("cond3 is satisfied.");
        }


        // ()
        // ! &&  ||

        // cond1 && cond2
        // cond1 || cond2
        // !cond1
        if (cond1 || cond2 || cond3) {
            System.out.println("any one condition? all good");
        }


        // nested if
        if (true && true) {

            if (true) {

            }

        }

        // multiple conditions

        int n = 4;
        if (n == 5) {

        } else if (n == 4) {

        } else if (n == 3) {

        } else if (n == 2) {

        } else if (n == 1) {

        } else {

        }

        // multiple conditions with ==, can be switch
        switch (n) {
            case 5:
                break;
            case 4:
                break;
            case 3:
                break;
            case 2:
                break;
            case 1:
                break;
            default:
                break;
        }


        myFunction("America");

        int a = myFunction2(1, 11, true);

        double di = Math.random(); // 0 to 1 (not 1)

        int ri = (int) Math.random() * 10; // 0 to 9
        int ri2 = (int) Math.random() * 10 + 1; // 1 to 10

        int ri = (int) Math.random() * 6; // 0 to 5
        int ri2 = (int) Math.random() * 6 + 1; // 1 to 10


        // https://docs.oracle.com/javase/8/docs/api/java/lang/package-summary.html
        // https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
        // https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html

        // math java 8 documentation


        // single line comment
        /*
            multi line comment
         */



        int i = 0;
        i++;
        i--;

        i+=2;
        i*=2;
        i/=2;
        i%=2;


        // array
        int iArray  [] = {1,2,3};
        double dArray [] = {1.1,1.12,3.1};
        String strArray [] = {"a", "b", "c"};


        // int [][]grades ;
        // grades[0][0]


        // inner for loop

        for (int i1=0; i1<3; i1++){
            for (int j1=0; j1<3; j1++){

            }
        }

        // int n = 19;
        // Factorial o = new Factorial();
        // System.out.println("Number of trailing 0s in " + n + "! is " + o.countFactZeros(n));
    }

}

public class Cls1 {
    /**
     * @param location
     */
    public void myFunction(String location) {
        System.out.println("hello " + location);
    }

    /**
     * @param x
     * @param height
     * @param inColor
     * @return
     */
    public int myFunction2(int x, double height, boolean inColor) {
        System.out.println(height);
        return 1;
    }

    public boolean checkAlarm() {
        return true;// random
    }

    public void beep() {
        System.out.println("BEEP!!");
    }

    public void alarm() {
        boolean on = checkAlarm();
        while (on) {
            beep();
            on = checkAlarm();
        }
    }


    public int keepRolling() {
        int dice1 = rollDice();
        int dice2 = rollDice();
        int dice3 = rollDice();
        int dice4 = rollDice();
        int dice5 = rollDice();
        int count = 1;
        while (!(
                dice1 == dice2 &&
                        dice2 == dice3 &&
                        dice3 == dice4 &&
                        dice4 == dice5
        )) {
            //we need to re-roll
            dice1 = rollDice();
            dice2 = rollDice();
            dice3 = rollDice();
            dice4 = rollDice();
            dice5 = rollDice();
            count = count + 1;
        }
        return count;
    }


}



class Factorial {

    // Function to return trailing 0s in factorial of n
    int countFactZeros(int n) {

        int count = 0;

        // Last digit will be zeroes
        //    if the number is multiple of pairs of 5 & 2.
        // But there will always be more multiples of 2 than 5 -> so ,
        // our logic will hold true
        //      even if we just keep track of multiples of 5.
        //  Keep dividing n by powers of 5 and update count
        for (int i = 5; n / i >= 1; i *= 5) {

            System.out.println("i = " + i);
            System.out.println("n / i = " + (n / i));

            count += n / i;
        }

        return count;
    }

};
