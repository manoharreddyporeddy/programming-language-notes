using System;
using System.Collections.Generic;

// TBD: simpler example needed

namespace lambda_expressions
{

    class Program
    {

        // simple function
        long Sum(int a, int b)
        {
            return a + b;
        }

        static void Main(string[] args)
        {


            // simple example
            Console.WriteLine("simple example");
            long res1 = (new Program()).Sum(3, 5);           // call it


            // delegate type   'Func'   is from   System namespace:           public delegate TResult Func<T1, T2, TResult>(T1 arg1, T2 arg2);
            // sum function   as a   lambda expression
            Func<int, int, long> Sum2 = (a, b) => a + b;
            // Sum2 points at raw executable code

            long res2 = Sum2(3, 5);           // call it
            Console.WriteLine($"res is {res2}");
            Console.WriteLine();





            // elaboarte example

            Console.WriteLine("elaboarte example");
            List<int> myList = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };


            // NO lambda function
            Console.WriteLine("NO lambda function");

            Console.Write("List without 6: ");
            var myNewList = ns1.FilterCls.FilterUsingValue(myList, 6);  //Get me a list without the sixes.
            nsPrint.PrintCls.PrintList(myNewList);



            // lambda function - passed to another function
            Console.WriteLine("lambda function");

            //      x => x == 6    is a lambda function that takes x, and returns true/false depending on (x == 6)
            Console.Write("List without 6: ");
            myNewList = ns2.FilterCls.FilterUsingCriteria(myList, x => x == 6);  //Get me a list without the sixes.
            nsPrint.PrintCls.PrintList(myNewList);

            Console.Write("List without 6 or 7: ");
            myNewList = ns2.FilterCls.FilterUsingCriteria(myList, x => x == 6 || x == 7); //Get me a list without six or seven.
            nsPrint.PrintCls.PrintList(myNewList);

            Console.Write("List with no elements between 6 & 8 inclusive: ");
            myNewList = ns2.FilterCls.FilterUsingCriteria(myList, x => x >= 6 && x <= 8); //Get me a list with no myList between 7 and 11.
            nsPrint.PrintCls.PrintList(myNewList);

        }
    }


    namespace nsPrint
    {
        class PrintCls
        {
            public static void PrintList(List<int> list)
            {
                foreach (var e in list)
                {
                    Console.Write($"{e} ");
                }
                Console.WriteLine();
            }
        }
    }

    namespace ns1
    {
        class FilterCls
        {
            public static List<int> FilterUsingValue(List<int> list, int target)
            {
                var myList = new List<int>();
                foreach (int myValue in list)
                {
                    if (myValue != target) // not target values
                    {
                        myList.Add(myValue);
                    }
                }
                return myList;
            }
        }
    }

    namespace ns2
    {
        class FilterCls
        {
            public static List<int> FilterUsingCriteria(List<int> list, Func<int, bool> filterCriteria)
            {
                var myList = new List<int>();
                foreach (int myValue in list)
                {
                    if (!filterCriteria(myValue))
                    {
                        myList.Add(myValue);
                    }
                }
                return myList;
            }
        }
    }

}
