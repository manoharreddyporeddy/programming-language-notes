using System;

namespace structs
{
    // value type
    public struct StPoint
    {
        public int x;
        public int y;

        public static int count = 0;

        // public StPoint() { }        // Error CS0568  Structs cannot contain explicit parameterless constructors

        // argument constructor
        public StPoint(int x1, int y1)
        {
            x = x1;
            y = y1;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            StPoint p0;
            StPoint p1 = new StPoint();
            StPoint p2 = new StPoint(10, 10);

            // Console.WriteLine($"p0.x is {p0.x}  p0.y is {p0.y}");
            Console.WriteLine($"p1.x is {p1.x}  p1.y is {p1.y}");
            Console.WriteLine($"p2.x is {p2.x}  p2.y is {p2.y}");

            Console.WriteLine(p2.ToString());
        }
    }
}
