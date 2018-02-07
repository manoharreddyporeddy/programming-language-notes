/*
# my golang notes

To read this page better click this: https://raw.githubusercontent.com/manoharreddyporeddy/my-golang-notes/master/README.md


This is a simplification of https://tour.golang.org

Two attempts are made to re-write this golang tour simplification.
1. This tutorial has simpler examples than golang
2. Many pages of programs are combined into 1 program

Why this rewrite?
I spent about 5 hours in total spanning on 3 days, felt that if the examples are simple, it would have been an hour, which is this tutorial

Ok, so learn all about 1 thing in a single program, new concepts are explained in a very detailed comments on the side

Note that 1 hour is based on assumption that you are an experienced developer, or, one knows a bit of C, JavaScript, Pascal, Python, and/or similar languages.
Lets Go!

HOME WORK (for later):
defer: http://blog.golang.org/defer-panic-and-recover
slice: http://blog.golang.org/go-slices-usage-and-internals
Exercise: Slices: https://tour.golang.org/moretypes/14
Exercise: Maps: https://tour.golang.org/moretypes/19
Exercise: Fibonacci closure: https://tour.golang.org/moretypes/22
Exercise: Stringers: https://tour.golang.org/methods/7
Exercise: Errors: https://tour.golang.org/methods/9
Exercise: Readers: https://tour.golang.org/methods/11
Exercise: rot13Reader: https://tour.golang.org/methods/12
Exercise: HTTP Handlers: https://tour.golang.org/methods/14
Exercise: Images: https://tour.golang.org/methods/16
Exercise: Equivalent Binary Trees: https://tour.golang.org/concurrency/7
Exercise: Equivalent Binary Trees: https://tour.golang.org/concurrency/8
Exercise: Web Crawler: https://tour.golang.org/concurrency/9

*/

1. Using the tour
// ---------------------------------------
Welcome
// ---------------------------------------
Learn how to use this tour: including how to navigate the different lessons and how to run code.
You've finished the first module of the tour!

Tour is divided into a list of modules
the text in the editor is formatted using the gofmt tool.

Shortcuts
shift+Enter - run
ctrl+Enter - format

The Go Playground: http://play.golang.org/

(So, copy paste your Go code from below examples, at above link, use above Shortcuts, while studying below examples)

The service receives a Go program, compiles, links, and runs the program inside a sandbox, then returns the output.

In the playground the time begins at 2009-11-10 23:00:00 UTC
(determining the significance of this date is an exercise for the reader).
This makes it easier to cache programs by giving them deterministic output.
There are also limits on execution time and on CPU and memory usage,
and the program cannot access external network hosts.

* latest stable release of Go.


2. Basics
    basics of the language
    Declaring variables, calling functions
// ---------------------------------------
2.1 Packages, variables, and functions.
// ---------------------------------------
basic components of any Go program.

program
    contains * packages
    - start running in package main.


package main

// multiple import statements
import "fmt"
import "math"

OR

// factored import statement (Good)
import (
	"fmt"               // import path
	"math/rand"         // import path - contains files that begin with the statement       package rand.
)

// we can refer to the names a package exports, after importing it
// In Go, a name is exported if it begins with a capital letter.
//      Foo is an exported name, as is FOO.     math.Pi     // 3.141592653589793
//      The name foo is not exported.           math.pi     // undefined: math.pi, cannot refer to unexported name math.pi

http://golang.org/pkg/math/rand/#Seed
    seed the number generator



x int;

func add(x int, y int) int;
func add(x, y int) int;  // shortened notation since same types
func add(x, y int) (int, int) {
	return y, x             // return any number of results
}
func split(sum int) (x, y int) {        // return values may be named, used to document the meaning of the return values
	x = sum * 4 / 9     // used to document the meaning of the return values
	y = sum - x         // used to document the meaning of the return values
	return          // "naked" return - should be used only in short functions, as with the example shown here. They can harm readability in longer functions.
}


var c, python, java bool        // package level variables
func main() {
	var i int                   // function level variables
	fmt.Println(i, c, python, java)
}


var str3 string = "hello"   // var declaration with initializer, one per variable.
var n3 int = 1              // var declaration with initializer, one per variable.

var i, j int = 1, 2
var c, python, java = true, false, "no!"        // type can be omitted, if initializer is present

// var str1 string,  n1 int // unexpected comma, expecting semicolon or newline
// var str2 string = "hello",  n2 int = 1 // unexpected comma, expecting semicolon or newline


// Short variable declarations
//  Outside a function,
//          every statement begins with a keyword (var, func, and so on) and
//              so the := construct is not available.
//  Inside a function,
//          the := short assignment statement can be used in place of a     var declaration with implicit type.

	var i, j int = 1, 2                         // var, type initializer
    var c, python, java = true, false, "no!"    // var, initializer
    
	k := 3                                  // initializer      // := short assignment => var declaration with implicit type
	c, python, java := true, false, "no!"   // initializer      // := short assignment => var declaration with implicit type




Basic types
        bool

        string

        int  int8  int16  int32  int64
        uint uint8 uint16 uint32 uint64 uintptr

        byte // alias for uint8

        rune // alias for int32
             // represents a Unicode code point

        float32 float64

        complex64 complex128



var (           // factored var statement
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)


Variables declared without an explicit initial value are given their zero value.
The zero value is:
    0 for numeric types,
    false the boolean type, and
    "" (the empty string) for strings.


Type conversions
    The expression T(v) converts the value v to the type T.
    
        var f2 float64 = 5   // explicit conversion
        var u2 uint = f2    // cannot use f2 (type float64) as type uint in assignment
        ----


        var i int = 42
        var f float64 = float64(i)  // explicit conversion
        var u uint = uint(f)        // explicit conversion
        OR
        i := 42
        f := float64(i)             // explicit conversion
        u := uint(f)                // explicit conversion


Type inferEnce

    // untyped numeric constant assignment - depends on the precision of the constant    
    i := 42           // int
    f := 3.142        // float64
    g := 0.867 + 0.5i // complex128

    // typed assignment
    var i int
    j := i            // j is an int


    v := 42 // change me!                   // int -> 2 mill max,       // later overflows int
    fmt.Printf("v is of type %T\n", v)
    v := 2.5 * 1000000000000000000000       // float64 -> mill bill max
    fmt.Printf("v is of type %T\n", v)
    v := 10000000000000000000000.5 + 10000000000000000000000i // change me!
    fmt.Printf("v is of type %T\n", v)       // float64 + float64 i  -> mill bill max  +  mill bill max  i


Constants
    //  const keyword
    //  for     character, string, boolean, or numeric values
    
    //  no var, no type    so   no := syntax.
    
	const ch = 'c'
	const World = "??"
	const Truth = true
    const Pi = 3.14
    
	fmt.Println("Happy", ch, "Day")     // Happy 99 Day
	fmt.Println("Happy", Pi, "Day")     // Happy 3.14 Day
	fmt.Println("Hello", World)         // Hello ??
	fmt.Println("Go rules?", Truth)     // Go rules? true

Numeric Constants
    // high-precision values
    
    const (
        Small = 1 << 1
        Big   = 1 << 10
    )

// ---------------------------------------
// 2.2 Flow control statements: for, if, else, switch and defer
// ---------------------------------------

Control the flow of your code with conditionals, loops, switches and defers.

	sum := 0
	for i := 0; i < 10; i++ {       //  for loop is only one looping construct
                                    //  for is same as in C/ Java, no more (), but has {}
		sum += i
	}
    
    
    for ; sum < 1000; {     // pre & post conditions can be empty
		sum += sum
	}

    for sum < 1000 {        // pre & post conditions can be empty, without semicolons (C lang while)
		sum += sum
	}
    for {    // oop condition
    }


    
    if x < 0 {      //  for is same as in C/ Java, no more (), but has {}
    }
    
    if v := math.Pow(x, n); v < lim {       // short statement, to execute, before the condition -- if similar to for
		return v
	} else {   // ??? else has to be, on this line only, i.e. ending brace of if ???
        return v + 1                        // variable from if short statement - available
    }
    
    // variable from if short statement - not available

                package main

                import (
                    "fmt"
                )

                func Sqrt(x float64) float64 {
                    prev := 1.0
                    z := 1.0
                    for ; z < 10; z++ {
                        // t := z*z - x
                        z = z - ((z*z - x) / 2 * z)
                        if (z - prev) < 1 {
                            break
                        }
                    }
                    return z
                }

                func main() {
                    fmt.Println(Sqrt(2))
                }


	switch os := runtime.GOOS; os {             // declaratioin & initialization;   condition
	case "darwin":
		fmt.Println("OS X.")                    // break; is automatic
	case "linux":
		fmt.Println("Linux.")
        fallthrough                             // fallthrough to the next default
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.", os)
	}


	today := time.Now().Weekday()
	switch time.Saturday {
	case today + 0:
		fmt.Println("Today.")
	case today + 1:
		fmt.Println("Tomorrow.")
	case today + 2:
		fmt.Println("In two days.")
	default:
		fmt.Println("Too far away.")
	}


    switch i {
    case 0:
    case f():               // if not 0, then f() will be evaluated for a number (/numeral?)
    }

    // switch true {            // clean way to write long if-then-else chains
    switch {                    // clean way to write long if-then-else chains
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}

	fmt.Println("1")
	fmt.Println("2")
    
	defer fmt.Println("world")      // deferred call's arguments are evaluated immediately,
                                    //      but function call is executed after surrounding function (its parent) returns.
	fmt.Println("hello")
	fmt.Println("3")
	fmt.Println("4")
                //  1
                //  2
                //  hello
                //  3
                //  4
                //  world

    package main
    import "fmt"

    func main() {
        fmt.Println("counting")

        for i := 0; i < 10; i++ {
            defer fmt.Println(i)    // Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in LIFO order.
        }

        fmt.Println("done")
    }
                //  counting
                //  done
                //  9
                //  8
                //  7
                //  6
                //  5
                //  4
                //  3
                //  2
                //  1
                //  0



//  More types: structs, slices, and maps.
//      define types based on existing ones: structs, arrays, slices, and maps

Pointers
                        // A pointer holds the memory address of a variable.
    var p1 *int         //      zero value is nil (not NULL)
	fmt.Println(*p2)	//      panic: runtime error: invalid memory address or nil pointer dereference    [signal 0xb code=0xffffffff addr=0x0 pc=0x203f8]
    
    //  var p2 *int     // Error: p2 declared and not used

    i := 42
    p = &i              // p is     pointer to its operand (&)    i.e;   i

    fmt.Println(*p)     // read i through the pointer p     // pointer's underlying value   (*) // "dereferencing" or "indirecting
    *p = 21             // set i through the pointer p

    p = p + 1           // invalid operation: p + 1 (mismatched types *int and int)     // Unlike C, Go has no pointer arithmetic.


Structs
    A struct is a collection of fields.

    type Vertex struct {            // type (instead of var),   struct (instead of int)   comparing to     var i int
        X int
        Y int
    }    

   	v := Vertex{1, 2}               // struct variable (v) creation
	v.X = 4                         // . to access fields
	fmt.Println(v.X)
    
	fmt.Println(Vertex{1, 2})
    
	p := &v
	p.X = 1e9                       // indirection through the pointer is transparent.      // *p.X / p->X is not required



Struct Literals

    type Vertex struct {            // struct with X & Y
        X, Y int
    }

    var (
        v1 = Vertex{1, 2}           // Struct Literal since value are listed. Has type Vertex, X is 1 & Y is 2
        
        v21 = Vertex{X: 1}          // X is 1, and Y:0 is implicit      // using "Name:" syntax for X,   Y defaults to 0  i.e. Y: 0   (JSON-like or JavaScript object notation)
        v22 = Vertex{Y: 2}          // Y is 2, and X:0 is implicit      // using same "Name:" syntax for only Y
        v23 = Vertex{Y: 2, X: 1}    // X is 1, Y is 2, order is not relevant
        
        v3 = Vertex{}               // => X:0 and Y:0
        p  = &Vertex{1, 2}          // has type *Vertex (pointer to the struct value).    pX, p.Y gives values 1, 2
    )

Arrays
    // type [n]T is an array of n values of type T.

	var a [2]string                 // array of 2 sting values
                                    // An array's length is part of its type, so arrays cannot be resized. Better ways exist
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])         // Hello World
	fmt.Println(a)                  // [Hello World]

	for i := 0; i < len(a); i++ {
		fmt.Printf("%s\n", a[i])
	}
                                    // Hello
                                    // World
    
Slices
    //      []T is a slice with elements of type T.
    //      resembles the JavaScript/ Python langs

	s := []int{100, 101, 102, 103, 104}
	fmt.Println(s)      //  [100 101 102 103 104]

Slicing slices
	fmt.Println(s[1:4]) // low index is 1, high index is 4, so slice is from 1 (low index) to 3 (high index-1)      [101 102 103]
    fmt.Println(s[1:1]) // low index is 1, high index is 1, so slice is from 1 (low index) to 0 (high index-1)      []  // empty array
	fmt.Println(s[:4])  // low index is missing, so it implies 0            [100 101 102 103]
	fmt.Println(s[1:])  // high index is missing, so it implies len(s)      [101 102 103 104]
	fmt.Println(s[:])   // both index is missing, so it implies 0 to len(s)     [100 101 102 103 104]


Making slices
<<< somewhat difficult to understand >>>

    // make ([]T, length, capacity)
    
    b := make([]int, 0, 5)  // len(b)=0, cap(b)=5           // make has len (& cap) that can be mentioned
    b = b[:cap(b)]          // len(b)=5, cap(b)=5           // slice will set len
    b = b[1:]               // len(b)=4, cap(b)=4           // slice will set len

    
    // make (..., length, capacity)

    a := make([]int, 5)     // len(a)=5        make a slice of array of ints, 5 count      // ??? zeroed array ??? possibly slice
    printSlice("a", a)      // a len=5 cap=5 [0 0 0 0 0]    
	b := make([]int, 0, 5)
	printSlice("b", b)      // b len=0 cap=5 []
	c := b[:2]
	printSlice("c", c)      // c len=2 cap=5 [0 0]
	d := c[2:5]             // ??? REALLY ???   d is somehow referencing a ?
	printSlice("d", d)      // d len=3 cap=3 [0 0 0]

        func printSlice(s string, x []int) {
            fmt.Printf("%s len=%d cap=%d %v\n",
                s, len(x), cap(x), x)
        }

Making slices from Arrays
(NOTE: THIS IS OBSERVATION ONLY ??? IT WORKS)
	a := [5]int{1, 2, 3, 4, 5}
	fmt.Println(a)      // [1 2 3, 5]
	fmt.Println(a[1:3]) // [2 3]

Nil slices
    var z []int                         // Nil slice        // length & capacity 0      // zero value of a slice is nil
    fmt.Println(z, len(z), cap(z))      // [] 0 0
	if z == nil {                       // condition is true
		fmt.Println("nil!")             // nil!
	}

Adding elements to a slice
    // func append(s []T, vs ...T) []T
    // slice2 = append(slice1, val1, val2, ... )       // in simple

	var a []int             // nil slice
	printSlice("a", a)      // a len=0 cap=0 []
    
	a = append(a, 0)        // add 1 element
	printSlice("a", a)      // a len=1 cap=2 [0]        // slice capacity grew to 2

	a = append(a, 1, 2)     // add 2 elements
	printSlice("a", a)      // a len=3 cap=4 [0 1 2]    // slice capacity grew to 4

	a = append(a, 2, 3, 4)  // add multiple elements
	printSlice("a", a)      // a len=5 cap=8 [0 1 2 3 4]    // slice capacity grew to 8

	a = append(a, 5, 6, 7, 8)   // add multiple elements
	printSlice("a", a)      // a len=9 cap=16 [0 1 2 3 4 5 6 7 8]   // slice capacity grew to 16
	
	a = append(a, 9, 10, 11, 12, 13, 14, 15, 16)
	printSlice("a", a)      // a len=17 cap=32 [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16]   // slice capacity grew to 32

??????????
    capacity increase by power of 2? is this certain
    
???????????
    How about?
        // slice3 = append(slice1, slice2)          // in simple
    How about?
        // slice3 = append(slice1, [2 to 10])       // in simple

Range
    //  range form of the for loop, iterates, over a slice or map
    
	var a = []int{100, 101, 102, 103, 104}
	for i, v := range a {                   //  range returns (index, value) combinations for each element in array
		fmt.Printf("%d %d\n", i, v)
	}
                                // 0 100
                                // 1 101
                                // 2 102
                                // 3 103
                                // 4 104

    var powers_of_two = []int{1, 2, 4, 8, 16, 32, 64, 128}
	for i, v := range powers_of_two {              //  range returns, (index, value i.e. array[index]) combinations, for each element in array
		fmt.Printf("2 power %d = %d\n", i, v)
	}
                                //  2 power 0 = 1
                                //  2 power 1 = 2
                                //  2 power 2 = 4
                                //  2 power 3 = 8
                                //  2 power 4 = 16
                                //  2 power 5 = 32
                                //  2 power 6 = 64
                                //  2 power 7 = 128
    
	for _, v := range powers_of_two {               // index is dropped, only value is considered
		fmt.Printf("2 power wHaT = %d\n", v)
	}
                                //  2 power wHaT = 1
                                //  2 power wHaT = 2
                                //  2 power wHaT = 4
                                //  2 power wHaT = 8
                                //  2 power wHaT = 16
                                //  2 power wHaT = 32
                                //  2 power wHaT = 64
                                //  2 power wHaT = 128

	for i := range powers_of_two {                      // only index, value is dropped
		fmt.Printf("2 power %d = wHaT\n", i)
	}
                                //  2 power 0 = wHaT
                                //  2 power 1 = wHaT
                                //  2 power 2 = wHaT
                                //  2 power 3 = wHaT
                                //  2 power 4 = wHaT
                                //  2 power 5 = wHaT
                                //  2 power 6 = wHaT
                                //  2 power 7 = wHaT


Maps
    //// make ([]T, length, capacity)
    // make (map[T1] T2)

	// CHECK
	var mapDayNum map[string]int        // map   maps    keys to values
	mapDayNum = make(map[string]int)    // created with   make (not new)   before use
	mapDayNum["Sun"] = 0
	mapDayNum["Mon"] = 1
	mapDayNum["Tue"] = 2
	mapDayNum["Wed"] = 3
	mapDayNum["Thr"] = 4
	mapDayNum["Fri"] = 5
	mapDayNum["Sat"] = 6
	fmt.Println(mapDayNum["Fri"])

	type Vertex struct {
		Lat, Long float64
	}
	m := make(map[string]Vertex)        // short assignment - declaration & creation
	m["Bell Labs"] = Vertex{40.68433, -74.39967}
	fmt.Println(m["Bell Labs"])

    var mapDayNum_2 map[string]int      // map   maps    keys to values
	mapDayNum_2["Sun"] = 0 // panic: assignment to entry in nil map     // the nil map is empty and cannot be assigned to.


Map literals
    // similar to struct literals
    
    type Vertex struct {
        Lat, Long float64
    }

    var m = map[string]Vertex{
        "Bell Labs": Vertex{40.68433, -74.39967},   // A map literals - both key & value is required
        "Google": Vertex{
            37.42202, -122.08408,               // Note: Comma is must here since composite literal --- else --- missing ',' before newline in composite literal
        },
        "Bell Labs 2": {42.68433, -74.39967},   // Note: Comma is must here too since composite literal --- Note: type Vertex omitted --- omit type name from the elements of the literal, if the ??? top-level type ??? is just a type name
    }

    fmt.Println(m["Google"])        // {37.42202 -122.08408}
    fmt.Println(m)                  // map[Bell Labs 2:{42.68433 -74.39967} Bell Labs:{40.68433 -74.39967} Google:{37.42202 -122.08408}]
                                    // ?????? Note element order in map, is not preserved ???????

Mutating Maps

	m := make(map[string]int)

	m["Answer"] = 100        // insert operation
	fmt.Println(m["Answer"]) // 100     << retrieve operatioin >>

	m["Answer"] = 101        // update
	fmt.Println(m["Answer"]) // 101     << retrieve operatioin >>

	var v int
	v = m["Answer"] // retrieve --- one-value assignment
	fmt.Println(v)  // 101

	var ok bool
	v, ok = m["Answer"] // retrieve --- two-value assignment
	fmt.Println(v, ok)  // 101 true

	delete(m, "Answer")      // delete "Answer" key (so, its value too)
	fmt.Println(m["Answer"]) // 0

	v, ok = m["Answer"] // retrieve --- two-value assignment
	fmt.Println(v, ok)  // 0 false  ---- really??? (???? so its always safe to check ok to be true, then access value, since our value can be 0 ????)

Function values
    // Functions are values too.

    package main

    import (
        "fmt"
        "math"
    )

    func sum(a int, b int) int { // sum function takes 2 int parameters, returns int
        return (a + b)
    }
    func sum2(a, b int) int { // same as sum, omitted type for a, used shortened paramters notation, since they both are of same type (int)
        return (a + b)
    }

    /*
    shortened paramter notation looks useful for fewer params, not otherwise
    ex:
    func fn1(a, b, c, d int)       {}

    // now, if b is to be made string

    // with mistake as below, now both a & b will become string
    func fn1(a, b string, c, d int) {}  // wrong, both a & b becomes string

    func fn1(b string, a, c, d int) {}  // correct, both b is string, a remains int
    */

    // sum(5); // can't call here only declaration are allowed --- Error --- "non-declaration statement outside function body"

    func main() {
        fmt.Println(sum(3, 4))  // 7  --- here its ok
        fmt.Println(sum2(3, 4)) // 7  --- here its ok

        sum3 := func(a int, b int) int { // Functions are values too.
            return (a + b)
        }
        fmt.Println(sum3(3, 4)) // 7  --- here its ok

        hypot := func(x, y float64) float64 { // Functions are values too.
            return math.Sqrt(x*x + y*y)
        }
        fmt.Println(hypot(3, 4))
    }


Function closures
<< little complicated concept: closure function >>
    Example 1:
        package main

        import "fmt"

        func counter(start int) func() int { // function that    takes int   and     returns    another function and returns int

            cntr := start // create new closure-variable(s)

            return func() int { // returns a new closure-function
                cntr++ // accessing closure variable(s) inside closure function
                // each time this closure-function is called, it's (corresponding) closure variable (cntr) is incremented
                return cntr // its corresponding closure variable is returned
            }
        } // note that call to counter will create a new closure variable & a new closure function

        func main() {
            counter1, counter2 := counter(0), counter(100) // variables assigned to the returned closure-functions which access their own closure-variables (starting from 0 & 100)

            fmt.Println()
            fmt.Println(counter1()) // 1, since counter1 start value is 0
            fmt.Println(counter1()) // 2

            fmt.Println()
            fmt.Println(counter2()) // 101, since counter1 start value is 100
            fmt.Println(counter2()) // 102
        }
    

    Example 2:
        package main

        import "fmt"

        func adder() func(int) int { // function that  returns another function that takes int and returns int
            sum := 0                 // create new closure-variable(s)
            return func(x int) int { // returns a new closure-function
                sum += x // accessing closure variable(s) inside closure function
                // each time this closure-function is called, it's (corresponding) closure variable (sum) is incremented by x
                return sum // its corresponding closure variable is returned
            }
        } // note that call to adder will create a new closure variable & a new closure function

        func main() {
            positiveAdder, negativeAdder := adder(), adder() // positive & negative variables taking values as returned closure-functions, they access their own closure-variables

            fmt.Println();
            for i := 1; i <= 5; i++ {
                fmt.Println(positiveAdder(i))       // 1 3 6 10 15
            }

            fmt.Println();
            for i := 1; i <= 5; i++ {
                fmt.Println(negativeAdder(-i))      // -1 -3 -6 -10 -15
            }
        }


3. Methods and interfaces
    define methods on types
    declare interfaces
    put everything together.

3.1 Methods and interfaces
    methods and interfaces
    constructs that define objects and their behavior.

define methods on types
    
        package main

        import (
            "fmt"
        )

        type Vertex struct { // no classes, just struct(s)
            X, Y float64
        }

        // defining method on struct type, is thru, mentioning a method receiver in its own argument list, between func keyword & method (function) name

        func (v *Vertex) getX() float64 { // method receiver is Vertex, given as (v *Vertex)
            return v.X
        }

        func (v *Vertex) getY() float64 { // method receiver is Vertex, given as (v *Vertex)
            return v.Y
        }

        func main() {
            v := &Vertex{1, 0}
            fmt.Println("Vertex is", v.getX(), v.getY())
        }


define methods on types - continued

        package main

        import (
            "fmt"
        )

        type MyFloat3 struct {
            X float64 // semicolon not needed (only literals have commmas ?)
            Y float64 // semicolon not needed (only literals have commmas ?)
            Z float64 // semicolon not needed (only literals have commmas ?)
        }

        type MyFloat2 struct { // struct with two elements
            X float64
            Y float64
        }

        type MyFloat11 struct { // struct with one elements
            X float64
        }

        // MyFloat12
        type MyFloat1 float64 // (???) struct with one element, omitted " struct, {, }, X "   (???)

        // can declare a method on any type that is declared in your package, not just struct types.
        func (f MyFloat1) reverseSign() float64 { // method (reverseSign) receiver is MyFloat1
            return float64(-f)
        }

        /*
        // cannot define a method on a type from another package (including built in types)
        func (f float64) reverseSign2() float64 { // error  "cannot define new methods on non-local type float64"
            return float64(-f)
        }
        */

        func main() {
            mf1 := MyFloat1(0.1) // creating instance of s
            fmt.Println(mf1.reverseSign())

            mf2 := MyFloat1(-0.1) // creating instance of s
            fmt.Println(mf2.reverseSign())
        }

#3
        package main

        import (
            "fmt"
        )

        type Vertex struct {
            X, Y float64
        }

        func (v *Vertex) getX() float64 { // Vertex is a pointer type/ pointer receiver
            return v.X
            // pointer receiver/ pointer type
            // - copy of (original) value is not created (efficient if big values)
            // - can modify value that pointer receiver points to
        }

        func (v Vertex) getY() float64 { // Vertex is a value type/ value receiver
            return v.Y
            // value receiver/ value type
            // - copy of (original) value  is created/ mutated
            // - can not modify value that pointer receiver points to
        }

        func (v *Vertex) setX(f1 float64) { // Vertex is a pointer type/ pointer receiver
            v.X = f1
            // pointer receiver/ pointer type
            // - copy of (original) value is not created (efficient if big values)
            // - can not modify value that pointer receiver points to
        }

        func (v Vertex) setY(f1 float64) { // Vertex is a value type/ value receiver
            v.Y = f1
            // value receiver/ value type
            // - copy of (original) value  is created/ mutated
            // - can not modify value that pointer receiver points to
        }

        func main() {
            v := &Vertex{1, 0}
            fmt.Println("Vertex is", v.getX(), v.getY())  // Vertex is 1 0

            f1, f2 := 101.0, 100.0
            v.setX(f1)
            v.setY(f2)

            fmt.Println("Vertex is", v.getX(), v.getY())  // Vertex is 101 0
        }


Interfaces
-- An interface type    is      a set of methods.
-- A value of interface type    can hold    any value   that implements     those methods.

#1
        package main

        import (
            "fmt"
            "math"
        )

        type Abser interface { // interface type
            Abs() float64 //  set of methods.
        }

        type MyFloat float64

        func (f MyFloat) Abs() float64 { // MyFloat now implements Abser interface by implementing its functions (Abs) --- Note: Name interface name (Abser) is not used
            if f < 0 {
                return float64(-f)
            }
            return float64(f)
        }

        type Vertex struct {
            X, Y float64
        }

        func (v *Vertex) Abs() float64 { // *Vertex now implements Abser interface by implementing its functions (Abs) --- Note: Name interface name (Abser) is not used
            return math.Sqrt(v.X*v.X + v.Y*v.Y)
        }

        func main() {
            var a Abser
            f := MyFloat(-math.Sqrt2)
            v := Vertex{3, 4}

            a = f // a MyFloat implements Abser
            fmt.Println(a.Abs())

            a = &v // a *Vertex implements Abser
            fmt.Println(a.Abs())

            // Below link errors with: "Vertex does not implement Abser (Abs method has pointer receiver)"

            // a = v // a Vertex (not *Vertex) does not implement Abser.
            // fmt.Println(a.Abs())
        }


#2
        package main

        import (
            "fmt"
            "os"
        )

        // Interfaces are satisfied implicitly

        // A type   implements   an interface   by implementing the methods.
        //    no "implements" keyword (there is no explicit declaration of intent)

        // Implicit interfaces decouple
        //    implementation packages (??? where the interfaces are implemented ???) from
        //    the packages that define the interfaces (??? where the interface is declared ???)
        //        neither depends on the other.

        // It also encourages the definition of precise interfaces,
        //    because
        //       you don't have to find every implementation and
        //           tag it with the new interface name.
        //                  ??? Note: Name interface name (Abser) is not used, while implememting interface by Vertex ???


        type Reader interface {
            Read(b []byte) (n int, err error)
        }

        type Writer interface {
            Write(b []byte) (n int, err error)
        }

        type ReadWriter interface {
            Reader
            Writer
        }
        
        // Package io defines Reader and Writer; you don't have to.

        func main() {
            fmt.Fprintf(os.Stdout, "hello, writer\n")  // hello, writer
            
            var w Writer
            // os.Stdout implements Writer
            w = os.Stdout
            fmt.Fprintf(w, "hello, writer\n")  // hello, writer
        }


Stringers

    One of the most ubiquitous interfaces is Stringer defined by the fmt package.

    type Stringer interface {
        String() string
    }
    A Stringer is a type that can describe itself as a string.
    The fmt package (and many others) look for this interface to print values.

        package main

        import "fmt"

        type Person struct {
            Name string
            Age  int
        }

        func (p Person) String() string {
            return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
        }

        func main() {
            a := Person{"Arthur Dent", 42}
            z := Person{"Zaphod Beeblebrox", 9001}
            fmt.Println(a, z)       // Stringer used        --- Arthur Dent (42 years) Zaphod Beeblebrox (9001 years)
        }

Errors
Go programs     express error state     with error values.

    The     error   type is a built-in interface,    similar to fmt.Stringer:

    type error interface {
        Error() string
    }
    (As with fmt.Stringer, the fmt package looks for the error interface when printing values.)

    i, err := strconv.Atoi("42")
    if err != nil {                                         // test if error
        fmt.Printf("couldn't convert number: %v\n", err)    // handle error
        return                                              // ??????????? missing return - looks like error ????????????
    }
    fmt.Println("Converted integer:", i)
    A nil error denotes success; a non-nil error denotes failure.

#1
        package main

        import (
            "fmt"
            "time"
        )

        type MyError struct {
            When time.Time
            What string
        }

        func (e *MyError) Error() string { // MyError structure implements error interface, by implementng Error() function
            return fmt.Sprintf("at %v: %s", e.When, e.What)
        }

        func run(n int) (int, error) {
            //  ...
            if n == 0 {
                return 0, &MyError{time.Now(), "its an invalid value"}
            } else {
                return n, nil
            }
        }

        func main() {
            i := 0
            if n, err := run(i); err != nil {
                fmt.Println("Error:", err)      // --- i := 0 ---  Error: at 2009-11-10 23:00:00 +0000 UTC: its an invalid value
            } else {
                fmt.Println("Value:", n)        // --- i := 1 --- Value: 1
            }
        }


https://tour.golang.org/methods/10


The io package
    specifies
        the io.Reader interface,
            which represents the    read end     of a stream of data.

io interfaces
    files,
    network connections,
    compressors,
    ciphers, and
    others.

io.Reader
        type Reader interface {
             Read(p []byte) (n int, err error)
        }

            Read
                populates the given byte slice
                with data and
                returns
                    the number of bytes populated and
                    an error value.
                        It returns an io.EOF error when the stream ends.

#1
        package main

        import (
            "fmt"
            "io"
            "strings"       // implements io.Reader
        )

        func main() {
            r := strings.NewReader("Hello, Reader!")    // get a new Reader instance, with string as input

            b := make([]byte, 8)                        // create a byte slice of length 8
            for {
                n, err := r.Read(b)                     // read from string input, into byte slice (8 bytes at a time)
                fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
                fmt.Printf("b[:n] = %q\n", b[:n])
                if err == io.EOF {
                    break
                }
            }
        }

                //                      n = 8 err = <nil> b = [72 101 108 108 111 44 32 82]
                //                      b[:n] = "Hello, R"
                //                      n = 6 err = <nil> b = [101 97 100 101 114 33 32 82]
                //                      b[:n] = "eader!"
                //                      n = 0 err = EOF b = [101 97 100 101 114 33 32 82]
                //                      b[:n] = ""



Web servers
    Package http    serves HTTP requests     using any value that implements http.Handler:

    package http

    type Handler interface {
        ServeHTTP(w ResponseWriter, r *Request)
    }

#1
        package main

        import (
            "fmt"
            "log"
            "net/http"
        )

        type Hello struct{}

        func (h Hello) ServeHTTP( // type Hello implements http.Handler
            w http.ResponseWriter,
            r *http.Request,
        ) {

            fmt.Fprint(w, "Hello!")
        }

        func main() {
            var h Hello
            err := http.ListenAndServe("localhost:4000", h)
            if err != nil {
                log.Fatal(err)
            }
            // Visit http://localhost:4000/ to see the greeting.

        }

        
Images
        
#1
        package main

        import (
            "fmt"
            "image"
        )

        func main() {
            m := image.NewRGBA(image.Rect(0, 0, 100, 100))
            fmt.Println(m.Bounds())
            fmt.Println(m.At(0, 0).RGBA())
        }
//            (0,0)-(100,100)
//            0 0 0 0


#4
Concurrency
    Go provides     concurrency features/constructions    as part of the      core language.
    This module goes over
        goroutines and
        channels, and
        how they are used
            to implement
            different concurrency patterns.

        presents them and
        gives some examples on how to use it.

        

Channels
    Channels are a typed conduit through which you can send and receive values with the channel operator, <-.
    
    #Ex1
            package main

            import (
                "fmt"
                "time"
            )

            func say(s string) {
                for i := 0; i < 5; i++ {
                    time.Sleep(100 * time.Millisecond)
                    fmt.Println(s)
                }
            }

            func main() {
                go say("world") // starts a new goroutine to run say // A goroutine is a       lightweight thread     managed by the     Go runtime.
                // evaluation is done in current goroutine, and
                //	execution happens in the new goroutine, but in same address space, so access to shared memory must be synchronized, ex: using sync package, etc.

                say("hello") //  run say
            }

        #Ex 2
            package main

            import "fmt"

            func sum(a []int, c chan int) { // run by each goroutine
                sum := 0
                for _, v := range a {
                    sum += v
                }
                c <- sum // goroutine sends its sum to channel c using channel operator, <-
            }

            func main() {
                a := []int{7, 2, 8, -9, 4, 0} // shared memory

                c := make(chan int) // channel c is created, similar to slices & maps

                // sums 1st half of array
                go sum(a[:len(a)/2], c) // starts goroutine/lightweight thread, synchronizes using same channel (without explicit locks or condition variables)

                // sums 2nd half of array
                go sum(a[len(a)/2:], c) // starts goroutine/lightweight thread, synchronizes using same channel (without explicit locks or condition variables)

                // both half sums of array are collected
                x, y := <-c, <-c // receive from channel c (from lightweight threads) using channel operator, <-

                // total sum of array is printed
                fmt.Println(x, y, x+y)      // 17 -5 12
            }


Buffered Channels       ?????????? Why to use Buffered? to make sure our programs are correct as expected - to catch bugs at dev.t ????????
    Channels can be buffered. Provide the buffer length as the second argument to initialize a buffered channel:

    ch := make(chan int, 100)
    Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty. ????? what ????? 

    Modify the example to overfill the buffer and see what happens.

            package main

            import "fmt"

            func main() {
                // Channels can be buffered
                ch := make(chan int, 2) // create a buffered channel of buffer length 2

                ch <- 1 // uses part of length of buffer
                ch <- 2 // uses part of length of buffer

                // if overfill (buffer length is not enough)
                // error --- fatal error: all goroutines are asleep - deadlock!

                // if underfill (buffer length is not enough)

                fmt.Println(<-ch)
                fmt.Println(<-ch) // if (less channels created than asked)
                // error --- fatal error: all goroutines are asleep - deadlock!

            }

Range and Close - on Channel

            #Ex: 1
            package main

            import (
                "fmt"
            )

            func fibonacci(n int, c chan int) {
                x, y := 0, 1
                for i := 0; i < n; i++ {
                    c <- x
                    x, y = y, x+y // ??? right side values are evaluated, then are assigned ???
                }
                close(c) // sender closes channel --- no more values will be sent
                            --- not required in general, required only to terminate a range loop at reciever's end

                // c <- 1 // Sending on a closed channel will cause a panic.
            }

            func main() {
                c := make(chan int, 10)
                go fibonacci(cap(c), c)
                // 	in a general for loop
                //		v, ok := <-ch  // ok is false if channel is closed, no more values to receive
                // 	  or
                //	in the for loop wih range
                for i := range c { // receives values from the channel repeatedly until it is closed.
                    fmt.Println(i)
                }
                
                // receiver never closes channel
            }
                // 0
                //  1
                //  1
                //  2
                //  3
                //  5
                //  8
                //  13
                //  21
                //  34

Select
                package main

                import "fmt"

                func fibonacci(c, quit chan int) {
                    x, y := 0, 1
                    for {
                        select {    // goroutine waits/blocks on multiple communication operations - chooses one at random if multiple are ready (really ???)
                        case c <- x: // send to channel new fibonacci num
                            x, y = y, x+y // cal new fibonscci num (into x)
                        case <-quit: // value is recieved from quit channel
                            fmt.Println("quit")
                            return
                        }
                    }
                }

                func main() {
                    c := make(chan int)    // channel is created to communicate ints
                    quit := make(chan int) // another channel is created to communicate quit
                    go func() {            // goroutine (lightweight thread) is created with this function
                        for i := 0; i < 10; i++ {
                            fmt.Println(<-c) // channel sends its recieved data to print
                        }
                        quit <- 0 // 0 is sent to quit channel
                    }() // execute the goroutine
                    fibonacci(c, quit)
                }


Default Selection
                package main

                import (
                    "fmt"
                    "time"
                )

                func main() {
                    tick := time.Tick(100 * time.Millisecond)
                    boom := time.After(500 * time.Millisecond)
                    for {
                        select {
                        case <-tick:
                            fmt.Println("tick.")
                        case <-boom:
                            fmt.Println("BOOM!")
                            return
                        default: // no other case is ready --- to try a send or receive without blocking
                            fmt.Println("    .")
                            time.Sleep(50 * time.Millisecond)

                            // receiving from tick/boom would block
                        }
                    }
                }

/*
More:
Where to Go from here... https://tour.golang.org/concurrency/10
Go documentation: http://golang.org/doc/
Package ref http://golang.org/pkg/
Language spec: http://golang.org/ref/spec
Blog http://blog.golang.org/
To get started writing web applications 1. http://vimeo.com/53221558 2. http://golang.org/doc/articles/wiki/

Please free to register & comment.

If you like improvements anywhere, leave a comment. Thank you.
*/
