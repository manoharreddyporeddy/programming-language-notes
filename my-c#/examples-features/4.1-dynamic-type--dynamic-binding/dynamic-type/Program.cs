using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ns1
{
    class Program
    {
        static void Main(string[] args)
        {
            object o1 = 1;
            var v1 = 1; // compile time?
            dynamic dyn1 = 1; // runtime

            // Rest the mouse pointer over dyn1 and o1 to see their types at compile time.
            System.Console.WriteLine(o1.GetType());    // System.Int32
            System.Console.WriteLine(dyn1.GetType());    // System.Int32


            //o1 = o1 + 3;       // Error CS0019  Operator '+' cannot be applied to operands of type 'object' and 'int'
            o1 = (int)o1 + 1;  // OK
            v1 = v1 + 1;
            dyn1 = dyn1 + 1;          // OK

            System.Console.WriteLine(o1);   // 2
            System.Console.WriteLine(dyn1); // 2
        }
    }
}
