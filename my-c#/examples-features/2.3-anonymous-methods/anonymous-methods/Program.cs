using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace anonymous_methods
{
    class Program
    {
        delegate void MyDel1();

        static void Main(string[] args)
        {
            MyDel1 twice = delegate () { Console.WriteLine("called MyFunc1: "); };

            //
            //      instead of
            //
            //  static void MyFunc1() { Console.Write("called MyFunc1: "); }
            //  MyDel1 twice = new MyDel1(MyFunc1);

            twice();
        }
    }
}
