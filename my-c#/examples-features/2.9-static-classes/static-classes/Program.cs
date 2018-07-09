using System;

namespace static_classes
{
    // static class
    static class SCls1
    {
        // can contain only static members
        public static bool Func1(string str1)
        {
            Console.WriteLine(str1);
            return true;
        }

        // Cannot contain Instance Constructors.
        //      SCls1() { }
    }

    // Is sealed, below derivated class is not possible
    //          class Derived : SCls1  {     }

    class Program
    {
        static void Main(string[] args)
        {
            SCls1.Func1("hello");

            // Cannot be instantiated.
            //      SCls1 p = new SCls1();
        }
    }
}
