using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace delegate_inference
{
    delegate void MyDelegate(string msg);

    class Program
    {
        public static void Greetings(string greet)
        {
            Console.WriteLine(greet);
        }

        static void Main(string[] args)
        {
            {
                MyDelegate del = new MyDelegate(Greetings);
                del("hello world");
            }

            {
                MyDelegate del = Greetings;  // delegate inference - pass the method name and the delegate type would be inferred
                del("hello world");
            }
        }
    }
}
