// CS dll
using System;
using System.Runtime.InteropServices;
using System.Text;

// NOTE:
//  Issue: Build Fail
//  Solution: This project should be open in Visual Studio that is run in Administrator mode

namespace ns_vcsharpLib
{
    // StringBuilder
    // [UnmanagedFunctionPointer(CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
    // [UnmanagedFunctionPointer(CallingConvention.StdCall)]

    [ComVisible(true)]
    public interface IClass1
    {
        void CallVcsFuncSetN(int n);
        int CallVcsFuncGetN();

        int CallVcsFunc_i_i(int x);
        long CallVcsFunc_ii_l(int x, int y);
        string CallVcsFunc_i_s(int x);
        int CallVcsFunc_s_i(string x);
    }

    [ComVisible(true)]
    [ClassInterface(ClassInterfaceType.None)]
    public class Class1 : IClass1
    {
        Vcpp _vcpp = new Vcpp();

        int _n = 100;
        public void CallVcsFuncSetN(int n)
        {
            _n = n;
        }
        public int CallVcsFuncGetN()
        {
            return _n;
        }

        public int CallVcsFunc_i_i(int x)
        {
            return _vcpp.GetFunc_i_i("vcpp_i_i")(x);
        }

        public long CallVcsFunc_ii_l(int x, int y)
        {
            return _vcpp.GetFunc_ii_l("vcpp_ii_l")(x, y);
        }

        public string CallVcsFunc_i_s(int x)
        {
            return _vcpp.GetFunc_i_s("vcpp_i_s")(x); // VCPP_I_S
        }

        public int CallVcsFunc_s_i(string x)
        {
            return _vcpp.GetFunc_s_i("vcpp_s_i")(x);
        }

    }
}

//VCPP_I_11S vcpp_i_11s = null;
//vcpp_i_11s = _vcpp.GetFunc_i_s("vcpp_i_11s");
