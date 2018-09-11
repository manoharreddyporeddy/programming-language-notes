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

    class Vcpp
    {
        private IntPtr hExe;     // vcpp exe/dll handle

        public Vcpp(string executable1 = @"VCppProj.exe")
        {
            LoadLib1(executable1);
        }

        ~Vcpp()
        {
            FreeLib1();
        }

        public void LoadLib1(string executable1)
        {
            if (hExe == IntPtr.Zero) // dll not loaded
            {
                hExe = NativeMethods.LoadLibrary(executable1);  // load executable
                if (hExe == IntPtr.Zero)
                {
                    // error
                    Console.WriteLine("Error: could not load: " + executable1);
                    throw new Exception("Error: could not load: " + executable1); ;
                }
            }
        }

        public void FreeLib1()
        {
            if (hExe != null)
            {
                NativeMethods.FreeLibrary(hExe);
            }
        }
		
    }
}
