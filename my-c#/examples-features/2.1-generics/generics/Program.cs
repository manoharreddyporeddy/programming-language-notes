using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ns1;

namespace ns1
{
    public class List1
    {
        public void Add(int input)
        {
        }
    }

    public class List2<T>   // generic class
    {
        public void Add(T input) { }
    }
}

namespace generics
{
    public class Cls1 { }

    class Program
    {
        static void Main(string[] args)
        {
            {
                ns1.List1 list11 = new ns1.List1();
                list11.Add(1); // only int allowed

                ns1.List1 list12 = new ns1.List1();
                // Error CS1503  Argument 1: cannot convert from 'string' to 'int'
                //list12.Add("abc");
            }

            {
                // Declare a list of type int
                var list21 = new ns1.List2<int>();
                list21.Add(1);

                // Declare a list of type string
                var list22 = new ns1.List2<string>();
                list22.Add("abc");

                // Declare a list of type Cls1
                var list23 = new ns1.List2<Cls1>();
                list23.Add(new Cls1());
            }
        }

    }
}
