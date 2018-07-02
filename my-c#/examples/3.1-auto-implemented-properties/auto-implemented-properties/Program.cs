using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace auto_implemented_properties
{
    class Program
    {
        //  compiler creates a
        //          private,
        //          anonymous backing field that
        //              can only be accessed through the property's get and set accessors.

        //            auto-implemented property
        public string FirstName { get; set; }

        // initialize auto-implemented property
        public string FirstName2 { get; set; } = "Jane";

        // auto-implemented properties
        // read-only properties.
        public string Name { get; }
        public string Address { get; private set; }

        // public constructor.   
        public Program(string contactName, string contactAddress)
        {
            Name = contactName;
            Address = contactAddress;
        }

        static void Main(string[] args)
        {
            var p = new Program("contact1", "address1");
            Console.WriteLine("done");
        }
    }
}
