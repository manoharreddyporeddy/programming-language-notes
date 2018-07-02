using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace anonymous_methods
{
    class Program
    {
        delegate int NumberChangerDelegate(int n);

        static void Main(string[] args)
        {
            NumberChangerDelegate twice = delegate (int n) { Console.Write("called GetTwice: "); return 2 * n; };
            //
            //      instead of
            //
            // static int GetTwice(int q) { Console.Write("called GetTwice: "); return 2 * q; }
            // NumberChangerDelegate twice = new NumberChangerDelegate(GetTwice);

            Console.WriteLine(twice(2));    // called GetTwice: 4
        }
    }
}
