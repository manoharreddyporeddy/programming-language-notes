using System;

namespace method_group_conversions__delegates
{
    class Demo
    {
        // simplifies the syntax that assigns a method to a delegate.This is called Method Group Conversion .
        // simply assign the name of the method to a delegate  without using a new operator or explicitly invoking the delegate's constructor.
        delegate void del(string str);
        void Func1(string str) { }

        public void aaaa()
        {
            {
                del d = new del(Func1);         // new operator
                d("Hello this is an example");  // call the method
            }
            {
                del d = Func1;  // with method group conversion, no need of new operator
                d("Hello this is an example");  // call the method
            }
            Console.WriteLine("done");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Demo a = new Demo();
            a.aaaa();
        }
    }
}
