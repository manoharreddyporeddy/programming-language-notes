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
        static void NamedArgsMethod1(string sellerName, int orderNum, string productName)
        {
            if (string.IsNullOrWhiteSpace(sellerName))
            {
                throw new ArgumentException(message: "Seller name cannot be null or empty.", paramName: nameof(sellerName));
            }

            Console.WriteLine($"Seller: {sellerName}, Order #: {orderNum}, Product: {productName}");
        }

        // optional arguments
        static void OptionalArgsMethod1(
            int required, string optionalstr = "default string", int optionalint = 10)
        {
            Console.WriteLine("{0}, {1}, and {2}.", required, optionalstr, optionalint);
        }

        static void Main(string[] args)
        {


            // named arguments

            // The method can be called in the normal way, by using positional arguments.
            NamedArgsMethod1("Gift Shop", 31, "Red Mug");

            // Named arguments can be supplied for the parameters in any order.
            NamedArgsMethod1(orderNum: 31, productName: "Red Mug", sellerName: "Gift Shop");
            NamedArgsMethod1(productName: "Red Mug", sellerName: "Gift Shop", orderNum: 31);

            // Named arguments mixed with positional arguments are valid
            // as long as they are used in their correct position.
            NamedArgsMethod1("Gift Shop", 31, productName: "Red Mug");
            // NamedArgsMethod1(sellerName: "Gift Shop", 31, productName: "Red Mug");    // C# 7.2 onwards
            // NamedArgsMethod1("Gift Shop", orderNum: 31, "Red Mug");                   // C# 7.2 onwards

            // However, mixed arguments are invalid if used out-of-order.
            // The following statements will cause a compiler error.
            // NamedArgsMethod1(productName: "Red Mug", 31, "Gift Shop");
            // NamedArgsMethod1(31, sellerName: "Gift Shop", "Red Mug");
            // NamedArgsMethod1(31, "Red Mug", sellerName: "Gift Shop");




            // optional arguments

            OptionalArgsMethod1(1, "One", 1);
            OptionalArgsMethod1(2, "Two");
            OptionalArgsMethod1(3);
        }


    }
}
