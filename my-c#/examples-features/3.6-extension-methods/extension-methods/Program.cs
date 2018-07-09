using System;

// use the namespace
using MyExtensionNs1;

// normal namespace
namespace MyExtensionNs1
{
    // static class
    public static class MyExtensionCls1
    {
        // static method
        // extension method
        //   first parameter is "this type1" ex:     ... func1(this string str, ...)
        //      method will be called by a string instance using the dot operator
        //      when source code does not exist to exend, we can write extension methods

        // extension method for "string", only if original MyLength is not of same signation in "string"
        //  like extending with one more method for string datatype
        public static int MyLength(this string str)
        {
            return str.Length;
        }
    }
}

namespace extension_methods
{
    class Program
    {
        static void Main(string[] args)
        {
            string str1 = "hello world";
            Console.WriteLine(str1.MyLength()); // calls MyLength (from MyExtensionCls1 automatically)
        }
    }
}
