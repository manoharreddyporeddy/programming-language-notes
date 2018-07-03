using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace local_functions
{
    class Program
    {
        static void func1(int p)
        {
            Console.WriteLine("in func1");

            // local variable
            int x = p;


            // local function
            //      for encapsulation
            //      can be defined in
            //          another scope,
            //          inside function, 
            //          constructor,
            //          inside a property (both getter and setter).
            //      compiled to a private method
            //      however can't be accessed by outside of the scope it is defined
            void localFunc1(int n)
            {
                int n1 = n;

                int x2 = x;     // can access enclosing block
                int x3 = p;     // can access enclosing block

                Console.WriteLine("in localFunc1");
            }

            // call local function
            localFunc1(5);
        }

        static void Main(string[] args)
        {
            func1(1);
        }
    }
}
