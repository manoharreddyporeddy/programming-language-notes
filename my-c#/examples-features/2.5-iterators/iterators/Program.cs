using System;

namespace iterators
{
    class Program
    {
        public static System.Collections.IEnumerable GetOddNumbersTillTenList()
        {
            // note 'yield return', does not return function fully
            yield return 1;
            yield return 3;
            yield return 5;
            yield return 7;
            yield return 9;
            yield return 11;
        }

        public static System.Collections.IEnumerable GetEvenNumbersTillTenList()
        {
            for (int i = 0; i <= 10; i += 2)
            {
                // note 'yield return', does not return function fully
                yield return i;
            }
        }

        static void Main(string[] args)
        {

            foreach (int n in GetOddNumbersTillTenList())
            {
                Console.Write($"{n} ");
            }
            Console.WriteLine();
            // Output:  1 3 5 7 9 11


            foreach (int n in GetEvenNumbersTillTenList())
            {
                Console.Write($"{n} ");
                // Console.Write(n.ToString() + " ");
            }
            Console.WriteLine();
            // Output:  0 2 4 6 8 10

        }
    }
}
