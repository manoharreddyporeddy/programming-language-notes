using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace local_functions
{
    class Program
    {
        private void Pri1() /// private is NOT local
        {

        }

        public void F1(int p)
        {
            Console.WriteLine("in F1");

            // local variable
            int x = p;

            // local function
            //      for encapsulation
            //      can be defined in another scope:
            //          inside function, 
            //          inside constructor function,
            //          inside a property (both getter and setter functions).
            //      compiled to a private method
            //      however can't be accessed by outside of the scope it is defined
            void L1__inside__F1(int n)  // ******* FUNCTION INSIDE A FUNCTION = LOCAL FUNCTION
            {
                int n1 = n;

                int x2 = x;     // can access enclosing block
                int x3 = p;     // can access enclosing block

                Console.WriteLine("in L1__inside__F1");
            }

            // call local function
            L1__inside__F1(5);
        }

        static void Main(string[] args)
        {
            var o = new Program();

            o.F1(1);
        }
    }
}
