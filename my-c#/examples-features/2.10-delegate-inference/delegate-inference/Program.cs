using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ns1
{
    delegate void Del1();

    class Program
    {
        public void Func1()
        {
        }

        static void Main(string[] args)
        {
            {
                var p1 = new Program();
                Del1 del1 = new Del1(p1.Func1);
                del1();
            }

            {
                var p1 = new Program();
                Del1 del = p1.Func1;
                //      new Del1 is not required - it will infer by itself
                //      delegate inference (pass the method name, the delegate type would be inferred)
                del();

                // var del2 = p1.Func1; 
                // Del1 is not mentioned on left side, no inference
            }
        }
    }
}
