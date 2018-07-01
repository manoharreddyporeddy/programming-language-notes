using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dynamic_type
{
    class Program
    {
        static void Main(string[] args)
        {
            dynamic dyn = 1;
            object obj = 1;


            // Rest the mouse pointer over dyn and obj to see their types at compile time.
            System.Console.WriteLine(dyn.GetType());    // System.Int32
            System.Console.WriteLine(obj.GetType());    // System.Int32


            dyn = dyn + 3;          // OK
            // obj = obj + 3;       // Error CS0019  Operator '+' cannot be applied to operands of type 'object' and 'int'
            // obj = (int)obj + 3;  // OK

            System.Console.WriteLine(dyn );    // 4
            System.Console.WriteLine(obj );    // 1
        }
    }
}
