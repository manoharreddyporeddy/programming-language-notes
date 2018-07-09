using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace expressions
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 1;
            bool b = false;
            
            // arithmatic expression
            b= ((x < 10) && (x > 5)) || ((x > 20) && (x < 25));
            System.Convert.ToInt32("35");

            int i = 5;
            string s = "Hello World";

            int num = 5;
            System.Console.WriteLine(num); // Output: 5

            num = 6;
            System.Console.WriteLine(num); // Output: 6    

            // invocation expression.
            DoWork();
        }

        private static void DoWork()
        {
            throw new NotImplementedException();
        }

        public void a()
        {
            /*
                Query expressions
                Lambda expressions
                Expression trees
                Expression body definitions
                https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expressions

            */
        }
    }
}
