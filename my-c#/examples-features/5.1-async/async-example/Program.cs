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
        static async Task<string> Func1()   // Async Function
        {
            HttpClient httpc = new HttpClient();

            Console.WriteLine("2	before await");
            // awaitable returns        Task <string>
            string a = await httpc.GetStringAsync("http://www.google.com");     // controls returns temporarily
            Console.WriteLine("3	after  await\n");

            return a;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("1	before Func1 call");
            var a = Func1();
            Console.WriteLine("4	after  Func1 call\n");

            Console.WriteLine("5	before a.Result");
            var b = a.Result;       // this line is important - waits till for async function to return
            Console.WriteLine("6	after  a.Result\n");

            // uncomment and see
            // Console.WriteLine(b);
        }
    }
}
