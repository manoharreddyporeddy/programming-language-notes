using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace expression_tree
{
    class Program
    {
        static void Main(string[] args)
        {
            // raw executable "code"

            // delegate type   'Func'   is from   System namespace:           public delegate TResult Func<T1, T2, TResult>(T1 arg1, T2 arg2);
            Func<int, int, long> sum1 = (a, b) => a + b; // sum function   as a   lambda expression
            // sum1 points at raw executable code

            long res = sum1(3, 5);           // call it
            Console.WriteLine($"res is {res}");


            // Expression trees
            //  are not executable code, they are a form of data structure
            //
            //  is code converted into "data"
            //
            //  they take an executable expression and capture its parts in a tree-like data structure.
            Expression<Func<int, int, int>> expression = (a, b) => a + b;
            Console.WriteLine(
                "Param 1: {0}, Param 2: {1}",
                expression.Parameters[0], expression.Parameters[1]
                );

            BinaryExpression body = (BinaryExpression)expression.Body;
            Console.WriteLine(expression.Body);

            ParameterExpression bodyLeft = (ParameterExpression)body.Left;
            ParameterExpression bodyRight = (ParameterExpression)body.Right;

            Console.WriteLine(
                " The Body.Left  part of the expression: {0}{4}" +
                " The Body.NodeType:                     {1}{4}" +
                " The Body.Right part:                   {2}{4}" +
                " The Body.Type:                         {3}{4}",
              bodyLeft.Name,
              body.NodeType,
              bodyRight.Name,
              body.Type,
              Environment.NewLine);



            //  data   converted back into   code
            int result = expression.Compile()(3, 5);
            Console.WriteLine(result);



            // TBD
            // Convert a LINQ to SQL Query Expression into an Expression Tree
            // https://blogs.msdn.microsoft.com/charlie/2008/01/31/expression-tree-basics/



        }
    }
}
