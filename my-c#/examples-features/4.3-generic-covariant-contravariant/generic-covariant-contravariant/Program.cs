using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace generic_covariant_contravariant
{
    class Base { }
    class Derived : Base { }
    class Program
    {
        static void SetObject(object o) { }

        static void Main(string[] args)
        {


            // ================
            // https://docs.microsoft.com/en-us/dotnet/standard/generics/covariance-and-contravariance

            // Covariant type parameters        - look much like ordinary Polymorphism
            //      Enables to use a more derived type than originally specified.
            IEnumerable<Derived> d = new List<Derived>();
            IEnumerable<Base> b = d;

            // Contravariance
            //      Enables to use a more generic(less derived) type than originally specified.
            //IEnumerable<Base> b2 = new List<Base>();
            //IEnumerable<Derived> d2 = b2;

            // Invariance
            //      Means that you can use only the type originally specified; so an invariant generic type parameter is neither covariant nor contravariant.


            // ================
            // https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/index

            // Assignment compatibility
            // An object of a    more derived type    is assigned to    an object   of a less derived type.   
            //  lessDerivedObj = moreDerivedObj
            string str = "test";
            object obj = str;

            // Covariance
            //  somethingWith_lessDerivedObj = somethingWith_moreDerivedObj
            IEnumerable<string> strings = new List<string>();
            // An object that is instantiated with a more derived type argument   
            //  is assigned to an object instantiated with a less derived type argument.   
            // Assignment compatibility is preserved.   
            IEnumerable<object> objects = strings;

            // Contravariance
            // Assume that the following method is in the class:   
            // static void SetObject(object o) { }
            Action<object> actObject = SetObject;
            // An object that is instantiated with a less derived type argument   
            // is assigned to an object instantiated with a more derived type argument.   
            // Assignment compatibility is reversed.   
            Action<string> actString = actObject;


        }
    }
}
