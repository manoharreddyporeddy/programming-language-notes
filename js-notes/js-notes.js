'use strict';

/*
The lexical structure of a programming language is the set of elementary rules that tells you how to write programs in that language. It's essentially the lowest-level syntax of a language and specifies such things as what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next.
JavaScript programs are written using the Unicode character set. Unicode is a superset of ASCII and Latin-1.

*/
// ------------------------------------------
function greeting(parameterVariable) {
  // Inline Comment
  
  /*
  Block Comment
  */

/*
Literals

// The integer number twelve:
12 

// The floating-point number one-point-two:
1.2 

// A string of text:
"Hello, World." 

// Another string:
'Hi!' 

// A boolean value:
true 

// The absence of an object:
null

// An object initializer:
{x: 1, y: 2} 

// An array initializer:
[1, 2, 3, 4, 5]

*/


//  identifiers
  x = 5
  variable_name = 10
  sum13 = 1
  _variable = 1
  $variable =1

/*
  identifiers
      avoid
          reserved words or keywords
            for, function
          predefined global variables
          predefined global functions
*/

  console.log('Hello, World!');
  // We use the console.log method to write data to standard output in JavaScript.
  
  // ??????????????
  // console.log(Hello, World!\n${parameterVariable});
  // process.stdout.write(parameterVariable);






/*
Data Types

  The latest ECMAScript standard defines seven data types:

  A primitive value or data type is data that is not an object and has no methods. All primitives are immutable, meaning they cannot be changed. There are six primitive types:
    Number
    String
    Boolean
    Symbol
    Null
    Undefined

  The seventh data type is
    Object
    
    
  Number Data Type
    According to the ECMAScript standard, all numbers are double-precision 64-bit binary format IEEE 754-2008, meaning there is no specific type for integers.

  Maximum Value for a Number
    The MAX_VALUE property has a value of approximately . Values larger than Number.MAX_VALUE are represented as Infinity.

  Minimum Value for a Number
    The MIN_VALUE property is the smallest positive value of the Number type closest to , not the most negative number, that JavaScript can represent. MIN_VALUE has a value of approximately . Values smaller than Number.MIN_VALUE ("underflow values") are converted to .

  Symbolic Numbers
    There are three symbolic number values:

    Infinity: This is any number divided by , or an attempt to multiply Number.MAX_VALUE by an integer .
    -Infinity: This is any number divided by , or an attempt to multiply Number.MAX_VALUE by an integer .
    NaN: This stands for "Not-a-Number" and denotes an unrepresentable value (i.e., ).

  The isSafeInteger Method
    A safe integer is an integer that:
      Can be exactly represented as an IEEE-754 double precision number, and
      Whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
  The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.

  Maximum Safe Integer
    The Number.MAX_SAFE_INTEGER constant has a value of , or .

  Minimum Safe Integer
    The Number.MIN_SAFE_INTEGER constant has a value of , or .

*/


var var1 = 1;
var var2 = 0;
var var3 = -0;

console.log("1 / 0 = " + var1 / var2); 
console.log("1 / -0 = " + var1 / var3); 
console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MAX_VALUE + 1 = " + Number.MAX_VALUE * 2);
console.log("MIN_VALUE = " + Number.MIN_VALUE);
console.log("MIN_VALUE - 1 = " + Number.MIN_VALUE - 1);
console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER = " + Number.MIN_SAFE_INTEGER);
console.log("SquareRoot(-1) = " + Math.sqrt(-1));
console.log("isSafeInteger(100) = " + Number.isSafeInteger(100));


//    1 / 0 = Infinity
//    1 / -0 = -Infinity
//    MAX_VALUE: 1.7976931348623157e+308
//    MAX_VALUE + 1 = Infinity
//    MIN_VALUE = 5e-324
//    NaN
//    MAX_SAFE_INTEGER = 9007199254740991
//    MIN_SAFE_INTEGER = -9007199254740991
//    SquareRoot(-1) = NaN
//    isSafeInteger(100) = true





// String Data Type
// A string value is a chain of zero or more Unicode characters (i.e., letters, digits, and punctuation marks) that we use to represent text.

var firstString = "Hello, There.";
var secondString = "How're you?";
var thirdString = "c";
var fourthString = '"Wow!!!", she shouted.';

// 'c'
// ''
// ""

console.log(firstString);
console.log(secondString);
console.log(thirdString);
console.log(fourthString);

//      Hello, There.
//      How're you?
//      c
//      "Wow!!!", she shouted.


//  substr()
//  +
//  concat()


/*
Boolean Data Type
  true, and false.

Symbol Data Type
  Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

Null Data Type
null

Undefined Data Type
The undefined value is returned when you use an object property that does not exist, or a variable that has been declared, but has never had a value assigned to it.

The typeof Operator
As demonstrated in some of the code examples above, we can use the typeof operator to determine the type associated with a variable's current value:

*/



// Number Data Type:
var firstVar = 1.5e5; 

// String Data Type:
var secondVar = 'Hello'; 

// Boolean Data Type:
var thirdVar = true; 

// Symbol Data Type:
var fourthVar = Symbol("some Symbol variable"); 

// Null Object:
var fifthVar = null; 

// Undefined Data Type:
var sixthVar; 

// Object:
var seventhVar = {a: 1, b: 2}; 

// NaN (It is a Number):
var eighthVar = Math.sqrt(-1); 

console.log(firstVar + " is a " + typeof firstVar);
console.log(secondVar + " is a " + typeof secondVar);
console.log(thirdVar + " is a " + typeof thirdVar);
console.log(fourthVar.toString() + " is a " + typeof fourthVar);
console.log(fifthVar + " is an " + typeof fifthVar);
console.log(sixthVar + " is an " + typeof sixthVar);
console.log(seventhVar + " is an " + typeof seventhVar);
console.log(eighthVar + " is a " + typeof eighthVar);

/*
150000 is a number
Hello is a string
true is a boolean
Symbol(some Symbol variable) is a symbol
null is an object
undefined is an undefined
[object Object] is an object
NaN is a number

*/


/*
JavaScript is a loosely typed or dynamic language, meaning you don't need to declare a variable's type ahead of time and the language autmatically determines a variable's type while the program is being processed. That also means that you can reassign a single variable to reference different types. For example:
*/

function print() { 
    console.log(
        "someVariable(" + someVariable 
        + ") is a " + typeof someVariable
    );
    // Note: 'typeof' is explained later in this tutorial.
}

// Declare someVariable and initialize it to the number '5':
var someVariable = 5; 
print(someVariable);

// Assign the string "Hello" to someVariable:
var someVariable = "Hello"; 
print(someVariable);

// Assign the boolean value 'true' to someVariable:
var someVariable = true; 
print(someVariable);

// someVariable(5) is a number
// someVariable(Hello) is a string
// someVariable(true) is a boolean





var _daysCount
var MinimumCost
var page10
var Total_elements
// This will produce "SyntaxError: Unexpected number"
//    var 10Students
// This will produce "SyntaxError: Unexpected token &"
//    var First&Second






// Declare firstVar:
var firstVar; 

// Initialize firstVar:
firstVar = 1; 

// Declare and Initialize secondVar:
var secondVar = "String"; 

// Declare thirdVar and fourthVar:
var thirdVar, 
    fourthVar; 

// Initialize thirdVar:
thirdVar = true; 

// Initialize fourthVar:
fourthVar = null; 

// Declare and Initialize fifthVar and sixthVar:
var fifthVar = 1.01, 
    sixthVar = "Sixth"; 

// Declare seventhVar:
var seventhVar;

console.log(firstVar);
console.log(secondVar);
console.log(thirdVar);
console.log(fourthVar);
console.log(fifthVar);
console.log(sixthVar);
console.log(seventhVar);

/*
1
String
true
null
1.01
Sixth
undefined
*/


Coercion
In JavaScript, you can perform operations on values of different types without raising an exception. The JavaScript interpreter implicitly converts, or coerces, one of the data types to that of the other, then performs the operation. The rules for coercion of string, number, or boolean values are as follows:

If you add a number and a string, the number is coerced to a string.
If you add a boolean and a string, the boolean is coerced to a string.
If you add a number and a boolean, the boolean is coerced to a number.

function print(name, variable) {
    console.log(
        name + "(" + variable 
        + ") is a " + typeof variable
    );
}

var someNumber = 10;
var someString = "Ten";
var someBoolean = false;

var sumOfNumberAndString = someNumber + someString;
var sumOfBooleanAndString = someBoolean + someString;
var sumOfNumberAndBoolean = someNumber + someBoolean;

print("sumOfNumberAndString", sumOfNumberAndString);
print("sumOfBooleanAndString", sumOfBooleanAndString);
print("sumOfNumberAndBoolean", sumOfNumberAndBoolean);

/*
sumOfNumberAndString(10Ten) is a string
sumOfBooleanAndString(falseTen) is a string
sumOfNumberAndBoolean(10) is a number
*/
























}

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + Number(secondInteger));    // parseInt(someString)       // +(someString)
    console.log(firstDecimal + Number(secondDecimal));    // parseFloat(someString)     // +(someString)
    console.log(firstString + secondString);              // s + s2                     // s.concat(s2)
    
}

/*
Operator Types

unary
  operand operator
  operator operand

Binary
  operand1 operator operand2

Ternary
  There is one ternary operator, the conditional operator.
  a ? b : c


Arithmetic Operators

2 + 3 // evaluates to 5
4 + 10 // evaluates to 14

3 - 2 // evaluates to 1
4 - 10 // evaluates to -6

3 * 2 // evaluates to 6
4 * 10 // evaluates to 40

6 / 3 // evaluates to 2
3 / 2 // evaluates to 1.5
4 / 10 // evaluates to 0.4


6 % 3 // evaluates to 0
3 % 2 // evaluates to 1
4 % 10 // evaluates to 4


2 ** 3 // evaluates to 8
3 ** 2 // evaluates to 9
5 ** 4 // evaluates to 625


-4 // evaluates to -4
-(-5) // evaluates to 5 (not --5)


+4 // evaluates to 4
+(-4) // evaluates to -4


a= 5

a++
++a
a--
--a



*/


function func1() {
  console.log(1 == 1);
  console.log(1 == "1");
  console.log('1' == 1);
  console.log(0 == false);
  console.log(0 == null);
  console.log(0 == undefined);
  console.log(null == undefined);
  
  /*
true
true
true
true
false
false
true  
  */
  
  
  console.log(1 != 1);
console.log(1 != "1");
console.log('1' != 1);
console.log(0 != false);
console.log(0 != null);
console.log(0 != undefined);
console.log(null != undefined);

/*
false
false
false
false
true
true
false
*/


var variable1 = new MyObject(":)");
var variable2 = new MyObject(":)");

console.log( variable1.magic + " == " + variable2.magic + " evaluates to " + (variable1 == variable2) );
variable1 = variable2;
console.log( variable1.magic + " == " + variable2.magic + " evaluates to " + (variable1 == variable2) );
// :) == :) evaluates to false
// :) == :) evaluates to true


// Identity or Strict Equality (===)
console.log(1 === 1);
console.log(1 === "1");
console.log('1' === 1);
console.log(0 === false);
console.log(0 === null);
console.log(0 === undefined);
console.log(null === undefined);

// true
// false
// false
// false
// false
// false
// false

// Non-Identity or Strict Inequality (!==)
console.log(1 !== 1);
console.log(1 !== "1");
console.log('1' !== 1);
console.log(0 !== false);
console.log(0 !== null);
console.log(0 !== undefined);
console.log(null !== undefined);
// false
// true
// true
// true
// true
// true
// true


// Relational Operators
console.log(5 > 5);
console.log(5 >= 5);
console.log(7 < 6);
console.log(4 <= 6);

// false
// true
// false
// true


// Logical Operators
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

console.log((5 < 7) && (4 < 4))
console.log((5 < 7) && (4 >= 4))
console.log((5 < 7) || (4 < 4)) 
console.log((5 >= 7) || (4 > 4))
console.log(!(2**3))
// false
// true
// true
// false
// false


/*
// Short-Circuit Evaluation

false && expression
true || expression
*/
}





/*
if (condition) {
    statement1;
} 
else {
    statement2;
}


if (condition1) {
    statement1;
    statement4;
    statement5;
} 
else {
    statement2;
    statement3;
    if (condition2) {
    	statement6;
    }
}


if (condition1) {
    statement1;
} 
else if (condition2) {
    statement2;
} 
else if (conditionN) {
    statementN;
} 
else {
    statementLast;
}

*/
function classifyAge(age) {
    /* First, let's check the lower bound on our age range: */
    if (age < 13) {
        return age + " is a child.";
    }
    /* If this condition is checked, we know that age < 13 is false: */
    else if (age < 20) {
        return age + " is a teenager.";
    }
    /* If this condition is checked, we know both of these are false:
    *   age < 13 is false
    *   age < 20 is false
    *  This tells us that either age >= 20 is true, or age is not a number:
    */
    else if (age >= 20){
        return age + " is an adult.";
    }
    /* The input wasn't a number. */
    else {
        return "Your input must be an integer.";
    }
}




function aaaa() {
  
/*
Falsy Values
The following six values are known as Falsy values, meaning they evaluate to false:

false
undefined
null
0
NaN
"" (i.e., the empty string)
*/


var a = true;
var b = new Boolean(false);
var c = "";

console.log(a);
console.log(b);
console.log("\"" + c + "\"");

if (a) {
    console.log("Hello from a");
}

if (b) {
    console.log("Hello from b");
}

if (c) {
    console.log("Hello from c");
}
else {
    console.log("c is false");
}

/*
true
[Boolean: false]
""
Hello from a
Hello from b
c is false
*/


// Conditional (Ternary) Operator
//    condition ? trueStatement : falseStatement

var input = 4;

  // Example 1:
  input % 2 == 0 ? console.log(input + " is EVEN") : console.log(input + " is ODD");

  // Example 2:
  console.log( input + " is " + ((input % 2 == 0) ? "EVEN" : "ODD"));

  // Example 3:
  var parity = input % 2 == 0 ? "EVEN" : "ODD";
  console.log(input + " is " + parity);

/*
4 is EVEN
4 is EVEN
4 is EVEN
*/






/*
switch (expression) {
    case label1:
        statement1;
        break;
    case label2:
        statement2;
        break;
    case label3:
        statement3;
        statement4;
        break;
    default:
        statement;
}
*/



    var n = 3;

    switch (n) {
        case 1:
            console.log("A");
            break;
        case 2:
            console.log("B");
            break;
        case 3:
            console.log("C");
            break;
        case 4:
            console.log("D");
            break;
        default:
            console.log("E");
    }
    
    // C

    var n = parseInt(readLine());

    switch (n) {
        case 2:
            console.log("A");
            break;
        case 3:
            console.log("B");
            break;
        case 4:
            console.log("C");
            break;
        case 5:
            console.log("D");
            break;
        default:
            console.log("E");
    }

    /*
    C
    D
    E
    */


    switch (n) {
        case 2:
        case 4:
        case 6:
            console.log("A");
            break;
        case 3:
        case 5:
        case 7:
            console.log("B");
            break;
        default:
            console.log("C");
    }


}



/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}


// const getArea = (length, width) => length * width;
// const getPerimeter = (length, width) => 2 * (length + width);




function greetings(name) {
    console.log("Hello, " + name);
}

function sum(a, b) {
    return a + b;
}

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

// recursive
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    // else, n is <= 1
    return 1;
}

var factorial = (num) => {
    for (var i = num - 1; i > 0; i--){
        num *= i;
    }
    return num;
}

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}

function factorial(n) {
    var ints = [...Array(n + 1).keys()];
    ints.shift();
    return ints.reduce((a, c) => a * c);
}

// iterative
function factorial(n) {
    let factorial = n;
    while(n-- > 1) {
        factorial = factorial * n;
    }

    return factorial;
}

function factorial(n) {
    // A variable that holds the running value of factorial during calculation
    let factorial = n;
    
    // Note that this loop decrements the value of n during each iteration
    while(n-- > 1) {
        factorial = factorial * n;
    }

    return factorial;
}

// Unnamed Function Expression
// unnamed function
var square = function(x) {
    return x * x;
};

// Named Function Expression

var math = {
    // Declare the factorial property
    factorial: 
        // Declare the function as the property's value
        function factorial(n) {
            if (n > 1) {
                return n * factorial(n - 1);
            }
            // Returns 1 if n <= 1
            return 1;
        }
};

var fib = function fibonacci(n){
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else if (n < 1) {
        return 0;
    }
    // else, return 1
    return 1;
}

// Recursion

// splitting a problem into two parts:
//    a base case and
//    a recursive case

// Multiply 'n' by 'k' using addition:
private static int nTimesK(int n, int k) {
    // Print current value of n
    System.out.println("n: " + n);

    // Recursive Case
    if(n > 1) { 
        return k + nTimesK(n - 1, k);
    }
    // Base Case n = 1
    else { 
        return k;
    }
}

function asdasdads() {
    const PI = Math.PI

    let r = 2;
    let area = PI * (r ** 2);
    let perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);
}


function aasadfsadf() {
  
  // Variable Declaration Keywords

}





































































































// ------------------------------------------
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const parameterVariable = readLine();    
    greeting(parameterVariable);
}

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});
