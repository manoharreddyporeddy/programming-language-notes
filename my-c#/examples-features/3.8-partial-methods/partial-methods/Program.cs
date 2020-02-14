using System;

namespace partial_methods
{
    partial class Program
    {
        // partial method
        //      always returns void
        //
        //      This part can be in a separate file.
        //      Comment out this method and the program will still compile.
        //

        static partial void Method1(String s)
        {
            Console.WriteLine(s);
        }
    }

    partial class Program
    {
        // partial method
        //      always returns void
        static partial void Method1(string s);

        static void Main(string[] args)
        {
            Console.WriteLine("before");
            Program.Method1("ok");
            Console.WriteLine("after");
        }
    }
}
