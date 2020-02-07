using System;

namespace ns1
{
    class Program
    {
        // method group   because
        //      delegates can be multi cast (can act on  group of methods)

        // simplifies the syntax
        //      that assigns a method to a delegate.
        //      This is called Method Group Conversion.

        // simply assign the name of the method to a delegate
        //      without using a new operator or
        //      explicitly invoking the delegate's constructor.

        void Func11() { Console.WriteLine("Func11"); }
        void Func12() { Console.WriteLine("Func12"); }

        delegate void Del1();

        public void use1()
        {
            {
                Del1 del1 = new Del1(Func11);   // new operator
                del1();                         // call the method
            }

            Console.WriteLine();

            {
                Del1 del1 = Func11;     // with method group conversion, no need of new operator
                del1 += Func12;         // with method group conversion, no need of new operator
                del1();                 // call the method
            }

        }

        static void Main(string[] args)
        {
            Program a = new Program();
            a.use1();
        }
    }
}
