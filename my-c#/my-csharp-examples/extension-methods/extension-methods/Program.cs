using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyExtensionNs1;

// normal namespace
namespace MyExtensionNs1
{
    // static class
    public static class MyExtensionCls1
    {
        // static method

        //
        // extension method // first parameter is "this type1" ex:     ... func1(this string str, ...)
        //      method will be called by a string instance using the dot operator
        //      when source code does not exist to exend, we can write extension methods

        // extension method for "string", only if original WordCount is not of same signation in "string"
        public static int WordCount(this string str)
        {
            string[] userString =
                str.Split(
                    new char[] { ' ', ',', '.', '?', '-', ':', ';' },
                    StringSplitOptions.RemoveEmptyEntries
                    );
            int wordCount = userString.Length;
            return wordCount;
        }
        // ...
    }
}

namespace extension_methods
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(
                "Total number of words is :" +
                "Hello , world".WordCount()       //calls MyExtensionCls1 Method WordCount
            );
        }
    }
}
