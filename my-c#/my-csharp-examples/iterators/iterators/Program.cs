using System;

namespace iterators
{
    class Program
    {
        public static System.Collections.IEnumerable oddNumbers()
        {
            yield return 1;
            yield return 3;
            yield return 5;
            yield return 7;
            yield return 9;
            yield return 11;
        }
        public static System.Collections.IEnumerable wholeNumbers()
        {
            for (int i = 0; i < 10; i++)
            {
                yield return i;
            }
        }

        static void Main(string[] args)
        {
            foreach (int number in oddNumbers())
            {
                Console.Write(number.ToString() + " ");
            }
            Console.WriteLine();
            // Output:  1 3 5 7 9 11


            foreach (int number in wholeNumbers())
            {
                Console.Write(number.ToString() + " ");
            }
            Console.WriteLine();
            // Output:  0 1 2 3 4 5 6 7 8 9
        }
    }
}
