using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpFeatures
{

    public enum Color2
    {
        Red, Blue, Green
    }
    public struct Point
    {
        public int x, y;
    }

    public interface IBase
    {
        void F();
    }
    public interface IDerived : IBase
    {
        void G();
    }
    public class A
    {
        protected virtual void H()
        {
            Console.WriteLine("A.H");
        }
    }
    public class B : A, IDerived
    {
        public void F()
        {
            Console.WriteLine("B.F, implementation of IDerived.F");
        }
        public void G()
        {
            Console.WriteLine("B.G, implementation of IDerived.G");
        }
        override protected void H()
        {
            Console.WriteLine("B.H, override of A.H");
        }
    }
    public delegate void EmptyDelegate();



    class Class1
    {
        public int Value = 0;
    }


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            {
                int val1 = 0;
                int val2 = val1;
                val2 = 123;
                Console.WriteLine("Values: {0}, {1}", val1, val2);
            }

            {
                Class1 ref1 = new Class1();
                Class1 ref2 = ref1;
                ref2.Value = 123;
                Console.WriteLine("Refs: {0}, {1}", ref1.Value, ref2.Value);
            }

            /*
Type					Description								                        Example
object					The ultimate base type of all other types						object o = null;
string					String type; a string is a sequence of Unicode characters		string s = "hello";
sbyte					8-bit signed integral type								        sbyte val = 12;
short					16-bit signed integral type								        short val = 12;
int(System.Int32)	    32-bit signed integral type								        int val = 12;
long					64-bit signed integral type								        long val1 = 12; long val2 = 34L;
byte					8-bit unsigned integral type								    byte val1 = 12;
ushort					16-bit unsigned integral type								    ushort val1 = 12;
uint					32-bit unsigned integral type								    uint val1 = 12; uint val2 = 34U;
ulong					64-bit unsigned integral type								    ulong val1 = 12; ulong val2 = 34U; ulong val3 = 56L; ulong val4 = 78UL;
float					Single-precision floating point type							float val = 1.23F;
double					Double-precision floating point type							double val1 = 1.23; double val2 = 4.56D;
bool					Boolean type; a bool value is either true or false				bool val1 = true; bool val2 = false;
char					Character type; a char value is a Unicode character				char val = 'h';
decimal					Precise decimal type with 28 significant digits					decimal val = 1.23M;
             */


            string s = "Test";
            string t = string.Copy(s);
            Console.WriteLine(s == t);
            Console.WriteLine((object)s == (object)t);

            /*
True
False
             */


            //   implicit conversions and explicit conversions
            {
                int intValue = 123;
                long longValue = intValue;
                Console.WriteLine("{0}, {1}", intValue, longValue);
            }
            {
                long longValue = Int64.MaxValue;
                int intValue = (int)longValue;
                Console.WriteLine("(int){0} = {1}", longValue, intValue);
            }



            {
                // arrays

                int[] arr = new int[5];
                for (int i = 0; i < arr.Length; i++)
                    arr[i] = i * i;
                for (int i = 0; i < arr.Length; i++)
                    Console.WriteLine("arr[{0}] = {1}", i, arr[i]);

                /*
arr[0] = 0
arr[1] = 1
arr[2] = 4
arr[3] = 9
arr[4] = 16
                 */
            }


            {
                //  int[] a1;           // single-dimensional array of int
                //  int[,] a2;          // 2-dimensional array of int
                //  int[,,] a3;         // 3-dimensional array of int

                //  int[][] j2;         // "jagged" array: array of (array of int)
                //  int[][][] j3;		// array of (array of (array of int))

                //// Console.WriteLine(a1,a2,a3,j2,j3);
            }


            {
                // array initializers and array creation expressions

                int[] a1 = new int[] { 1, 2, 3 };
                int[,] a2 = new int[,] { { 1, 2, 3 }, { 4, 5, 6 } };
                int[,,] a3 = new int[10, 20, 30];
                int[][] j2 = new int[3][];
                j2[0] = new int[] { 1, 2, 3 };
                j2[1] = new int[] { 1, 2, 3, 4, 5, 6 };
                j2[2] = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            }

            {
                short[] a = { 1, 2, 3 };
                int[] b = { 1, 2, 3 };
                long[] c = { 1, 2, 3 };

            }





            {
                Console.WriteLine(3.ToString());
            }

            {
                int i = 123;
                object o = i;       // boxing
                int j = (int)o; // unboxing
            }

            /*
            public class Stack
            {
                public object Pop() { } // returns int also
                public void Push(object o) { } // takes int also
            } */

            /*
            { 
                int a;
                int b = 1;
                int c = a + b;  // error, a not yet assigned
            }
            */

            // Console.ReadKey();
        } // Main
    } // class Program


    // private static variable
    // two public instance variables
    class Employee
    {
        Employee()
        {
            Name = "some name";
            Salary = 1000000;
        }

        // private static DataSet ds;

        public string Name;
        public decimal Salary;
    }

    class C1
    {
        // in - value param
        static void F(int p)
        {
            Console.WriteLine("p = {0}", p);
            p++;
        }
        void CallValue()
        {
            int a = 1;
            Console.WriteLine("pre:  a = {0}", a);
            F(a);
            Console.WriteLine("post: a = {0}", a);

            /*
                    pre:  a = 1
                    p = 1
                    post: a = 1
             */
        }

        // reference parameter
        static void Swap(ref int a, ref int b)
        {
            int t = a;
            a = b;
            b = t;
        }
        void CallRef()
        {
            int x = 1;
            int y = 2;

            Console.WriteLine("pre:  x = {0}, y = {1}", x, y);
            Swap(ref x, ref y);
            Console.WriteLine("post: x = {0}, y = {1}", x, y);

            /*
                pre:  x = 1, y = 2
                post: x = 2, y = 1
             */
        }

        // output parameter
        static void Divide(int a, int b, out int result, out int remainder)
        {
            result = a / b;
            remainder = a % b;
        }
        static void CallOut()
        {
            for (int i = 1; i < 10; i++)
            {
                for (int j = 1; j < 10; j++)
                {
                    int ans, r;
                    Divide(i, j, out ans, out r);
                    Console.WriteLine("{0} / {1} = {2}r{3}", i, j, ans, r);
                }
            }
        }

        // parameter array
        static void F(params int[] args)        // CHECKKKKKKKKKKKKKKKKKKK why params - not redudant as args is array?
        {
            Console.WriteLine("# of arguments: {0}", args.Length);
            for (int i = 0; i < args.Length; i++)
                Console.WriteLine("\targs[{0}] = {1}", i, args[i]);
        }
        static void Main11()
        {
            F();
            F(1);
            F(1, 2);
            F(1, 2, 3);
            F(new int[] { 1, 2, 3, 4 });
            /*
                # of arguments: 0
                # of arguments: 1
	                args[0] = 1
                # of arguments: 2
	                args[0] = 1
	                args[1] = 2
                # of arguments: 3
	                args[0] = 1
	                args[1] = 2
	                args[2] = 3
                # of arguments: 4
	                args[0] = 1
	                args[1] = 2
	                args[2] = 3
	                args[3] = 4
             */
        }

        /*
        namespace System
        {
            public class Console
            {
                public static void WriteLine(string s) {  }
                public static void WriteLine(string s, object a) {  }
                public static void WriteLine(string s, object a, object b) {  }
		        ...
		        public static void WriteLine(string s, params object[] args) {  }
            }
        }
        */

        void A()
        {
            int a = 1, b = 2;
            Console.WriteLine("a = {0}, b = {1}", a, b);    // using a parameter array. 
        }


    } // class C1


    public class Stack1
    {
        private Node first = null;
        public bool Empty
        {
            get
            {
                return (first == null);
            }
        }
        public object Pop()
        {
            if (first == null)
                throw new Exception("Can't Pop from an empty Stack1.");
            else
            {
                object temp = first.Value;
                first = first.Next;
                return temp;
            }
        }
        public void Push(object o)
        {
            first = new Node(o, first);
        }
        private class Node
        {
            public Node Next;
            public object Value;
            public Node(object value) : this(value, null) { }
            public Node(object value, Node next)
            {
                Next = next;
                Value = value;
            }
        }
    }   // public class Stack1

    class C2
    {
        static void Main1()
        {
            Stack1 s = new Stack1();
            for (int i = 0; i < 10; i++)
                s.Push(i);
            s = null;       //  Automatic memory management
        }

        void Unsafecode_forthatextraBitPerf(byte[] arr)
        {
            /*
            unsafe
            {
                fixed (byte* pArray = arr)
                {
                    byte* pElem = pArray;
                    for (int i = 0; i < arr.Length; i++)
                    {
                        byte value = *pElem;
                        Console.WriteLine("arr[{0}] at 0x{1:X} is {2}",
                            i, (uint)pElem, value);
                        pElem++;
                    }
                }
            }
            */

            // arr[0] at 0x8E0360 is 1
            // arr[1] at 0x8E0361 is 2
            // arr[2] at 0x8E0362 is 3
            // arr[3] at 0x8E0363 is 4
            // arr[4] at 0x8E0364 is 5
        }


        void Expressions1()
        {
            //  in order of precedence from highest to lowest

            /*
            Category	                    Operators
            Primary	                        x.y  f(x)  a[x]  x++  x--  new  typeof  checked  unchecked
            Unary	                        +  -  !  ~  ++x  --x  (T)x
            Multiplicative	                *  /  %
            Additive	                    +  -
            Shift	                        <<  >>
            Relational and type testing     <  >  <=  >=  is  as
            Equality	                    ==  !=
            Logical                         AND	&
            Logical                         XOR	^
            Logical                         OR	|
            Conditional                     AND	&&
            Conditional                     OR	||
            Conditional                     ?:
            Assignment                      =  *=  /=  %=  +=  -=  <<=  >>=  &=  ^=  |=

            assignment operators and the conditional operator (?:) are
                right-associative
            all binary operators are left-associative
             */
        }

        void Statements1()
        {



            // Statement lists and block statements
            {
                /*
                F();
                G();
                {
                    H();
                    I();
                }
                */
            }

            // Labeled statements and goto statements
            {
                int x = 112;
                if (x == 0)
                    goto done;

                Console.WriteLine("2");

            done:
                Console.WriteLine("Done");
            }

            // Local constant declarations
            {
                const float pi = 3.14f;
                const int r = 123;
                Console.WriteLine(pi * r * r);
            }

            // Local variable declarations
            {
                int a;
                int b = 2, c = 3;
                a = 1;
                Console.WriteLine(a + b + c);
            }
        }

        // Expression statements
        static int F(int a, int b)
        {
            return a + b;
        }

        void FF()
        {
            F(1, 2);  // Expression statement

            //if statements
            {
                int x = 12;
                if (x == 0)
                    Console.WriteLine("No args");
                else
                    Console.WriteLine("Args");
            }

            //switch statements
            {
                int x = 12;
                switch (x)
                {
                    case 0:
                        Console.WriteLine("No args");
                        break;
                    case 1:
                        Console.WriteLine("One arg ");
                        break;
                    default:
                        int n = 2;
                        Console.WriteLine("{0} args", n);
                        break;
                }
            }

            //while statements
            {
                int i = 0;
                while (i < 3)
                {
                    Console.WriteLine("aa");
                    i++;
                }
            }

            //do statements
            {
                string s;
                do
                {
                    s = Console.ReadLine();
                }
                while (s != "Exit");
            }

            //for statements
            {
                for (int i = 0; i < 2; i++)
                    Console.WriteLine("aa");
            }

            //foreach statements
            {
                string[] args = { "1", "2" };
                foreach (string s in args)
                    Console.WriteLine(s);
            }

            //break statements
            {
                int i = 0;
                while (true)
                {
                    if (i == 3)
                        break;
                    Console.WriteLine("args");
                    i++;
                }
            }

            //continue statements
            {
                int i = 0;
                while (true)
                {
                    Console.WriteLine("fg");
                    i++;
                    if (i < 4)
                        continue;
                    break;
                }
            }

        }
    } //     class C2


    class A3
    {
        //return statements
        static int F333(int a, int b)
        {
            return a + b;
        }

        void F3()
        {
            Console.WriteLine(F(1, 2));
            return;
        }
        //throw statements and try statements

        static int F(int a, int b)
        {
            if (b == 0)
                throw new Exception("Divide by zero");
            return a / b;
        }
        void F4()
        {
            try
            {
                Console.WriteLine(F(5, 0));
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: " + e.ToString());
            }
        }

        // CHECKKKKKKKKKKK
        void CnUC1111111()
        //checked and unchecked statements
        {
            int x = Int32.MaxValue;

            Console.WriteLine(x + 1);      // Overflow

            checked
            {
                Console.WriteLine(x + 1);  // Exception
            }

            unchecked
            {
                Console.WriteLine(x + 1);  // Overflow
            }
        }
    }// class A3

    class A4
    {
        public int P;
    }

    class A42
    {

        void us()
        //lock statements
        {
            A4 a = new A4();

            // CHECKKKKKKKKKKK
            lock (a)
            {
                a.P = a.P + 1;
            }

            /*
            // CHECKKKKKKKKKKK
            //using statements
            {
                using (Resource r = new Resource())
                {
                    r.F();
                }
            }
            */

        }
    }

    // Classes
    /*
    public	            Access not limited
    private         	Access limited to the containing type
    protected	        Access limited to the containing class or types derived from the containing class
    internal	        Access limited to this program
    protected internal	Access limited to this program or types derived from the containing class
     */

    class MyClass
    {
        public MyClass()
        {
            Console.WriteLine("Instance constructor");
        }
        public MyClass(int value)
        {
            MyField = value;
            Console.WriteLine("Instance constructor");
        }
        ~MyClass()
        {
            Console.WriteLine("Destructor");
        }

        public const int MyConst = 12;

        public int MyField = 34;
        public void MyMethod()
        {
            Console.WriteLine("MyClass.MyMethod");
        }
        public int MyProperty
        {
            get
            {
                return MyField;
            }
            set
            {
                MyField = value;
            }
        }
        public int this[int index]
        {
            get
            {
                return 0;
            }
            set
            {
                Console.WriteLine("this[{0}] = {1}", index, value);
            }
        }
        public event EventHandler MyEvent;
        public static MyClass operator +(MyClass a, MyClass b)
        {
            return new MyClass(a.MyField + b.MyField);
        }
        internal class MyNestedClass
        { }
    }

    class Uses
    {
        static void UseMyClass()
        {
            // Instance constructor usage
            MyClass a = new MyClass();
            MyClass b = new MyClass(123);

            // Constant usage
            Console.WriteLine("MyConst = {0}", MyClass.MyConst);

            // Field usage
            a.MyField++; Console.WriteLine("a.MyField = {0}", a.MyField);

            // Method usage
            a.MyMethod();

            // Property usage
            a.MyProperty++; Console.WriteLine("a.MyProperty = {0}", a.MyProperty);

            // Indexer usage
            a[3] = a[1] = a[2]; Console.WriteLine("a[3] = {0}", a[3]);

            // Event usage
            a.MyEvent += new EventHandler(MyHandler);

            // Overloaded operator usage
            MyClass c = a + b;

        }
        static void MyHandler(object sender, EventArgs e)
        {
            Console.WriteLine("Test.MyHandler");
        }
        internal class MyNestedClass
        { }
    }


    class Constants
    {
        public const int A = 1;
        public const int B = A + 1;
    }

    class Color
    {
        public static readonly Color Red = new Color(0xFF, 0, 0);
        public static readonly Color Blue = new Color(0, 0xFF, 0);
        public static readonly Color Green = new Color(0, 0, 0xFF);
        public static readonly Color White = new Color(0xFF, 0xFF, 0xFF);

        internal ushort redPart;
        internal ushort bluePart;
        internal ushort greenPart;
        public Color(ushort red, ushort blue, ushort green)
        {
            redPart = red;
            bluePart = blue;
            greenPart = green;
        }

    }
    class Uses2
    {
        void Use()
        {
            Console.WriteLine("{0}, {1}", Constants.A, Constants.B);
        }
    }


    public class Stack
    {
        public static Stack Clone(Stack s) { return null; }
        public static Stack Flip(Stack s) { return null; }
        public object Pop() { return null; }
        public void Push(object o) { }
        public override string ToString() { return null; }
    }
    class Test
    {
        static void Use()
        {
            Stack s = new Stack();
            for (int i = 1; i < 10; i++)
                s.Push(i);
            Stack flipped = Stack.Flip(s);
            Stack cloned = Stack.Clone(s);
            Console.WriteLine("Original stack: " + s.ToString());
            Console.WriteLine("Flipped stack: " + flipped.ToString());
            Console.WriteLine("Cloned stack: " + cloned.ToString());
        }
    }


    class OverloadedMethods1
    {
        static void F()
        {
            Console.WriteLine("F()");
        }
        static void F(object o)
        {
            Console.WriteLine("F(object)");
        }
        static void F(int value)
        {
            Console.WriteLine("F(int)");
        }
        static void F(ref int value)
        {
            Console.WriteLine("F(ref int)");
        }
        static void F(int a, int b)
        {
            Console.WriteLine("F(int, int)");
        }
        static void F(int[] values)
        {
            Console.WriteLine("F(int[])");
        }
        static void Use()
        {
            F();
            F(1);
            int i = 10;
            F(ref i);
            F((object)1);
            F(1, 2);
            F(new int[] { 1, 2, 3 });

            /*
                F()
                F(int)
                F(ref int)
                F(object)
                F(int, int)
                F(int[])
             */
        }
    }

    // 1.7.4 Properties

    public class Button
    {
        private string caption;
        public string Caption
        {
            get
            {
                return caption;
            }
            set
            {
                caption = value;
                Repaint();
            }
        }
        void Repaint()
        {
        }

        void Use()
        {
            Button b = new Button();
            b.Caption = "ABC";      // set; causes repaint
            string s = b.Caption;   // get
            b.Caption += "DEF";		// get & set; causes repaint
        }
    }

} // namespace CSharpFeatures

namespace ns2
{
    public delegate void EventHandler(object sender, System.EventArgs e);
    public class Button
    {
        public event EventHandler Click;
        public void Reset()
        {
            Click = null;
        }
    }

    public class Form1
    {
        public Form1()
        {
            // Add Button1_Click as an event handler for Button1’s Click event
            Button1.Click += new EventHandler(Button1_Click);
        }
        Button Button1 = new Button();
        void Button1_Click(object sender, EventArgs e)
        {
            Console.WriteLine("Button1 was clicked!");
        }
        public void Disconnect()
        {
            Button1.Click -= new EventHandler(Button1_Click);
        }
    }
}

namespace ns3
{
    public class Button
    {
        private EventHandler handler;
        public event EventHandler Click
        {
            add { handler += value; }
            remove { handler -= value; }
        }
    }
}

namespace Operators
{
    public struct Digit
    {
        byte value;
        public Digit(byte value)
        {
            if (value < 0 || value > 9) throw new ArgumentException();
            this.value = value;
        }
        public Digit(int value) : this((byte)value) { }
        public static implicit operator byte(Digit d)
        {
            return d.value;
        }
        public static explicit operator Digit(byte b)
        {
            return new Digit(b);
        }
        public static Digit operator +(Digit a, Digit b)
        {
            return new Digit(a.value + b.value);
        }
        public static Digit operator -(Digit a, Digit b)
        {
            return new Digit(a.value - b.value);
        }
        public static bool operator ==(Digit a, Digit b)
        {
            return a.value == b.value;
        }
        public static bool operator !=(Digit a, Digit b)
        {
            return a.value != b.value;
        }
        public override bool Equals(object value)
        {
            if (value == null) return false;
            if (GetType() == value.GetType()) return this == (Digit)value;
            return false;
        }
        public override int GetHashCode()
        {
            return value.GetHashCode();
        }
        public override string ToString()
        {
            return value.ToString();
        }
    }
    class Test
    {
        static void Use()
        {
            Digit a = (Digit)5;
            Digit b = (Digit)3;
            Digit plus = a + b;
            Digit minus = a - b;
            bool equals = (a == b);
            Console.WriteLine("{0} + {1} = {2}", a, b, plus);
            Console.WriteLine("{0} - {1} = {2}", a, b, minus);
            Console.WriteLine("{0} == {1} = {2}", a, b, equals);
        }
    }
}

namespace Indexers
{
    public class Stack
    {
        private Node first = null;
        public bool Empty
        {
            get
            {
                return (first == null);
            }
        }
        public object Pop()
        {
            if (first == null)
                throw new Exception("Can't Pop from an empty Stack1.");
            else
            {
                object temp = first.Value;
                first = first.Next;
                return temp;
            }
        }
        public void Push(object o)
        {
            first = new Node(o, first);
        }
        private class Node
        {
            public Node Next;
            public object Value;
            public Node(object value) : this(value, null) { }
            public Node(object value, Node next)
            {
                Next = next;
                Value = value;
            }
        }
        private Node GetNode(int index)
        {
            Node temp = first;
            while (index > 0 && temp != null)
            {
                temp = temp.Next;
                index--;
            }
            if (index < 0 || temp == null)
                throw new Exception("Index out of range.");
            return temp;
        }
        public object this[int index]
        {
            get
            {
                return GetNode(index).Value;
            }
            set
            {
                GetNode(index).Value = value;
            }
        }
    }
    class Test
    {
        static void Main2()
        {
            Stack s = new Stack();
            s.Push(1);
            s.Push(2);
            s.Push(3);
            s[0] = 33;  // Changes the top item from 3 to 33
            s[1] = 22;  // Changes the middle item from 2 to 22
            s[2] = 11;  // Changes the bottom item from 1 to 11
        }
    }

}






namespace InstanceConstructor
{
    class DataSet
    {

    }
    class Point
    {
        private static DataSet ds;

        public double x, y;
        public Point()
        {
            this.x = 0;
            this.y = 0;
        }
        public Point(double x, double y)                    // InstanceConstructor
        {
            this.x = x;
            this.y = y;
        }
        public static double Distance(Point a, Point b)     // InstanceConstructor
        {
            double xdiff = a.x - b.x;
            double ydiff = a.y - b.y;
            return Math.Sqrt(xdiff * xdiff + ydiff * ydiff);
        }

        static Point() // static constructor for a class is called automatically.
        {
            ds = new DataSet();
        }

        ~Point()        // Destructor
        {
            Console.WriteLine("Destructed {0}", this);
        }

        public override string ToString()
        {
            return string.Format("({0}, {1})", x, y);
        }
    }
    class Test
    {
        static void use()
        {
            Point a = new Point();
            Point b = new Point(3, 4);
            double d = Point.Distance(a, b);
            Console.WriteLine("Distance from {0} to {1} is {2}", a, b, d);
        }
    }

}



namespace  Inheritance
{
    class A
    {
        public void aa() { Console.WriteLine("A.F"); }
    }

    class B : A
    {
        public void bb() { Console.WriteLine("B.G"); }
    }

    class Test
    {
        static void Use()
        {
            B b = new B();
            b.aa();          // Inherited from A
            b.bb();          // Introduced in B

            A a = b;            // Treat a B as an A
            a.aa();
        }
    }

}

namespace AA
{
    // Methods, properties, and indexers can be virtual
    class A
    {
        public virtual void F() {
            Console.WriteLine("A.F");
        }
    }
    class B : A
    {
        public override void F()
        {
            base.F();
            Console.WriteLine("B.F");
        }
    }
    class Test
    {
        static void Use()
        {
            B b = new B();
            b.F();

            A a = b;
            a.F();
        }
    }
}


namespace AbstractClassAndMembers
{
    abstract class A
    {
        public abstract void F();
    }
    class B : A
    {
        public override void F() { Console.WriteLine("B.F"); }
    }
    class Test
    {
        static void Use()
        {
            B b = new B();
            b.F();

            A a = b;
            a.F();
        }
    }

}

namespace Structs{
    struct Point // better
    {
        public int x, y;
        public Point(int x, int y)
        {
            this.x = x;
            this.y = y;
        }
    }
    class Point1 // not so better
    {
        public int x, y;
        public Point1(int x, int y)
        {
            this.x = x;
            this.y = y;
        }
    }
    class Test
    {
        static void Main22()
        {
            Point[] points = new Point[100];
            for (int i = 0; i < 100; i++)
                points[i] = new Point(i, i * i);
        }
    }

}

namespace Interfaces {
    interface IExample
    {
        string this[int index] { get; set; }
        event EventHandler E;
        void F(int value);
        string P { get; set; }
    }
    public delegate void EventHandler(object sender, EventArgs e);



    interface IControl
    {
        void Paint();
    }

    interface ITextBox : IControl
    {
        void SetText(string text);
    }
    interface IListBox : IControl
    {
        void SetItems(string[] items);
    }

    interface IComboBox : ITextBox, IListBox { }


    public class Control : IControl
    {
         public virtual void Paint () { }
    }
    public class Binder
    {
    }

    interface IDataBound
    {
        void Bind(Binder b);
    }
    public class EditBox : Control, IControl, IDataBound
    {
        public override void Paint() { }
        public void Bind(Binder b) { }
    }

    public class EditBox2 : IControl, IDataBound
    {
        void IControl.Paint() { }            // explicit interface member
        void IDataBound.Bind(Binder b) { }   // explicit interface member
    }

    class Cls
    {
        static void Use()
        {
            EditBox editbox = new EditBox();
            editbox.Paint();    // error: no such method
            IControl control = editbox;
            control.Paint();    // calls EditBox’s Paint implementation
        }
    }


}

namespace Delegates
{
    delegate void SimpleDelegate();
    class Test
    {
        static void F()
        {
            System.Console.WriteLine("Test.F");
        }
        static void Use1()
        {
            SimpleDelegate d = new SimpleDelegate(F); // delegate instance
            d();
        }

        void MultiCall(SimpleDelegate d, int count)
        {
            for (int i = 0; i < count; i++)
            {
                d();
            }
        }

    }
}

namespace Enums
{
    enum Color
    {
        Red,
        Blue,
        Green
    }
    class Shape
    {
        public void Fill(Color color)
        {
            switch (color)
            {
                case Color.Red:
                    // ...
                    break;
                case Color.Blue:
                    // ...
                    break;
                case Color.Green:
                    // ...
                    break;
                default:
                    break;
            }
        }
    }

}

namespace A
{
    /*
    assemblies:
         applications(.exe) and
         libraries(.dll)

     */

    // class library
    // HelloLibrary.cs
    namespace Microsoft.CSharp.Introduction     // shorthand for multiple levels of namespace nesting
    {
        public class HelloMessage
        {
            public string Message
            {
                get
                {
                    return "hello, world";
                }
            }
        }
    }
    //      csc /target:library HelloLibrary.cs 

    namespace nsuse
    {
        // console application
        // HelloApp.cs
        using Microsoft.CSharp.Introduction;
        class HelloApp
        {
            static void Main1()
            {
                HelloMessage m = new HelloMessage();
                System.Console.WriteLine(m.Message);
            }
        }

        // using MessageSource = Microsoft.CSharp.Introduction.HelloMessage;
        // HelloMessage m = new HelloMessage();
        // MessageSource m = new MessageSource();
    }
    //      csc /reference:HelloLibrary.dll HelloApp.cs

}


namespace Versioning
{
    // Versioning is the process of evolving a component over time in a compatible manner

    // source compatible 
    //  dependent code recomplied works with new component version
    // binary compatible 
    //  dependent application without-recomplie works with new component version


    // Author A
    namespace A
    {
        public class Base       // version 1
        {
        }
    }
    // Author B
    namespace B
    {
        class Derived : A.Base
        {
            public virtual void F()
            {
                System.Console.WriteLine("Derived.F");
            }
        }
    }

}


namespace vv
{
    // Author A
    namespace A
    {
        public class Base                   // version 2
        {
            public virtual void F()
            { // added in version 2
                System.Console.WriteLine("Base.F");
            }
        }
    }
    // Author B
    namespace B
    {
        class Derived : A.Base  // version 2b: override
        {
            public override void F() // <---------------------------- v2 with       override (related to base class)
            {
                base.F();
                System.Console.WriteLine("Derived.F");
            }
        }
    }

}


namespace aaa
{
    // Author A
    namespace A
    {
        public class Base           // version 2
        {
            public virtual void F()
            { // added in version 2
                System.Console.WriteLine("Base.F");
            }
        }
    }
    // Author B
    namespace B
    {
        class Derived : A.Base  // version 2a: new
        {
            new public virtual void F() // <------------------------- v2 with       new (unrelated to base class)
            {
                System.Console.WriteLine("Derived.F");
            }
        }
    }

}

namespace Attributes
{
    [AttributeUsage(AttributeTargets.All)]
    public class HelpAttribute : Attribute
    {
        public HelpAttribute(string url)
        {
            this.url = url;
        }
        public string Topic = null;
        private string url;
        public string Url
        {
            get { return url; }
        }
    }


    [Help("http://www.microsoft.com/.../Class1.htm")]
    public class Class1
    {
        [Help("http://www.microsoft.com/.../Class1.htm", Topic = "F")]
        public void F() { }
    }

    class Use
    {
        static void RuntimeUse()
        {
            Type type = typeof(Class1);
            object[] arr = type.GetCustomAttributes(typeof(HelpAttribute), true);
            if (arr.Length == 0)
                Console.WriteLine("Class1 has no Help attribute.");
            else
            {
                HelpAttribute ha = (HelpAttribute)arr[0];
                Console.WriteLine("Url = {0}, Topic = {1}", ha.Url, ha.Topic);
            }
        }
    }

}

namespace nss
{
    class C1
    {
        class C2
        {

        }
    }
}




/*
 value types

value-type:
	struct-type
	enum-type
struct-type:
	type-name
	simple-type
simple-type:
	numeric-type
	bool
numeric-type:
	integral-type
	floating-point-type
	decimal
integral-type:
	sbyte
	byte
	short
	ushort
	int
	uint
	long
	ulong
	char
floating-point-type:
	float
	double
enum-type:
	type-name



reference type 

reference-type:
	class-type
	interface-type
	array-type
	delegate-type
	class-type:
	type-name
	object
	string
interface-type:
	type-name
array-type:
	non-array-type   rank-specifiers
non-array-type:
	type
rank-specifiers:
	rank-specifier
	rank-specifiers   rank-specifier
rank-specifier:
	[   dim-separatorsopt   ]
dim-separators:
	,
	dim-separators   ,
delegate-type:
	type-name




Class type	        Description
System.Object	    The ultimate base class of all other types. See §4.2.2.
System.String	    The string type of the C# language. See §4.2.3.
System.ValueType	The base class of all value types. See §4.1.1.
System.Enum	        The base class of all enum types. See §14.
System.Array	    The base class of all array types. See §12.
System.Delegate	    The base class of all delegate types. See §15.
System.Exception	The base class of all exception types. See §16.

boxing
    int i = 1;
    object o = i;

unboxing
    object o = 123;
    int i = (int)o;














 */


namespace nndd
{
    class A
    {
        public static int x;
        int y;
        void F(int[] v, int a, ref int b, out int c)
        {
            int i = 1;
            c = a + b++;
        }
    }
    //  x is a static variable
    //  y is an instance variable
    //  v[0] is an array element
    //  a is a value parameter
    //  b is a reference parameter
    //  c is an output parameter
    //  i is a local variable.

}
