using System;

namespace nullable_types
{
    class Program
    {
        static void Main(string[] args)
        {
            // nullable type
            int? n = null;

            try
            {
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
                Console.WriteLine(n);
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
                Console.WriteLine("n value does not exist");
            }




            // GetValueOrDefault => value, if value exists,   else   default value like 0
            int n3;

            n = null;
            n3 = n.GetValueOrDefault();
            Console.WriteLine("n3 = {0}", n3);

            n = 10;
            n3 = n.GetValueOrDefault();
            Console.WriteLine("n3 = {0}", n3);
        }
    }
}
