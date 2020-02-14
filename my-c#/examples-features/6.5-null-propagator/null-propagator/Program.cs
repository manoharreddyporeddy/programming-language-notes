using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace null_propagator
{
    class PriceBreak // (int min, int max, double price)
    {
        static int min = 0;
        static int max = 100;
        static double price = 10;

        //PriceBreak(int min, int max, double price) { this.min = min; this.max = max; this.price = price; }

        public int MinQuantity { get; } = min;
        public int MaxQuantity { get; } = max;
        public double Price { get; } = price;
    }

    class Product // (IList<PriceBreak> priceBreaks)
    {
        static List<PriceBreak> priceBreaks = null;
        public Product(List<PriceBreak> priceBreaks1)
        {
            priceBreaks = priceBreaks1;
        }
        public IList<PriceBreak> L1 { get; } = priceBreaks;
    }
    class Program
    {
        delegate int NumberChanger(int n);
        public delegate int MyDelegate(string s);

        static int add(string s)
        {
            return 0;
        }

        static void Main(string[] args)
        {
            Product p = new Product(null);

            {
                // bad
                var minPrice = p.L1[0].Price;
            }

            // OR

            {
                // good
                double minPrice = 0;
                if (p != null
                    && p.L1 != null
                    && p.L1[0] != null)
                {
                    minPrice = p.L1[0].Price; // value or 0
                }
            }

            // OR

            // better - new - null propagation operator(?) - double or null
            var minPrice3 = p?.L1?[0]?.Price; // value or null

            // OR

            // best - new - null propagation operator(?) & null coalescing operator (??) - double or 0
            var minPrice4 = p?.L1?[0]?.Price ?? 0;




            // won't work
            // var result1 = myDelegate ? ("someArgument");

            // works
            MyDelegate myDelegate = new MyDelegate(add);
            var result2 = myDelegate?.Invoke("someArgument");

        }
    }
}
