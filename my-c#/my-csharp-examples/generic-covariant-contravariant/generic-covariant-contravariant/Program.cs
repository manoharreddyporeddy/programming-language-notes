using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace generic_covariant_contravariant
{
    class Base { }
    class Derived: Base { }
    class Program
    {
        static void Main(string[] args)
        {
            // Covariant type parameters        - look much like ordinary Polymorphism
            //      Enables to use a more derived type than originally specified.
            IEnumerable<Derived> d = new List<Derived>();
            IEnumerable<Base> b = d;


            // TBD: https://docs.microsoft.com/en-us/dotnet/standard/generics/covariance-and-contravariance
            //
            // Contravariance
            //      Enables to use a more generic(less derived) type than originally specified.
            //IEnumerable<Base> b2 = new List<Base>();
            //IEnumerable<Derived> d2 = b2;

            // Invariance
            //      Means that you can use only the type originally specified; so an invariant generic type parameter is neither covariant nor contravariant.


        }
    }
}
