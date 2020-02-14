using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ref_locals_and_returns
{
    class MatrixSearch
    {
        // returns a tuple, not good for public api - need to access from A again using tuple
        public static (int i, int j) Find(float[,] A)
        {
            var someCondition = true;
            if (someCondition)
            {
                // return some   row, col
                return (1, 1);  // ex: return indexes so that A[1][1] = 54 can change
            }
            return (-1, -1); // Not found
        }

        // ref return declaration
        public static ref float Find2(float[,] A)
        {
            var someCondition = true;
            if (someCondition)
            {
                // return some   row, col
                return ref A[1, 1]; // ref return  (not value, but the A along with i&j)
                                    // ex: return A[i][j] as a ref return, so that A[i][j] = 54 can change
            }
            throw new InvalidOperationException("Not found");
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            {
                float[,] A = { { 1, 42 }, { 2, 4 } };

                var (i, j) = MatrixSearch.Find(A);
                //Console.WriteLine(i.ToString(), j.ToString());
                A[i, j] = 24;

                Console.WriteLine();
            }

            {
                float[,] A = { { 1, 42 }, { 2, 4 } };

                // local
                var itemValue = MatrixSearch.Find2(A);
                //Console.WriteLine(refItem);
                itemValue = 1111; // same as A[1,1]
                Console.WriteLine(A[1, 1]);    // print 42      (not 1111)

                Console.WriteLine();
            }

            {
                float[,] A = { { 1, 42 }, { 2, 4 } };

                // ref local
                ref var item = ref MatrixSearch.Find2(A);      //////////////////// ******** return item as ref
                Console.WriteLine(item);
                item = 1111; ///////////// changes the   array A    itself
                Console.WriteLine(A[0, 1]);    // prints 1111

                Console.WriteLine();
            }
        }
    }
}
