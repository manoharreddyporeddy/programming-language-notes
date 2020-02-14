using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exception_filters
{
    class MyException : Exception
    {
        public int Code = 0;
        public MyException(int Code)
        {
            this.Code = Code;
        }
    }
    class App
    {
        public static void Func1()
        {
            throw new MyException(42);
        }
    }
    // ----------------
    // ----------------

    class MyScenario1
    {
        public static void MyNoExceptionFilter()
        {
            try
            {
                App.Func1();
            }
            catch (MyException ex)
            {
                if (ex.Code == 42)
                    Console.WriteLine("ENTERED CATCH - Error 42 occurred - without exception filter (unwound the stack)");
                else
                    throw;
            }
        }

        public static void MyExceptionFilter()
        {
            try
            {
                App.Func1();
            }
            catch (MyException ex) when (ex.Code == 42)
            {
                Console.WriteLine("ENTERED CATCH - Error 42 occurred - with exception filter (unwound the stack)");
            }
        }
    }
    // ----------------
    // ----------------

    class MyScenario2
    {
        static bool Log(Exception ex, string message, params object[] args)
        {
            Console.WriteLine("WON'T ENTER CATCH - Error 42 occurred - with exception filter (NO unwound the stack) -- Log: {0} {1} {2}", ex.Message, message, args); // debug information
            return false;  /// return true so that   catch block is never entered
        }
        public static void MyExceptionFilter2()
        {
            try
            {
                App.Func1();
            }
            catch (Exception ex) when (Log(ex, "An error occurred."))
            // logging exceptions on the fly without actually catching them, hence without unwinding the stack
            {
                // this catch block will never be reached
                //          so, no unwind happens
                //          but, logs the debug information using Log()
            }
        }
    }
    // ----------------
    // ----------------

    class Program
    {
        static void Main(string[] args)
        {
            MyScenario1.MyNoExceptionFilter();
            MyScenario1.MyExceptionFilter();

            // NOTE:
            // When you enter a catch block, the stack is unwound:
            //      this means that the stack frames for the method calls “deeper” than the current method are dropped.
            //          This implies that all information about current execution state in those stack frames is lost,
            //              making it harder to identify the root cause of the exception.

            //
            //f1 (entered catch -- call stack will contain f3,f2,f1 - root cause details lost like line number in f5)
            //    f2
            //        f3 (entered catch -- call stack will contain  f5,f4,f3 - root cause details exist)   --- throw again here
            //            f4
            //                f5 (exception occurred - root cause in f5)
            //

            try
            {
                MyScenario2.MyExceptionFilter2();
            }
            catch (Exception e)
            {
                Console.WriteLine("MAIN CATCH - Finally caught exception in main(): ", e);
            }
        }
    }
}
