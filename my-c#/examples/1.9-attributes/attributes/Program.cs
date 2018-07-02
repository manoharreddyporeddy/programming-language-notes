using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;


namespace attributes
{
    /*
     * attributes
        Attributes provide a powerful method of
            associating metadata, or declarative information,
            with code (assemblies, types, methods, properties, and so forth).

        After an attribute is associated with a program entity,
            the attribute can be queried at run time by using a technique called reflection.

        Attributes can
            accept arguments
            in the same way as methods and properties.
    
        Your program can examine
            its own metadata or
            the metadata in other programs
                by using reflection

         */
    /*
        Common uses for attributes
        The following list includes a few of the common uses of attributes in code:

        Marking methods using the WebMethod attribute in Web services to indicate that the method should be callable over the SOAP protocol. For more information, see WebMethodAttribute.
        Describing how to marshal method parameters when interoperating with native code. For more information, see MarshalAsAttribute.
        Describing the COM properties for classes, methods, and interfaces.
        Calling unmanaged code using the DllImportAttribute class.
        Describing your assembly in terms of title, version, description, or trademark.
        Describing which members of a class to serialize for persistence.
        Describing how to map between class members and XML nodes for XML serialization.
        Describing the security requirements for methods.
        Specifying characteristics used to enforce security.
        Controlling optimizations by the just-in-time (JIT) compiler so the code remains easy to debug.
        Obtaining information about the caller to a method.
    */



    [Serializable]
    public class SampleClass
    {
        // Objects of this type can be serialized.
    }

    public class a
    {
        [System.Runtime.InteropServices.DllImport("user32.dll")]
        extern static void SampleMethod();

        void MethodA([In][Out] ref double x) { }
        void MethodB([Out][In] ref double x) { }
        void MethodC([In, Out] ref double x) { }

        [Conditional("DEBUG"), Conditional("TEST1")]
        void TraceMethod()
        {
            // ...
        }

        //[assembly: AssemblyTitleAttribute("Production assembly 4")]
        //[module: CLSCompliant(true)]

        //// attributes have parameters, which can be positional, unnamed, or named
        //[DllImport("user32.dll")]
        //[DllImport("user32.dll", SetLastError = false, ExactSpelling = false)]
        //[DllImport("user32.dll", ExactSpelling = false, SetLastError = false)]



        // default: applies to method
        [ValidatedContract]
        int Method1() { return 0; }

        // applies to method
        [method: ValidatedContract]
        int Method2() { return 0; }

        // applies to return value
        [return: ValidatedContract]
        int Method3() { return 0; }
    }

    internal class ValidatedContractAttribute : Attribute
    {
    }

    class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
