using System;

namespace static_classes
{
    // static class
    static class StCls1
    {
        // can contain only static members
        public static bool Func1(string str1)
        {
            Console.WriteLine(str1);
            return true;
        }

        // Cannot contain Instance Constructors.
        /* StCls1() {       }*/
    }

    // Is sealed
    //class Derived : StCls1  {     }

    class Program
    {
        static void Main(string[] args)
        {
            StCls1.Func1("hello world");

            // Cannot be instantiated.
            //      StCls1 p = new StCls1();
        }
    }
}
