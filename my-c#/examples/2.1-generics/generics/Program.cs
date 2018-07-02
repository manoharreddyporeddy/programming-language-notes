using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace generics
{
   public class Class1 { }

    // Declare the generic class.
    public class GenericList<T>
    {
        public void Add(T input) { }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Declare a list of type int, string & Class1.
            GenericList<int> list1 = new GenericList<int>();            list1.Add(1);
            GenericList<string> list2 = new GenericList<string>();      list2.Add("");
            GenericList<Class1> list3 = new GenericList<Class1>();      list3.Add(new Class1());
        }
    }
}
