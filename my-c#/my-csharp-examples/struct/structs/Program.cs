using System;

namespace structs
{
    public struct CoOrds
    {
        public int x;
        public int y;
        public static int count = 0;

        // public CoOrds() { }        // Error CS0568  Structs cannot contain explicit parameterless constructors

        public CoOrds(int p1, int p2)
        {
            x = p1;
            y = p2;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            CoOrds coords0;
            CoOrds coords1 = new CoOrds();
            CoOrds coords2 = new CoOrds(10, 10);

            // Console.WriteLine($"coords0.x is {coords0.x}  coords0.y is {coords0.y}");
            Console.WriteLine($"coords1.x is {coords1.x}  coords1.y is {coords1.y}");
            Console.WriteLine($"coords2.x is {coords2.x}  coords2.y is {coords2.y}");
        }
    }
}
