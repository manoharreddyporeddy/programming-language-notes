using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace object_initializers_and_collection_initializers
{
    class Cat
    {
        public int Age { get; set; }        // Auto-implemented properties.
        public string Name { get; set; }
    }

    class Product
    {
        public string ProductName;
        public int UnitPrice;
        public int Other;

        public Product(string ProductName1, int UnitPrice1, int Other1)
        {
            ProductName = ProductName1;
            UnitPrice = UnitPrice1;
            Other = Other1;
        }
    }

    class Program
    {
        static void use()
        {

            Cat cat1 = new Cat() { Age = 10, Name = "Fluffy" };

            // object initializers
            Cat cat2 = new Cat { Age = 10, Name = "Fluffy" };

            // Object Initializers with anonymous types
            var pet = new { Age = 10, Name = "Fluffy" };

            // collection initializer
            var productsList = new List<Product>()
            {
                new Product("prod1", 101, 0 ),
                new Product("prod2", 102, 0 ),
                new Product("prod3", 103, 0 )
            };


            // Object initializers with nullable types
            // It is a compile-time error to use an object initializer with a nullable struct.
            // TBD - example

            // Collection initializers

            Random r = new Random();
            int MakeInt()
            {
                return r.Next();
            }

            // collection initializers
            List<int> digits = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            List<int> digits2 = new List<int> { 0 + 1, 12 % 3, MakeInt() };
            List<Cat> cats = new List<Cat> {
                new Cat(){ Name = "Sylvester", Age=8 },
                new Cat(){ Name = "Whiskers", Age=2 },
                new Cat(){ Name = "Sasha", Age=14 },
                null // if collection's Add allows
            };

            //  indexed elements, if the collection supports indexing
            var numbers = new Dictionary<int, string>
            {
                [7] = "seven",
                [9] = "nine",
                [13] = "thirteen"
            };





            var productInfos =
                from p in productsList
                select new { p.ProductName, p.UnitPrice };
            foreach (var p in productInfos)
            {
                //..
            }

            var productInfos2 =
                from p in productsList
                select new { p.ProductName, Price = p.UnitPrice };
            foreach (var p in productInfos2)
            {
                //..
            }


            Console.WriteLine("All working.");
        }

        static void Main(string[] args)
        {
            use();
        }
    }
}
