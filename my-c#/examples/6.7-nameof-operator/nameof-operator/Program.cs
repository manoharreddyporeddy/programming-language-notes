using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nameof_operator
{
    public class MyClass
    {
        public string MyProperty { get; set; }
        public void MyFunc1() { }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //
            Console.WriteLine(nameof(nameof_operator));         // nameof_operator
            //
            Console.WriteLine(nameof(MyClass));                 // MyClass
            //
            Console.WriteLine(nameof(MyClass.MyProperty));      // MyProperty
            Console.WriteLine(nameof(MyClass.MyFunc1));         // MyFunc1
        }
    }
}
