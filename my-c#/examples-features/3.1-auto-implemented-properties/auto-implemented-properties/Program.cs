using System;

namespace auto_implemented_properties
{
    class Program
    {
        //  compiler creates a
        //          private,
        //          anonymous backing field that    can only be accessed through the property's get and set accessors.

        // auto-implemented property
        public string FirstName { get; set; }

        // auto-implemented property - initialization
        public string FirstName2 { get; set; } = "Jane";

        // auto-implemented property - read-only properties.
        public string Name { get; }
        public string Address { get; private set; }

        // public constructor.   
        public Program(string Name1, string Address1)
        {
            Name = Name1;
            Address = Address1;
        }

        static void Main(string[] args)
        {
            var p = new Program("contact1", "address1");
            Console.WriteLine($"{p.FirstName}");
            Console.WriteLine($"{p.FirstName2}");
            Console.WriteLine($"{p.Name}");
            Console.WriteLine($"{p.Address}");
        }
    }
}
