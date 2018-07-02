using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace delegate_types
{
    class Program
    {
        // Declaring Delegates
        //      delegate <return type> <delegate-name> <parameter list>
        delegate int NumberChangerDelegate(int n);

        // actual functions
        static int GetTwice(int q) { Console.Write("called GetTwice: ");  return 2 * q; }
        static int GetThrice(int q) { Console.Write("called GetThrice: ");  return 3 * q; }

        static void Main(string[] args)
        {
            // Instantiating Delegates
            NumberChangerDelegate twice = new NumberChangerDelegate(GetTwice);
            NumberChangerDelegate thrice = new NumberChangerDelegate(GetThrice);
            Console.WriteLine(twice(2));    // called GetTwice: 4
            Console.WriteLine(thrice(2));   // called GetThrice: 6


            // Multicasting of a Delegate
            NumberChangerDelegate twiceAndThrice = new NumberChangerDelegate(GetTwice);
            twiceAndThrice += GetThrice;
            Console.WriteLine(twiceAndThrice(2));    // called GetTwice: called GetThrice: 6
        }
    }
}
