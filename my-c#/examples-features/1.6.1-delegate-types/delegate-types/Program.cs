using System;

namespace delegate_types
{
    class Program
    {
        // actual functions
        //                 <return type> <function-name> <parameter list>
        static void Double(ref int x) { x = 2 * x; }
        static void Triple(ref int x) { x = 3 * x; }

        // Declaring Delegates
        //      delegate   <return type> <delegate-name> <parameter list>
        delegate void TimesX(ref int x);

        static void Main(string[] args)
        {
            // Instantiating Delegates
            TimesX double1 = new TimesX(Double);
            TimesX triple1 = new TimesX(Triple);

            int x;
            x = 2; double1(ref x); Console.WriteLine(x);   // called Double 
            x = 6; triple1(ref x); Console.WriteLine(x);   // called Triple

            // Multicasting of a Delegate
            x = 2;
            TimesX sixTimes1 = new TimesX(Double);
            sixTimes1 += Triple;
            sixTimes1(ref x); Console.WriteLine(x);    // called Double: called Triple

            // sixTimes1 can be something like
            //  sendEmail, and
            //  sendSms
        }
    }
}
