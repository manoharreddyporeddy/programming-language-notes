using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace caller_info
{
    class Program
    {


        // These three attributes can be useful when you may want to trace all the calls to specific function. 
        public static void Func1(
            int n,
            [CallerMemberName] string callerMemberName = null,
            [CallerFilePath] string callerFilePath = null,
            [CallerLineNumber] int callerLine = -1
            )
        {
            Console.WriteLine("Caller Member Name: {0}", callerMemberName);
            Console.WriteLine("Caller File Path: {0}", callerFilePath);
            Console.WriteLine("Caller Line Number: {0}", callerLine);
        }

        static void Main(string[] args)
        {
            Func1(1);
        }

    }
}
