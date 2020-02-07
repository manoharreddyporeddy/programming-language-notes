using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ns1
{
    // Partial Class
    public partial class Cls1
    {
        public void Func1()
        {
        }
    }

    // Partial Class
    public partial class Cls1
    {
        public void Func2()
        {
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Partial Class usage
            Cls1 o1 = new Cls1();
            o1.Func1();
            o1.Func2();

            // can be different files?
        }
    }
}
