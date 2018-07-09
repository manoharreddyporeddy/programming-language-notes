using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace delegate_inference
{
    delegate void MyDel1(string msg);

    class Program
    {
        public static void Func1(string str1)
        {
            Console.WriteLine(str1);
        }

        static void Main(string[] args)
        {
            {
                MyDel1 del = new MyDel1(Func1);
                del("Hello1");
            }

            {
                MyDel1 del = Func1;  // delegate inference (pass the method name, the delegate type would be inferred)
                del("Hello2");
            }
        }
    }
}
