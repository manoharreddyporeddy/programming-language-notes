// CS dll
using System;
using System.Runtime.InteropServices;


// NOTE:
//  Issue: Build Fail
//  Solution: This project should be open in Visual Studio that is run in Administrator mode

namespace ns_vcsharpLib
{
    static class NativeMethods
    {
        [DllImport("kernel32.dll")]
        public static extern IntPtr LoadLibrary(string dllToLoad);

        [DllImport("kernel32.dll")]
        public static extern IntPtr GetProcAddress(IntPtr hModule, string procedureName);

        [DllImport("kernel32.dll")]
        public static extern bool FreeLibrary(IntPtr hModule);
    }
}
