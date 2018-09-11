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




        // https://referencesource.microsoft.com/#WindowsBase/parent/parent/InternalApis/NDP_FX/inc/ZLibNative.cs,265

        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate int VCPP_I_I(int x);

        public VCPP_I_I GetFunc_i_i(string fName1, string executable1 = @"VCppProj.exe")
        {
            IntPtr fptr1 = NativeMethods.GetProcAddress(hExe, fName1);
            if (fptr1 == IntPtr.Zero)
            {
                // error
                string err = "Error: could not get address of: " + fName1;
                Console.WriteLine(err);
                throw new Exception(err);
            }

            try
            {
                return (VCPP_I_I)
                           Marshal.GetDelegateForFunctionPointer(fptr1, typeof(VCPP_I_I));
            }
            catch (Exception e)
            {
                string err = "Error: 111111111111111111 could not get convert from fptr to delgt. " + e.Message;
                Console.WriteLine(err);
                throw e;
            }
        }

		
		
        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate long VCPP_II_L(int x, int y);

        public VCPP_II_L GetFunc_ii_l(string fName1, string executable1 = @"VCppProj.exe")
        {
            LoadLib1(executable1);

            IntPtr fptr1 = NativeMethods.GetProcAddress(hExe, fName1);
            if (fptr1 == IntPtr.Zero)
            {
                // error
                string err = "Error: could not get address of: " + fName1;
                Console.WriteLine(err);
                throw new Exception(err);
            }

            try
            {
                return (VCPP_II_L)
                           Marshal.GetDelegateForFunctionPointer(fptr1, typeof(VCPP_II_L));
            }
            catch (Exception e)
            {
                string err = "Error: could not get convert from fptr to delgt. " + e.Message;
                Console.WriteLine(err);
                throw e;
            }
        }

		
		
        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate int VCPP_S_I(string i);

        public VCPP_S_I GetFunc_s_i(string fName1, string executable1 = @"VCppProj.exe")
        {
            LoadLib1(executable1);

            IntPtr fptr1 = NativeMethods.GetProcAddress(hExe, fName1);
            if (fptr1 == IntPtr.Zero)
            {
                // error
                string err = "Error: could not get address of: " + fName1;
                Console.WriteLine(err);
                throw new Exception(err);
            }

            try
            {
                return (VCPP_S_I)
                           Marshal.GetDelegateForFunctionPointer(fptr1, typeof(VCPP_S_I));
            }
            catch (Exception e)
            {
                string err = "Error: could not get convert from fptr to delgt. " + e.Message;
                Console.WriteLine(err);
                throw e;
            }
        }

		
		
        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate string VCPP_I_S(int i);

        public VCPP_I_S GetFunc_i_s(string fName1, string executable1 = @"VCppProj.exe")
        {
            LoadLib1(executable1);

            IntPtr fptr1 = NativeMethods.GetProcAddress(hExe, fName1);
            if (fptr1 == IntPtr.Zero)
            {
                // error
                string err = "Error: could not get address of: " + fName1;
                Console.WriteLine(err);
                throw new Exception(err);
            }

            try
            {
                return (VCPP_I_S)
                           Marshal.GetDelegateForFunctionPointer(fptr1, typeof(VCPP_I_S));
            }
            catch (Exception e)
            {
                string err = "Error: could not get convert from fptr to delgt. " + e.Message;
                Console.WriteLine(err);
                throw e;
            }
        }

    }
}
