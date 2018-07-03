using System;

namespace nullable_types
{
    class Program
    {
        static void Main(string[] args)
        {
            // null => HasValue is false
            int? num = null;
            if (num.HasValue == false)
            {
                Console.WriteLine("num.HasValue is false, so num = null");

                // if num.HasValue is false,  accessing  num.Value  throws an InvalidOperationException
                int x;
                try
                {
                    x = num.Value;
                }
                catch (InvalidOperationException e)
                {
                    Console.WriteLine(e.Message);
                }
            }

            // GetValueOrDefault => value if exists, else default value like 0
            int y = num.GetValueOrDefault();
            Console.WriteLine("y = {0}", y);
        }
    }
}
