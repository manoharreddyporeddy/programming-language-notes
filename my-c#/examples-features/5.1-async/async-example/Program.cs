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
            string s = await httpc.GetStringAsync("https://www.google.com/search?q=github");     // controls returns temporarily
            Console.WriteLine("3	after  await\n");

            return s;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("1	before Func1 call");
            var ts = Func1();       // asyncronous
            //var ts2 = Func1();       // asyncronous
            //var ts3 = Func1();       // asyncronous
            Console.WriteLine("4	after  Func1 call\n");

            Console.WriteLine("5	before a.Result");
            var s = ts.Result;       // syncronous - waits till for async function to return
            //var s2 = ts.Result;       // syncronous - waits till for async function to return
            //var s3 = ts.Result;       // syncronous - waits till for async function to return
            Console.WriteLine("6	after  a.Result\n");
            Console.WriteLine(s);

            // uncomment and see
            // Console.WriteLine(b);
        }
    }
}
