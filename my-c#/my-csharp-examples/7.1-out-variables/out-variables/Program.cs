using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace out_variables
{
    class Program
    {
        static void GetName(out string name)
        {
            name = "some name";
        }

        static void Main(string[] args)
        {
            // old way
            string name;
            GetName(out name);

            // new way - name2 is a out variable
            GetName(out string name2);

            Console.WriteLine($"name: {name}");
            Console.WriteLine($"name2: {name2}");
        }
    }
}
