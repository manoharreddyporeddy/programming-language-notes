using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ns1
{
    public class MyClass1
    {
        public string MyProperty1 { get; set; }
        public void MyFunc1() { }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //
            Console.WriteLine(nameof(ns1));                      // ns1
            //
            Console.WriteLine(nameof(MyClass1));                 // MyClass1
            //
            Console.WriteLine(nameof(MyClass1.MyProperty1));     // MyProperty1
            Console.WriteLine(nameof(MyClass1.MyFunc1));         // MyFunc1
        }
    }
}
