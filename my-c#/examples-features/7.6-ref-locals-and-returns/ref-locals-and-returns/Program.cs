using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ref_locals_and_returns
{
    class MatrixSearch
    {
        // returns a tuple, not good for public api - need to access from matrix again using tuple
        public static (int i, int j) Find(int[,] matrix, Func<int, bool> predicate)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
                for (int j = 0; j < matrix.GetLength(1); j++)
                    if (predicate(matrix[i, j]))
                        return (i, j);
            return (-1, -1); // Not found
        }

        // ref return declaration
        public static ref int Find3(int[,] matrix, Func<int, bool> predicate)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
                for (int j = 0; j < matrix.GetLength(1); j++)
                    if (predicate(matrix[i, j]))
                        return ref matrix[i, j]; // ref return
            throw new InvalidOperationException("Not found");
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            {
                int[,] matrix = { { 1, 42 }, { 2, 4 } };

                var indices = MatrixSearch.Find(matrix, (val) => val == 42);
                Console.WriteLine(indices);
                matrix[indices.i, indices.j] = 24;

                Console.WriteLine();
            }

            {
                int[,] matrix = { { 1, 42 }, { 2, 4 } };

                // local
                var valItem = MatrixSearch.Find3(matrix, (val) => val == 42);
                Console.WriteLine(valItem);
                valItem = 24;
                Console.WriteLine(matrix[0, 1]);    // print 42

                Console.WriteLine();
            }

            {
                int[,] matrix = { { 1, 42 }, { 2, 4 } };

                // ref local
                ref var item = ref MatrixSearch.Find3(matrix, (val) => val == 42);      //////////////////// ******** return item as ref
                Console.WriteLine(item);
                item = 24;
                Console.WriteLine(matrix[0, 1]);    // prints 24

                Console.WriteLine();
            }
        }
    }
}
