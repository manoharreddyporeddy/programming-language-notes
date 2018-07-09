using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace partial_types
{
    // Partial Class
    public partial class MyCls1
    {
        public void Func1()
        {
        }
    }

    // Partial Class
    public partial class MyCls1
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
            MyCls1 o1 = new MyCls1();
            o1.Func1();
            o1.Func2();

            // can be different files?
        }
    }
}
