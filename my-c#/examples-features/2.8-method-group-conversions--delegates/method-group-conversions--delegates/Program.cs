using System;

namespace method_group_conversions__delegates
{
    class Program
    {
        // method group   because   delegates can be multi cast (can act on  group of methods)

        // simplifies the syntax that assigns a method to a delegate. This is called Method Group Conversion.
        // simply assign the name of the method to a delegate  without using a new operator or explicitly invoking the delegate's constructor.

        void Func1(string str) { Console.WriteLine(str);  }

        delegate void DelFunc1(string str);

        public void use1()
        {
            {
                DelFunc1 del1 = new DelFunc1(Func1);        // new operator
                del1("Hello1");           // call the method
            }

            {
                DelFunc1 del1 = Func1;     // with method group conversion, no need of new operator
                del1("Hello2");           // call the method
            }

            Console.WriteLine("done");
        }

        static void Main(string[] args)
        {
            Program a = new Program();
            a.use1();
        }
    }
}
