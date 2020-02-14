using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace named_and_optional_arguments
{
    class Program
    {
        // named arguments
        static int Func1(string p1, int p2, string p3)
        {
            if (string.IsNullOrWhiteSpace(p1))
            {
                throw new ArgumentException(message: "Seller name cannot be null or empty.", paramName: nameof(p1));
            }

            Console.WriteLine($"Seller: {p1}, Order #: {p2}, Product: {p3}");

            return 0;
        }

        // optional arguments
        static int Func2(int pReq, string pOptStr = "default string", int pOptInt = 10)
        {
            Console.WriteLine("{0}, {1}, and {2}.", pReq, pOptStr, pOptInt);

            return 0;
        }

        static void Main(string[] args)
        {
            // named arguments

            // The method can be called in the normal way, by using positional arguments.
            Func1("Gift Shop", 31, "Red Mug");

            // Named arguments can be supplied for the parameters in any order.
            Func1(p2: 31, p3: "Red Mug", p1: "Gift Shop");



            // Named arguments mixed with positional arguments are valid    as long as they are used in their correct position.
            Func1("Gift Shop", p3: "Red Mug", p2: 31);

            Func1(p1: "Gift Shop", 31, p3: "Red Mug");    // C# 7.2 onwards
            Func1("Gift Shop", p2: 31, "Red Mug");   // C# 7.2 onwards

            // However, mixed arguments are invalid if used out-of-order.
            // The following statements will cause a compiler error.
            // Func1(p3: "Red Mug", 31, "Gift Shop");
            // Func1(31, p1: "Gift Shop", "Red Mug");
            // Func1(31, "Red Mug", p1: "Gift Shop");




            // optional arguments

            Func2(1, "One", 1);
            Func2(2, "Two");
            Func2(3);
        }
    }
}
