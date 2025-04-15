# Comprehensive Java Programming Guide

## Java Development Environment

### Java Development Kit (JDK) Components
- **Java Compiler (javac)**: Converts program code to platform-independent bytecode
- **Java Runtime Environment (JRE)**:
  - Types and built-in functions
  - Java Virtual Machine (JVM): Converts bytecode to machine code (platform-specific)

### Installation & Verification
```bash
# Check if Java is installed
java -version

# Download JDK from Oracle website
# http://www.oracle.com/technetwork/java/javase/downloads/index.html
# Install appropriate version:
# - .dmg for macOS
# - .exe (x86 or x64) for Windows
```

### Command Line Access
- **macOS**: 
  - Applications > Utilities > Terminal, or
  - Use Spotlight (magnifier icon) and search "Terminal"
- **Windows**:
  - Start > Run > Cmd > OK, or
  - Search for "command prompt"

### Setting Environment Variables (Windows)
```
System > Advanced system settings > Advanced > Environment Variables > System Variables > Path
Add: C:\Program Files(x86)\Java\jdk1.8.0_92\bin\
```

### Basic Workflow
```bash
# Compile Java code
javac YourProgram.java    # Creates YourProgram.class file

# Run the program
java YourProgram          # Note: don't include .class extension
```

## Java Fundamentals

### Variables and Data Types

#### Primitive Data Types
```java
boolean flag = true;    // 1 bit
byte b = 2;             // 8-bit integer
char ch = '1';          // 16-bit Unicode character
short s = 1;            // 16-bit integer
int i = 1;              // 32-bit integer
long l = 1;             // 64-bit integer
float f = 1.0f;         // 32-bit floating point
double d = 1.0;         // 64-bit floating point
```

#### String Operations
```java
String name = "Mano";
System.out.println(name.length());          // 4
System.out.println(name.toUpperCase());     // MANO

String first = "Mano";
String last = "Red";
System.out.println(first + " " + last);     // Mano Red

// String comparison
String str1 = "this is a string";
String str2 = "this is a string";
String str3 = "THIS IS A STRING";
System.out.println(str1.equals(str2));             // true
System.out.println(str1.equals(str3));             // false
System.out.println(str1.equalsIgnoreCase(str3));   // true
```

### Operators
```java
// Arithmetic operators
int x = 1 + 2;          // Addition: 3
int y = 1 - 2;          // Subtraction: -1
int z = 3 * 2;          // Multiplication: 6

// Division
double q1 = 5 / 2;          // Integer division: 2.0
double q2 = 5 / 2.0;        // Floating point division: 2.5
double q3 = (double) 5 / 2; // Cast to double: 2.5
double q4 = 5 / (double) 2; // Cast to double: 2.5

// Order of operations
double q5 = 10 - 8 * 1.1;   // Multiplication first: 1.2
double q6 = (10 - 8) * 1.1; // Parentheses first: 2.2

// Type casting
double q7 = 2.5;
int iq7 = (int) q7;         // Cast to int: 2

// Increment/decrement
int i = 0;
i++;    // i = 1
i--;    // i = 0
i += 2; // i = 2
i *= 2; // i = 4
i /= 2; // i = 2
i %= 2; // i = 0
```

### Control Structures

#### Conditional Statements
```java
boolean isCold = true;
if (isCold) {
    System.out.println("Wear a jacket");
}

// Multiple conditions
boolean cond1 = false;
boolean cond2 = 2 < 3;      // true
boolean cond3 = 3 > 2;      // true

if (cond1) {
    System.out.println("cond1 is satisfied.");
} else if (cond2) {
    System.out.println("cond2 is satisfied.");
} else if (cond3) {
    System.out.println("cond3 is satisfied.");
} else {
    System.out.println("No condition is satisfied.");
}

// Logical operators
// &&  - AND
// ||  - OR
// !   - NOT
if (cond1 || cond2 || cond3) {
    System.out.println("At least one condition is true");
}

// Nested if
if (true && true) {
    if (true) {
        // Code here
    }
}

// Switch statement
int n = 4;
switch (n) {
    case 5:
        // Code for n = 5
        break;
    case 4:
        // Code for n = 4
        break;
    case 3:
        // Code for n = 3
        break;
    case 2:
        // Code for n = 2
        break;
    case 1:
        // Code for n = 1
        break;
    default:
        // Code for other values
        break;
}
```

#### Loops
```java
// While loop
int i = 0;
while (i < 3) {
    System.out.print("i = " + i + ", ");
    i++;
}
// Output: i = 0, i = 1, i = 2,

// Do-while loop (executes at least once)
i = 0;
do {
    System.out.print("i = " + i + ", ");
    i++;
} while (i < 3);
// Output: i = 0, i = 1, i = 2,

// For loop
for (i = 0; i < 3; i++) {
    System.out.print("i = " + i + ", ");
}
// Output: i = 0, i = 1, i = 2,

// Nested loops
for (int i1 = 0; i1 < 3; i1++) {
    for (int j1 = 0; j1 < 3; j1++) {
        // Code here
    }
}
```

### Arrays
```java
// Array declaration and initialization
int[] iArray = {1, 2, 3};
double[] dArray = {1.1, 1.12, 3.1};
String[] strArray = {"a", "b", "c"};

// Accessing array elements
System.out.println(iArray[0]);  // 1

// Array with new keyword
int[] anArray;
anArray = new int[10];  // Allocates memory for 10 integers
anArray[0] = 100;       // Initialize first element

// Multi-dimensional arrays
String[][] titlesAndNames = {
    {"Mr. ", "Mrs. ", "Ms. "},
    {"Smith", "Jones"}
};
System.out.println(titlesAndNames[0][0] + titlesAndNames[1][0]);  // Mr. Smith

// Copying arrays
char[] copyFrom = {'d', 'e', 'c', 'a', 'f', 'f', 'e', 'i', 'n', 'a', 't', 'e', 'd'};
char[] copyTo = new char[7];
System.arraycopy(copyFrom, 2, copyTo, 0, 7);  // Source, srcPos, dest, destPos, length
System.out.println(new String(copyTo));        // caffein

char[] copyTo2 = Arrays.copyOfRange(copyFrom, 2, 9);
System.out.println(new String(copyTo2));       // caffein

// Iterating through arrays
for (String dayOfTheWeek : daysOfTheWeek) {
    System.out.print(dayOfTheWeek + ", ");
}
```

### Methods
```java
// Method with no arguments and no return value
void myMethod1_noArgs() {
    System.out.println("myMethod1_noArgs");
}

// Method with arguments
void myMethod1_1Arg(int a) {
    System.out.println("myMethod1_1Arg: a" + a);
}

void myMethod1_2Args(float a, double b) {
    System.out.println("myMethod1_2Args: a" + a + ", b=" + b);
}

// Method with return value
double myMethod1_2Args_withReturnType(float a, double b) {
    double sum = a + b;
    return sum;
}

// Static method (can be called without creating an object)
static void myStaticMethod1_noArgs() {
    System.out.println("myStaticMethod1_noArgs - does not require object of class");
}

// Method overloading (same name, different parameters)
void myOverloadedMethod1_withDifferentArgs(int a, int b) {
    System.out.println("myOverloadedMethod1_withDifferentArgs: sum: " + (a + b));
}

void myOverloadedMethod1_withDifferentArgs(float a, double b) {
    System.out.println("myOverloadedMethod1_withDifferentArgs: sum: " + (a + b));
}

boolean myOverloadedMethod1_withDifferentArgs(int[] arr1) {
    System.out.println("myOverloadedMethod1_withDifferentArgs: arr1: " + Arrays.toString(arr1));
    return true;
}
```

### Random Numbers
```java
// Using Math.random()
double di = Math.random();          // 0 to 1 (not including 1)
int ri = (int)(Math.random() * 10); // 0 to 9
int ri2 = (int)(Math.random() * 10) + 1; // 1 to 10
int diceRoll = (int)(Math.random() * 6) + 1; // 1 to 6

// Using Random class
Random r = new Random();
System.out.println(r.nextInt());      // Any integer
System.out.println(r.nextInt(3));     // Integer from 0 to 2
System.out.println(r.nextInt(3) + 1); // Integer from 1 to 3
```

## Object-Oriented Programming

### Classes and Objects
```java
// Person class definition
class Person {
    // Instance variables (fields)
    String name;
    String gender;
    int age;
    
    // Default constructor
    Person() {
    }
    
    // Parameterized constructor
    Person(String name, int age, String gender) {
        this.setName(name);
        this.setAge(age);
        this.setGender(gender);
    }
    
    // Getter and setter methods
    public final void setName(String name) {
        this.name = name;
    }
    
    public String getName(String name) {
        return name;
    }
    
    public final void setAge(int age) {
        this.age = age;
    }
    
    public int getAge(int age) {
        return age;
    }
    
    public final void setGender(String gender) {
        this.gender = gender;
    }
    
    public String getGender(String gender) {
        return gender;
    }
    
    // toString method override
    @Override
    public String toString() {
        return ""
                + "\n\t" + name
                + "\n\t" + gender
                + "\n\t" + age;
    }
}

// Using the Person class
Person p1 = new Person("name1", 1, "male");
Person p2 = new Person("name2", 2, "female");
System.out.println("Person: " + p1.toString());
System.out.println("Person: " + p2.toString());
```

### Pass by Value vs Pass by Reference
```java
void myCallByValueCallByReferenceMethod1_noArgs(
        int icbv, float fcbv, double dcbv, String scbv,
        int[] arrcbr, MyCls1 objMyCls1cbr
) {
    // Primitive types are passed by value
    icbv = 2;        // Changes only the local copy
    fcbv = 2.0f;     // Changes only the local copy
    dcbv = 2.0;      // Changes only the local copy
    scbv = "two";    // Changes only the local copy
    
    // Arrays and objects are passed by reference
    arrcbr[0] = 21;      // Changes the original array
    arrcbr[1] = 22;      // Changes the original array
    arrcbr[2] = 22;      // Changes the original array
    objMyCls1cbr.setn(21); // Changes the original object
}
```

### Recursion
```java
// Factorial calculation using recursion
public static long factorial(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

### ArrayList
```java
// Creating ArrayLists
ArrayList<String> al1 = new ArrayList<>(Arrays.asList("02", "03", "00"));
System.out.println(al1.toString());  // [02, 03, 00]

// Sorting
Collections.sort(al1);
System.out.println(al1.toString());  // [00, 02, 03]

// Reverse sorting
Collections.reverse(al1);
System.out.println(al1.toString());  // [03, 02, 00]

// Alternative method for reverse sorting
ArrayList<String> al2 = new ArrayList<>(Arrays.asList("02", "03", "00"));
Collections.sort(al2, Collections.reverseOrder());
System.out.println(al2.toString());  // [03, 02, 00]

// Accessing elements
ArrayList<String> a13 = new ArrayList<>(Arrays.asList("hello", "world"));
System.out.println("a13.get(0): " + a13.get(0));  // hello

// ArrayList of objects
ArrayList<Person> personList = new ArrayList<>();
personList.add(p1);
personList.add(p2);

// Iterating through ArrayList
personList.forEach((Person person) -> {
    System.out.println("Person: " + person.toString());
});

// Removing elements
personList.remove(0);
```

## Advanced Topics

### Collections and Sorting
```java
// Array sorting
int[] numbers = {1, 23234, 123, 0, 9, 123, 4};
System.out.println("Before sort: " + Arrays.toString(numbers));
Arrays.sort(numbers);
System.out.println("After sort: " + Arrays.toString(numbers));
// Output: After sort: [0, 1, 4, 9, 123, 123, 23234]

// Parallel sorting (for large arrays)
int[] numbers1 = {1, 23234, 123, 0, 9, 123, 4};
Arrays.parallelSort(numbers1);
System.out.println("After parallel sort: " + Arrays.toString(numbers1));

// Binary search (requires sorted array)
int[] sortedArray = {10, 11, 12, 13, 13, 14, 15, 17, 18, 19};
int foundIndex = Arrays.binarySearch(sortedArray, 12);
System.out.println("Index of 12: " + foundIndex);  // 2
foundIndex = Arrays.binarySearch(sortedArray, 13);
System.out.println("Index of 13: " + foundIndex);  // 4 (may return any match if duplicates)
```

### File I/O
```java
// Reading from a file
boolean myFileHandling_readFromFile() {
    File inputFile = new File("input.txt");
    try (Scanner in = new Scanner(inputFile)) {
        while (in.hasNextLine()) {
            String strLine = in.nextLine();
            System.out.println("Line: " + strLine);
        }
        // Scanner automatically closed with try-with-resources
        return true;
    } catch (FileNotFoundException e) {
        System.out.println("File not found exception: " + e.toString());
        return false;
    }
}

// Writing to a file
boolean myFileHandling_writeToFile() {
    File outputFile = new File("output.txt");
    try (PrintWriter out = new PrintWriter(outputFile)) {
        out.println("one");
        out.println("two");
        out.println("three");
        System.out.println("File written successfully");
        return true;
        // PrintWriter automatically closed with try-with-resources
    } catch (Exception e) {
        System.out.println("Exception: " + e.toString());
        return false;
    }
}
```

### Swing GUI
```java
// Creating a basic GUI window
void mySwingsGUI() {
    // Create a new JFrame instance
    MyJFrame jframe = new MyJFrame();
    jframe.setTitle("mySwingsGUI");
    jframe.setSize(new Dimension(600, 300));
    jframe.setVisible(true);    // show the frame
    
    // To handle events in MyJFrame class:
    // 1. Add import javax.swing.JOptionPane;
    // 2. Add code in button click handler:
    //    JOptionPane.showMessageDialog(null, this.namejTextField.getText() + 
    //        " is of age: " + this.agejTextField.getText());
}
```

### Web Services

#### Types of Web Services
- **Servlets** (low level)
- **XML-based** like SOAP (JAX-WS, Java API for XML Web Services)
- **REST-based** (JAX-RS, Java API for RESTful Web Services)

#### Web Application Directory Structure
```
ApplicationName/
├── Java Resources/
│   ├── src/
│   │   └── packagename/
│   │       ├── servlets/
│   │       └── .java files
│   └── build/classes/
└── WebContent/
    ├── META-INF/
    │   └── MANIFEST.MF
    └── WEB-INF/
        ├── web.xml      (Configuration file)
        ├── classes/     (Compiled classes)
        └── lib/         (JAR dependencies)
```

## Best Practices and Additional Information

### Documentation
- Javadoc comments start with `/**` and end with `*/`
- Use `@param`, `@return`, and other tags to document methods

### Code Organization
- Package names are typically all lowercase
- Class names use PascalCase/UpperCamelCase
- Method and variable names use camelCase
- Constants use UPPER_SNAKE_CASE
