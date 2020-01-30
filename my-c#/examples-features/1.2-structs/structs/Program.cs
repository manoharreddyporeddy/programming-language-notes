using System;

namespace Structs
{
    // value type
    public struct Point
    {

        // feilds
        public int x; //
        public int y;

        // static field
        public static int count = 0;

        // default constructor
        // Error CS0568  Structs cannot contain explicit parameterless constructors
        // public Point() { }

        // argument constructor
        public Point(int x1, int y1)
        {
            x = x1;
            y = y1;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Point p0; // is this working?
            Point p1 = new Point(); // is this working?

            Point p2 = new Point(10, 20);

            // Console.WriteLine($"p0.x is {p0.x}  p0.y is {p0.y}");
            Console.WriteLine($"p1.x is {p1.x}  p1.y is {p1.y}");
            Console.WriteLine($"p2.x is {p2.x}  p2.y is {p2.y}");

            Console.WriteLine(p2.ToString());
        }
    }
}