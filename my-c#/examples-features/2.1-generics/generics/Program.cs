using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using aa;

namespace aa
{
    // Declare the  class.
    public class MyList
    {
        public void Add(int input) {
        }
    }
}

namespace bb
{
    // Declare the generic class.
    public class MyList<T>
    {
        public void Add(T input) { }
    }
}

namespace generics
{
    class Program
    {
        static void Main(string[] args)
        {
            {
                // Declare a list of type int
                aa.MyList list1 = new aa.MyList();
                list1.Add(1);

                // Declare a list of type string
                //      aa.MyList list2 = new aa.MyList();
                //      list2.Add("abc"); // Error CS1503  Argument 1: cannot convert from 'string' to 'int'   generics C:\repo\my - programming - language - notes\my - c#\examples-features\2.1-generics\generics\Program.cs	40	Active
            }

            {
                // Declare a list of type int
                bb.MyList<int> list1 = new bb.MyList<int>(); list1.Add(1);

                // Declare a list of type string
                bb.MyList<string> list2 = new bb.MyList<string>(); list2.Add("abc");

                // Declare a list of type SomeCls1
                bb.MyList<SomeCls1> list3 = new bb.MyList<SomeCls1>(); list3.Add(new SomeCls1());
            }
        }

        public class SomeCls1 { }
    }
}
