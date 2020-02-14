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
            int _count = 0;
            double _sum = 0.0;

            return Tuple.Create(_count, _sum);
        }

        // new way - with .NET 4.7.x (not 4.6.x)
        private static (int count, double sum) Func2()        // returns  tuple
        {
            int _count = 0;
            double _sum = 0.0;

            return (_count, _sum);
        }

        static void Func1Use()
        {
            // old way
            var tpl1 = Func1();
            var count1 = tpl1.Item1;
            var sum1 = tpl1.Item2;
            Console.WriteLine($"Count is {count1}, Sum is {sum1}");

            // new way
            var (count2, sum2) = Func1();
            Console.WriteLine($"Count is {count2}, Sum is {sum2}");
        }

        static void Func2Use()
        {
            // new way - no De-construct
            var t2 = Func2();
            Console.WriteLine($"Count is {t2.count}, Sum is {t2.sum}");

            // new way -- De-construct  (not construct-or)
            var (count2, sum2) = Func2();
            Console.WriteLine($"Count is {count2}, Sum is {sum2}");
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
            public void Deconstruct(out int x, out int y)           // **********************************************
            {
                x = X;
                y = Y;
            }
        }
        static void use()
        {
            var (x, y) = new Point(1, 2);
            Console.WriteLine($"Coordinates: ({x}, {y})");
        }



        static void Main(string[] args)
        {
            Func1Use();
            Func2Use();
            use();
        }

    }
}
