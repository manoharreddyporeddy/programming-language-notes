using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace async_example
{
    class Program
    {
        static async Task<string> MyAsyncTaskFunction()
        {
            HttpClient httpc = new HttpClient();

            Console.WriteLine("2 before await");
            string a = await httpc.GetStringAsync("http://www.google.com"); ;
            Console.WriteLine("3 after  await\n");

            // Console.WriteLine(a);

            return a;
        }
   
        static void Main(string[] args)
        {
            Console.WriteLine("1 before MyAsyncTaskFunction call");
            var a = MyAsyncTaskFunction();
            Console.WriteLine("4 after  MyAsyncTaskFunction call\n");

            Console.WriteLine("5 before a.Result");
            var b = a.Result;       // this line is important - waits till for async function to return
            Console.WriteLine("6 after  a.Result\n");

            // Console.WriteLine(b);
        }
    }
}
