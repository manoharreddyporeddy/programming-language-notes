using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tuple_and_deconstruct
{
    class Program
    {


        // Tuple

        // old way
        private static Tuple<int, double> Func1()        // returns  tuple  reference
        {
            int count = 0;
            double sum = 0.0;

            return Tuple.Create(count, sum);
        }
        static void Func1Use()
        {
            // old way
            var tpl1 = Func1();
            Console.WriteLine($"Count is {tpl1.Item1}, Sum is {tpl1.Item2}");

            // new way
            var (count1, sum1) = Func1();
            Console.WriteLine($"There are {count1} values and their sum is {sum1}");
        }



        // new way - with .NET 4.7.x (not 4.6.x)
        private static (int count, double sum) Func2()        // returns  tuple
        {
            int count = 0;
            double sum = 0.0;

            return (count, sum);
        }
        static void Func2Use()
        {
            var tpl2 = Func2();
            Console.WriteLine($"Count is {tpl2.count}, Sum is {tpl2.sum}");
        }



        // Deconstruct

        class Point
        {
            public int X { get; }
            public int Y { get; }

            public Point(int x, int y)
            {
                X = x;
                Y = y;
            }

            // Deconstruct method can also be an extension method
            public void Deconstruct(out int x, out int y)
            {
                x = X;
                y = Y;
            }
        }
        static void PointUse()
        {
            var (x, y) = new Point(1, 2);
            Console.WriteLine($"Coordinates: ({x}, {y})");
        }



        static void Main(string[] args)
        {
            Func1Use();
            Func2Use();
            PointUse();
        }

    }
}
