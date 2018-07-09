using System;

namespace delegate_types
{
    class Program
    {
        // actual functions
        //                 <return type> <function-name> <parameter list>
        static int GetTwice(ref int x) { Console.Write("called GetTwice of " + x + ": "); x = 2 * x; return x; }
        static int GetThrice(ref int x) { Console.Write("called GetThrice of " + x + ": "); x = 3 * x; return x; }

        // Declaring Delegates
        //      delegate   <return type> <delegate-name> <parameter list>
        delegate int DelGetTimesX(ref int n);

        static void Main(string[] args)
        {
            // Instantiating Delegates
            DelGetTimesX twice = new DelGetTimesX(GetTwice);
            DelGetTimesX thrice = new DelGetTimesX(GetThrice);

            int x;
            x = 1; Console.WriteLine(twice(ref x));    // called GetTwice: 4
            x = 1; Console.WriteLine(thrice(ref x));   // called GetThrice: 6

            // Multicasting of a Delegate
            x = 1;
            DelGetTimesX twiceAndThrice = new DelGetTimesX(GetTwice);
            twiceAndThrice += GetThrice;
            Console.WriteLine(twiceAndThrice(ref x));    // called GetTwice: called GetThrice: 6

            // twiceAndThrice can be something like sendemail, and sendsms
        }
    }
}
