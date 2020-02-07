using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ns1
{
    class Program
    {
        void Func1() { Console.Write("called Func1: "); }

        delegate void MyDel1();

        static void Main(string[] args)
        {
            {
                Program p = new Program();
                MyDel1 del1 = new MyDel1(p.Func1);
                del1();
            }

            {
                MyDel1 del1 = delegate () { Console.Write("called Func1: "); };
                del1();
            }

            {
                //(() { Console.Write("called Func1: "); })  ();
            }

        }
    }
}
