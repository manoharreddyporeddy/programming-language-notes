using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace partial_methods
{
    partial class Program
    {
        // partial method
        //      always returns void
        //
        //      This part can be in a separate file.
        //      Comment out this method and the program will still compile.
        static partial void OnSomethingHappened(String s)
        {
            Console.WriteLine($"Something happened: {s}");
        }
    }

    partial class Program
    {
        // partial method
        //      always returns void
        static partial void OnSomethingHappened(string s);

        static void Main(string[] args)
        {
            Program.OnSomethingHappened("error");
        }
    }
}
