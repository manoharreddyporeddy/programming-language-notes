using System;

namespace ns1
{
    // static class
    static class Cls1
    {
        // can contain only static members

        static int i = 0;

        static Cls1()
        {
        }

        public static void Func1()
        {
        }

        // Cannot contain Instance Constructors.

        //  int n2;

        //  Cls1() {
        //  }

        //  public void Func2()
        //  {
        //  }

    }

    // static class is sealed, so below derivated class is not possible
    //   class Derived : Cls1  { }

    class Program
    {
        static void Main(string[] args)
        {
            Cls1.Func1();

            // Cannot be instantiated.
            // Cls1 p = new Cls1();
        }
    }
}
