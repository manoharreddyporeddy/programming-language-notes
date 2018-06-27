// CS dll

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace vcsharpLib
{
    [ComVisible(true)]
    public interface IClass1
    {
        int getMethod1();
    }

    [ComVisible(true)]
    [ClassInterface(ClassInterfaceType.None)]
    public class Class1 : IClass1
    {
        public int getMethod1()
        {
            return 1234321;
        }
    }
}

