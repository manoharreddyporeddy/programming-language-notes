using System;

namespace ns1
{
    class Program
    {

        public System.Collections.IEnumerable GetList1()
        {
            // note 'yield return', does not return function fully

            // function returns immediately after next yeild has a value

            yield return 10; // if this http call, this function returns 1st value
            yield return 20; // if this http call, this function returns this value, on caller's next iteration
            yield return 30;
            yield return 40;
            yield return 50;
        }

        public System.Collections.IEnumerable GetList2()
        {
            for (int i = 0; i <= 20; i++)
            {
                // note 'yield return', does not return function fully
                yield return i;
            }
        }

        static void Main(string[] args)
        {
            var p1 = new Program();

            // odd numbers
            foreach (int n in p1.GetList1())
            {
                Console.Write($"{n} ");
            }
            Console.WriteLine();
            // Output:  1 3 5 7 9 11

            // even numbers
            foreach (int n in p1.GetList2())
            {
                Console.Write($"{n} ");
                // Console.Write(n.ToString() + " ");
            }
            Console.WriteLine();
            // Output:  0 2 4 6 8 10
        }
    }
}
