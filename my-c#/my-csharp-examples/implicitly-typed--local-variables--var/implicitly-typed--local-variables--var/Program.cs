using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace implicitly_typed__local_variables__var
{
    class Customer
    {
        public string Name;
        public string City;
        public int Phone;
        public Customer(string Name, string City, int Phone)
        {
            this.Name = Name;
            this.City = City;
            this.Phone = Phone;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // local variable
            var i = 10; // Implicitly typed
            int j = 10; // Explicitly typed
            Console.WriteLine($"{i}, {j}");


            // Example #1: var is optional because
            // the select clause specifies a string
            string[] words = { "apple", "strawberrys", "grape", "peach", "banana" };
            var wordQuery = from word in words
                            where word[0] == 'g'
                            select word;
            // Because each element in the sequence is a string, not an anonymous type, var is optional here also.
            foreach (string s in wordQuery)
            {
                Console.WriteLine(s);
            }


            // var is required when the select clause specifies an anonymous type
            var customers = new List<Customer>() {
                new Customer("c1","Phoenix", 11),
                new Customer("c2","Texas", 12)
            };
            var custQuery = from cust in customers
                            where cust.City == "Phoenix"
                            select new { cust.Name, cust.Phone }; // anonymous type
            // var must be used because each item in the sequence is an anonymous type
            foreach (var item in custQuery)
            {
                Console.WriteLine("Name={0}, Phone={1}", item.Name, item.Phone);
            }
        }
    }
}
