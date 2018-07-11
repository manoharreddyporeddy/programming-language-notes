/*
         * This is my notes on github
         * contains my learning of java
 */
package myjavanotes;        // this is the package name, will be lower case

// IDE: Netbeans
//      Run > Run Project (Ctrl + F5)
//      Run > Generate Javadoc
//
// https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html
//
import java.awt.Dimension;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;
import java.util.Scanner;

/**
 *
 * @author manoharreddyporeddy
 */
public class MyJavaNotes {  // this is the class name, will be PascalCase/ UpperCamelCase - must be same as file name

    void variablesExamples() {

        // Source: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variablesummary.html
        //
        // 8 primitive data types -
        boolean a = true;   // 1 bit

        byte b = 2;         // 8 bit integer

        char ch = '1';      // 16-bit Unicode character
        ch = '\u0000';

        short s = 1;        // 16-bit integer

        int i = 1;          // 32-bit integer

        long l = 1;         // 64-bit integer

        float f = 1.0f;     // 32-bit floating point

        double d = 1.0;     // 64-bit floating point

        // String objects are immutable, which means that once created, their values cannot be changed.
        String str = "this is a string";
        String str2 = "this is a string";
        String str3 = "THIS IS A STRING";
        System.out.println("str.equals(str2): " + str.equals(str2));
        System.out.println("str.equals(str3): " + str.equals(str3));
        System.out.println("str.equalsIgnoreCase(str3): " + str.equalsIgnoreCase(str3));

        // An array is a container object that holds a fixed number of values of a single type.
        int[] anArray;
        // allocates memory for 10 integers
        anArray = new int[10];
        // initialize first element
        anArray[0] = 100;

        // short cut method
        int[] anArray2 = {
            100, 200, 300,
            400, 500, 600,
            700, 800, 900, 1000
        };

        String[] titles = {
            "Mr. ", "Mrs. ", "Ms. "
        };

        String[][] titlesAndNames = {
            {"Mr. ", "Mrs. ", "Ms. "},
            {"Smith", "Jones"}
        };

        System.out.println(titlesAndNames[0][0] + titlesAndNames[1][0]);
        // Mr. Smith

        // copy an array to another
        char[] copyFrom = {'d', 'e', 'c', 'a', 'f', 'f', 'e', 'i', 'n', 'a', 't', 'e', 'd'};
        char[] copyTo = new char[7];
        System.arraycopy(copyFrom, 2, copyTo, 0, 7); // Object src, int srcPos,         Object dest, int destPos, int length
        System.out.println(new String(copyTo));
        // caffein

        char[] copyTo2 = Arrays.copyOfRange(copyFrom, 2, 9);
        System.out.println(new String(copyTo2));
        // caffein

    }

    void myoperatorsExamples() {

        int a = 5, b = 2;

        long product = a * b;       // long here
        System.out.println("product = " + product);

        System.out.println("a/b = " + a / b);
        System.out.println("(double)a/b = " + (double) a / b);
        //  a/b = 2
        //  (double)a/b = 2.5

        System.out.println("(a + b)/2 = " + (a + b) / 2);
        System.out.println("(a + b)/2.0 = " + (a + b) / 2.0);
        //  (a + b)/2 = 3
        //  (a + b)/2.0 = 3.5

        //product = 10
        int dividend = 12, divisor = 3;
        int quotient = dividend / divisor;       // double conversion here
        int reminder = dividend % divisor;       // int

        System.out.println("dividend = " + dividend);
        System.out.println("divisor = " + divisor);
        System.out.println("quotient = " + quotient);
        System.out.println("reminder = " + reminder);
        //  dividend = 12
        //  divisor = 3
        //  quotient = 4
        //  reminder = 0
    }

    void keyBoardEntry() {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter a double number: ");
        double d1 = in.nextDouble(); // 123.123

        System.out.printf("%2.2f", d1); // 123.12
        System.out.println();

        double twiced1 = d1 * 4 / 2;

        System.out.printf("%2.2f", twiced1); // 246.25
        System.out.println();

        // ---
        System.out.println("Type (y/n)");
        String resp = in.next();
        if (resp.equalsIgnoreCase("y")) {
            // do something
        } else {
            // do something
        }

    }

    void loopExamples() {

        // ------------------------------
        int i = 0;
        do {
            System.out.print("i = " + i + ", ");
            i++;
        } while (i < 3);
        System.out.println();
        //   i = 0, i = 1, i = 2,

        i = 0;
        while (i < 3) {
            System.out.print("i = " + i + ", ");
            i++;
        }
        System.out.println();
        //  i = 0, i = 1, i = 2,

        for (i = 0; i < 3; i++) {
            System.out.print("i = " + i + ", ");
        }
        System.out.println();
        //  i = 0, i = 1, i = 2,

        // ------------------------------
        // there is a twist
        // ------------------------------
        i = 3;
        do {
            System.out.print("i = " + i + ", ");
            i++;
        } while (i < 3);
        System.out.println();
        // <<this has below output>>
        //i = 3,

        i = 3;
        while (i < 3) {
            System.out.print("i = " + i + ", ");
            i++;
        }
        System.out.println();
        // <<this has no output>>
        // ------------------------------

    }

    void arraysExamples() {
        double[] arr1 = new double[3];

        arr1[0] = 100;
        arr1[1] = 200;
        arr1[2] = 300;

        double sum = arr1[0] + arr1[1] + arr1[2];

        System.out.println("sum = " + sum);

        String[] daysOfTheWeek = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

        // right way
        System.out.println("daysOfTheWeek = ");
        for (String dayOfTheWeek : daysOfTheWeek) {
            System.out.print(dayOfTheWeek + ", ");
        }
        //  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday,

        // wrong way
        System.out.println("daysOfTheWeek.toString()");
        System.out.println(daysOfTheWeek.toString());
        //  [Ljava.lang.String;@15db9742

        // Scanner in = new Scanner(System.in);
        //        // NOTE: not compiled/tested
        //        System.out.println("How many?");
        //        int n = in.nextInt();
        //        double[] prices;
        //        prices = new double[n];
        //        for (int i = 0; i < n; i++) {
        //            prices[i] = in.nextDouble();
        //        }
        //        // NOTE: not compiled/tested
        //        System.out.println("What is length of X?");
        //        int x = in.nextInt();
        //        System.out.println("What is length of Y?");
        //        int y = in.nextInt();
        //        double[][] matrix;
        //        matrix = new double[x][y];
        //        for (int i = 0; i < x; i++) {
        //            for (int j = 0; j < y; j++) {
        //                matrix[i][j] = in.nextDouble();
        //            }
        //        }
        System.out.println();
    }

    void arrayListExamples() {

        // sort & then reservse
        ArrayList<String> al1;
        al1 = new ArrayList<>(Arrays.asList("02", "03", "00"));
        System.out.println(al1.toString());
        //[02, 03, 00]

        Collections.sort(al1);
        System.out.println(al1.toString());
        Collections.reverse(al1);
        System.out.println(al1.toString());
        //[00, 02, 03]
        //[03, 02, 00]

        System.out.println();

        // sort in reservse - at once
        ArrayList<String> al2;
        al2 = new ArrayList<>(Arrays.asList("02", "03", "00"));
        System.out.println(al2.toString());
        //[02, 03, 00]

        Collections.sort(al2, Collections.reverseOrder());
        System.out.println(al2.toString());
        //[03, 02, 00]

        ArrayList<String> a13;
        a13 = new ArrayList<>(Arrays.asList("hello", "world"));
        System.out.println("a13.get(i): " + a13.get(0));
        // a13.get(i): hello

        // NOTE: not compiled/tested
        // System.out.println("a13.get(i): " + a13.get((new Random()).nextInt(a13.size())));
        // different output each time
        //
        System.out.println();
    }

    void existingClassesExamples() {

        System.out.println("Math.PI = " + Math.PI);
        System.out.println("Math.E = " + Math.E);
        //  Math.PI = 3.141592653589793
        //  Math.E = 2.718281828459045

        // java.util.Random;
        Random r = new Random();

        // generate random number which are integers
        System.out.println("r.nextInt() = " + r.nextInt());
        System.out.println("r.nextInt() = " + r.nextInt());
        System.out.println("r.nextInt() = " + r.nextInt());
        //r.nextInt() = 664361126
        //r.nextInt() = 1487555758
        //r.nextInt() = -1857300852

        // generate random numbers between 0 to 2
        System.out.println("r.nextInt() = " + r.nextInt(3));
        System.out.println("r.nextInt() = " + r.nextInt(3));
        System.out.println("r.nextInt() = " + r.nextInt(3));
        System.out.println("r.nextInt() = " + r.nextInt(3));
        //r.nextInt() = 0
        //r.nextInt() = 1
        //r.nextInt() = 2
        //r.nextInt() = 1

        // generate random numbers between 1 to 3
        System.out.println("r.nextInt() = " + (r.nextInt(3) + 1));
        System.out.println("r.nextInt() = " + (r.nextInt(3) + 1));
        System.out.println("r.nextInt() = " + (r.nextInt(3) + 1));
        System.out.println("r.nextInt() = " + (r.nextInt(3) + 1));
        //r.nextInt() = 1
        //r.nextInt() = 2
        //r.nextInt() = 1
        //r.nextInt() = 3

        // java.util.Arrays;
        //  Arrays.binarySearch
        //  Arrays.equals
        //  Arrays.fill
        //  Arrays.sort
        //  Arrays.parallelSort
    }

    void myMethod1_noArgs() {
        System.out.println("myMethod1_noArgs");
        // myMethod1_noArgs
    }

    void myMethod1_1Arg(int a) {
        System.out.println("myMethod1_1Arg: a" + a);
        // myMethod1_1Arg: a1
    }

    void myMethod1_2Args(float a, double b) {
        System.out.println("myMethod1_2Args: a" + a + ", b=" + b);
        // myMethod1_2Args: a2.1, b=2.2
    }

    double myMethod1_2Args_withReturnType(float a, double b) {
        double sum = a + b;
        return sum;
    }

    static void myStaticMethod1_noArgs() {
        System.out.println("myStaticMethod1_noArgs - does not required object of class");
    }

    void myCallByValueCallByReferenceMethod1_noArgs(
            int icbv, float fcbv, double dcbv, String scbv,
            int[] arrcbr, MyCls1 objMyCls1cbr
    ) {
        // by value (all primitive data types)
        icbv = 2;
        fcbv = 2.0f;
        dcbv = 2.0;
        scbv = "two";

        // by reference (all s)
        arrcbr[0] = 21;
        arrcbr[1] = 22;
        arrcbr[2] = 22;

        objMyCls1cbr.setn(21);
    }

    void myCallByValueCallByReferenceMethod1_noArgs_wrapper() {
        int icbv = 1;
        float fcbv = 1.0f;
        double dcbv = 1.0;
        String scbv = "one";
        int[] arrcbr = new int[]{11, 12, 13}; // number of items not specified, just values are given
        MyCls1 objMyCls1cbr = new MyCls1(11); // MyCls1 is another class in MyCls1.java file

        System.out.printf("myCallByValueCallByReferenceMethod1_noArgs: before: %d %f %f %s %s %s\n",
                icbv, fcbv, dcbv, scbv,
                Arrays.toString(arrcbr), objMyCls1cbr.toString()
        );
        // myCallByValueCallByReferenceMethod1_noArgs: before: 1 1.000000 1.000000 one [11, 12, 13] 11

        myCallByValueCallByReferenceMethod1_noArgs(
                icbv, fcbv, dcbv, scbv,
                arrcbr, objMyCls1cbr);
        System.out.printf("myCallByValueCallByReferenceMethod1_noArgs: after : %d %f %f %s %s %s\n",
                icbv, fcbv, dcbv, scbv,
                Arrays.toString(arrcbr), objMyCls1cbr.toString()
        );
        // myCallByValueCallByReferenceMethod1_noArgs: after : 1 1.000000 1.000000 one [21, 22, 22] 21
    }

    void myOverloadedMethod1_withDifferentArgs(int a, int b) {
        System.out.println("myOverloadedMethod1_withDifferentArgs: sum: " + (a + b));
    }

    void myOverloadedMethod1_withDifferentArgs(float a, double b) {
        System.out.println("myOverloadedMethod1_withDifferentArgs: sum: " + (a + b));
    }

    void myOverloadedMethod1_withDifferentArgs(double a, double b) {
        System.out.println("myOverloadedMethod1_withDifferentArgs: sum: " + (a + b));
    }

    void myOverloadedMethod1_withDifferentArgs(String str1) {
        System.out.println("myOverloadedMethod1_withDifferentArgs: str1: " + str1);
    }

    boolean myOverloadedMethod1_withDifferentArgs(int[] arr1) {
        System.out.println("myOverloadedMethod1_withDifferentArgs: arr1: " + Arrays.toString(arr1));
        return true;
    }

    void myObjectAndArrayListOfObjects() {
        Person p1;
        Person p2;
        // String name1 = in.nextLine();
        // String age1 = in.nextLine();
        // String gender1 = in.nextLine();
        // p1 = new Person(name1, age1, gender1);
        p1 = new Person("name1", 1, "male");
        p2 = new Person("name2", 2, "female");
        System.out.println("Person: " + p1.toString());
        System.out.println("Person: " + p2.toString());
        System.out.println();

        ArrayList<Person> parr1;
        parr1 = new ArrayList<>();
        parr1.add(p1);
        parr1.add(p2);
        // --
        System.out.println("Person: " + parr1.toString());
        // --
        parr1.forEach((Person person) -> {
            System.out.println("Person: " + person.toString());
        });
        // --
        parr1.remove(0);
        parr1.forEach((Person person) -> {
            System.out.println("Person: " + person.toString());
        });
        System.out.println();
        // --
    }

    void mySortsAndSearches() {
        int[] numbers = {1, 23234, 123, 0, 9, 123, 4};
        System.out.println("Before Arrays.sort(numbers): " + Arrays.toString(numbers));
        //Before Arrays.sort(numbers): [1, 23234, 123, 0, 9, 123, 4]
        Arrays.sort(numbers);
        System.out.println("After  Arrays.sort(numbers): " + Arrays.toString(numbers));
        //After  Arrays.sort(numbers): [0, 1, 4, 9, 123, 123, 23234]

        int[] numbers1 = {1, 23234, 123, 0, 9, 123, 4};
        System.out.println("Before Arrays.sort(numbers1): " + Arrays.toString(numbers1));
        //Before Arrays.sort(numbers1): [1, 23234, 123, 0, 9, 123, 4]
        Arrays.parallelSort(numbers1);
        System.out.println("After  Arrays.sort(numbers1): " + Arrays.toString(numbers1));
        //After  Arrays.sort(numbers1): [0, 1, 4, 9, 123, 123, 23234]

        int[] numbers2 = {10, 11, 12, 13, 14, 15, 13, 17, 18, 19};
        Arrays.sort(numbers2);
        System.out.println("After Arrays.sort(numbers2): " + Arrays.toString(numbers2));
        //After Arrays.sort(numbers2): [10, 11, 12, 13, 13, 14, 15, 17, 18, 19]

        int foundIndex;
        foundIndex = Arrays.binarySearch(numbers2, 12);
        System.out.println("Arrays.binarySearch(numbers2, 12) foundIndex: " + foundIndex);
        //Arrays.binarySearch(numbers2, 12) foundIndex: 2
        foundIndex = Arrays.binarySearch(numbers2, 13);
        System.out.println("Arrays.binarySearch(numbers2, 13) foundIndex: " + foundIndex);
        //Arrays.binarySearch(numbers2, 13) foundIndex: 4
        foundIndex = Arrays.binarySearch(numbers2, 9);
        System.out.println("Arrays.binarySearch(numbers2, 9) foundIndex: " + foundIndex);
        //Arrays.binarySearch(numbers2, 9) foundIndex: -1
        foundIndex = Arrays.binarySearch(numbers2, 16);
        System.out.println("Arrays.binarySearch(numbers2, 16) foundIndex: " + foundIndex);
        //Arrays.binarySearch(numbers2, 16) foundIndex: -8

        int[] numbers3 = {1, 23234, 123, 0, 9, 123, 4};
        Arrays.sort(numbers3);
        foundIndex = Arrays.binarySearch(numbers3, 123);    // NOTE: 5 instead of 2
        System.out.println("Arrays.binarySearch(numbers3, 123) foundIndex: " + foundIndex);
        //Arrays.binarySearch(numbers3, 123) foundIndex: 5
    }

    boolean myFileHandling_readFromFile() {
        // read a file
        File inputFile = new File("z___input.txt");  // this file should be present beside build.xml
        // try with resources (here it is input file)
        try (Scanner in = new Scanner(inputFile)) { // reading can throw exception, so it is in try catch
            while (in.hasNextLine()) {
                String strLine = in.nextLine();
                System.out.println("strLine: " + strLine);
                //strLine: one
                //strLine: two
                //strLine: three
                //strLine: four
                //strLine: five
            }
            // try with resources, automatically closes the Scanner
        } catch (FileNotFoundException e) {
            System.out.println("myjavanotes.MyJavaNotes.myFileHandling_readFromFile(): exception: ");
            System.out.println(e.toString());
            // example: when file is not found
            //myjavanotes.MyJavaNotes.myFileHandling_readFromFile(): exception:
            //java.io.FileNotFoundException: z___input.txt (The system cannot find the file specified)
            return false;
        }

        return true;
    }

    boolean myFileHandling_writeToFile() {

        // write a file
        File outputFile = new File("z___output.txt");
        // try with resources (here it is output file)
        try (PrintWriter out = new PrintWriter(outputFile)) {
            out.println("one");
            out.println("two");
            out.println("three");

            System.out.println("myjavanotes.MyJavaNotes.myFileHandling_writeToFile(): file written");
            // myjavanotes.MyJavaNotes.myFileHandling_writeToFile(): file written

            // try with resources, automatically closes the PrintWriter
        } catch (Exception e) {
            System.out.println("myjavanotes.MyJavaNotes.myFileHandling_writeToFile(): exception: ");
            System.out.println(e.toString());
            // example: when file is read only
            //myjavanotes.MyJavaNotes.myFileHandling_writeToFile(): exception:
            //java.io.FileNotFoundException: z___output.txt (Access is denied)
            return false;
        }

        return true;
    }

    void mySwingsGUI() {
        // Window > IDE Tools > Palette
        // Window > IDE Tools > Properties

        // JFC(Swing)
        // File > New File > Swing GUI Forms > JFrame Form > Next > MyJFrame > Finish
        //
        // MyJFrame.java will be created
        // extends from JFrame
        //      public class MyJFrame extends javax.swing.JFrame
        //
        // -------------
        // DESIGN VIEW
        // -------------
        // From Swing controls
        //  drag 2 labels
        //  drag 2 textboxes
        //  drag 1 button
        //
        // 1. select below controls
        // 2. change in  Properties window > Code tab > Variable Name
        //      jLabel1 as namejLabel
        //      jLabel2 as agejLabel
        //      jTextField1 as namejTextField
        //      jTextField2 as agejTextField
        //      jButton1 as submitjButton
        //
        // 1. select below controls
        // 2. change in  Properties window > Properties tab > text
        //      jLabel1 as Name
        //      jLabel2 as Age
        //      jTextField1 as <delete text, then resize/expand to 120 pixes >
        //      jTextField2 as <delete text, then resize/expand to 120 pixes >
        //      jButton1 as Submit
        //
        // -------------
        // SOURCE VIEW
        // -------------
        // double click the button
        //  add below code
        //      import javax.swing.JOptionPane;
        //      JOptionPane.showMessageDialog(null, this.namejTextField.getText() + " is of age: " + this.agejTextField.getText());
        // now uncomment below 2 lines and run
        MyJFrame jframe = new MyJFrame();
        jframe.setTitle("mySwingsGUI");
        jframe.setSize(new Dimension(600, 300));
        // jframe.setExtendedState(JFrame.MAXIMIZED_BOTH);
        jframe.setVisible(true);    // show the frame
        //
        // in the UI shown
        //  enter a name
        //  enter an age
        //  click submit button
        //
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        MyJavaNotes obj = new MyJavaNotes();

        // obj.variablesExamples();
        // obj.myoperatorsExamples();
        // obj.keyBoardEntry();
        // obj.loopExamples();
        // obj.arraysExamples();
        // obj.arrayListExamples();
        // obj.existingClassesExamples();
        // obj.myMethod1_noArgs();
        // obj.myMethod1_1Arg(1);
        // obj.myMethod1_2Args(2.1f, 2.2);
        // ---
        // double sum = obj.myMethod1_2Args_withReturnType(2.1f, 2.2);
        // System.out.println("myMethod1_2Args_withReturnType(2.1f, 2.2): " + sum);
        // //      myMethod1_2Args_withReturnType(2.1f, 2.2): 4.2999999046325685
        // ---
        // MyJavaNotes.myStaticMethod1_noArgs();
        // //      myStaticMethod1_noArgs - does not required object of class
        // obj.myStaticMethod1_noArgs();
        // //      myStaticMethod1_noArgs - does not required object of class
        // ---
        // obj.myCallByValueCallByReferenceMethod1_noArgs_wrapper();
        // ---
        //obj.myOverloadedMethod1_withDifferentArgs(1, 2);
        //obj.myOverloadedMethod1_withDifferentArgs(1.2f, 1.2);
        //obj.myOverloadedMethod1_withDifferentArgs(1.2, 1.2);
        //obj.myOverloadedMethod1_withDifferentArgs("some string");
        //obj.myOverloadedMethod1_withDifferentArgs(new int[]{1, 2, 3});
        // //myOverloadedMethod1_withDifferentArgs: sum: 3
        // //myOverloadedMethod1_withDifferentArgs: sum: 2.400000047683716
        // //myOverloadedMethod1_withDifferentArgs: sum: 2.4
        // //myOverloadedMethod1_withDifferentArgs: str1: some string
        // //myOverloadedMethod1_withDifferentArgs: arr1: [1, 2, 3]
        // ---
        // obj.myObjectAndArrayListOfObjects();
        // ---
        // System.out.println("Factorial.factorial(5): " + Factorial.factorial(5));
        // ---
        // obj.mySortsAndSearches();
        // ---
        //obj.myFileHandling_readFromFile();
        //obj.myFileHandling_writeToFile();
        obj.mySwingsGUI();
        // ---
        System.out.println();
    }

}
