using System;

namespace ns1
{
    class Program
    {
        static void Main(string[] args)
        {
            // int type -- cannot take null
            int m;

            // nullable type
            int? n; // ----------- datatype? --- useful in db select for nulls?

            try
            {
                n = null;
                // accessing  n.Value  throws an InvalidOperationException, if n is null
                int n2 = n.Value;
            }
            catch (InvalidOperationException e)
            {
                Console.WriteLine("Exception occured: " + e.Message);
            }


            // if n is null => n.HasValue is false
            n = 1;
            if (n.HasValue == true)
            {
                Console.WriteLine(n); // ------ 1 is printed
            }
            else
            {
                Console.WriteLine("n value does not exist");
            }


            n = null;
            if (n.HasValue == true)
            {
                Console.WriteLine(n);
            }
            else
            {
                // ------ this is printed
                Console.WriteLine("n value does not exist");
            }


            // GetValueOrDefault => value, if value exists,   else   default value like 0
            int n3;

            n = 10;
            n3 = n.GetValueOrDefault();
            Console.WriteLine("n3 = {0}", n3); // ------------ 10

            n = null;
            n3 = n.GetValueOrDefault();
            Console.WriteLine("n3 = {0}", n3); // ------------ 0 (int default value)

        }
    }
}
