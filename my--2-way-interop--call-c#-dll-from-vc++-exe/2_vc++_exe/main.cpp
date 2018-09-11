#include "Windows.h"
// #include "some.h"

#import "..\vcsharpLib.tlb"				// DEFAULT assembly name  is  namespace
namespace ns_vcsharpLib = vcsharpLib;	// make alias:   DEFAULT assembly name  to  our actual namespace

#include "iostream"
#include "string"

using namespace std;

int main() {
}

// ========================= 4 VC++ functions - exported from this .exe ===============================
int vcpp_i_i(int x) {
	return x;
}

long vcpp_ii_l(int x, int y) {
	return x * y;
}

char* vcpp_i_s(int i) {

	char str[33];
	itoa(i, str, 10);

    ULONG ulSize = strlen(str) + sizeof(char);
    char* pszReturn = (char*)::CoTaskMemAlloc(ulSize);
	strncpy(pszReturn, str, ulSize);
    return pszReturn;
}

int vcpp_s_i(char *str) {

	int val;
	val = atoi(str);

	return val;
}
// ========================= 4 VC++ functions - exported from this .exe ===============================


/*
	//
	// COM itself does not have a concept of namespace (which is language-specific).
	//		uses the assembly name as the name of the library statement in the IDL.
	//		It does not care which namespace your COMVisible class is in.
	//		By default the C++ compiler imports a type library into a namespace with its name specified by the library statement in the IDL.
	//
	// ** Use the assembly name as the namespace name (or rename the namespace in the import statement) in your C++ code **
	//
*/
