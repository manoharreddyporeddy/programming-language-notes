// CS dll
using System;
using System.Runtime.InteropServices;
using System.Text;

// NOTE:
//  Issue: Build Fail
//  Solution: This project should be open in Visual Studio that is run in Administrator mode

namespace ns_vcsharpLib
{
    [ComVisible(true)]
    public interface IClass1
    {
    }

    [ComVisible(true)]
    [ClassInterface(ClassInterfaceType.None)]
    public class Class1 : IClass1
    {
    }
}
