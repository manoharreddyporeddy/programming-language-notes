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
        static void Main(string[] args)
        {
            Func1(1);
        }

        // These three attributes can be useful when you may want to trace all the calls to specific function. 
        public static void Func1(
            int a,
            [CallerMemberName] string callerName = null,
            [CallerFilePath] string callerFilePath = null,
            [CallerLineNumber] int callerLine = -1
            )
        {
            Console.WriteLine("Caller Name: {0}", callerName);
            Console.WriteLine("Caller FilePath: {0}", callerFilePath);
            Console.WriteLine("Caller Line number: {0}", callerLine);
        }

    }
}
