using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace index_initializers
{
    class Program
    {
        // collection initializers 
        private static List<string> messages = new List<string> {
                "Page not Found",
                "Page moved, but left a forwarding address.",
                "The web server can't come out to play today."
            };

        // Index Initializers
        private static Dictionary<int, string> webErrors = new Dictionary<int, string>
        {
            [404] = "Page not Found",
            [302] = "Page moved, but left a forwarding address.",
            [500] = "The web server can't come out to play today."
        };

        static void Main(string[] args)
        {


            // collection initializers
            /*
            Page not Found
            Page moved, but left a forwarding address.
            The web server can't come out to play today.
            */
            foreach (var msg in messages)
            {
                Console.WriteLine(msg);
            }
            Console.WriteLine();



            // Index Initializers
            /*
            [404, Page not Found]
            [302, Page moved, but left a forwarding address.]
            [500, The web server can't come out to play today.]
            */
            foreach (var err in webErrors)
            {
                Console.WriteLine(err);
            }
            Console.WriteLine();



            // collection initializers 
            /*
                404     Page not Found
                302     Page moved, but left a forwarding address.
                500     The web server can't come out to play today.
             */
            foreach (var err in webErrors)
            {
                Console.WriteLine("{0}\t{1}", err.Key.ToString(), err.Value.ToString());
            }
            Console.WriteLine();


            // other
            Dictionary<int, string> dict = new Dictionary<int, string>
                                                            {
                                                                {1,"One"},
                                                                {2, "Two"},
                                                                {3,"Three"}
                                                            };
            /*
                Key: 1, Value: One
                Key: 2, Value: Two
                Key: 3, Value: Three
            */
            foreach (KeyValuePair<int, string> item in dict)
            {
                Console.WriteLine("Key: {0}, Value: {1}", item.Key, item.Value);
            }
        }
    }
}
