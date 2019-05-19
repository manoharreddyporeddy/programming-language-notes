#include "template_method.h"
using namespace TEMPLATE_METHOD;
// --- Template Method ---

void IAbstractClass::templateMethod()
{
    cout << "in void IAbstractClass::templateMethod()" << endl;
    // ..
    primitiveMethod1();
    // ..
    primitiveMethod2();
    // ..
    primitiveMethod3();
    // ..
}


void ConcreteClass::primitiveMethod1()
{
    cout << "in void ConcreteClass::primitiveMethod1()" << endl;
}
void ConcreteClass::primitiveMethod2()
{
    cout << "in void ConcreteClass::primitiveMethod2()" << endl;
}
void ConcreteClass::primitiveMethod3()
{
    cout << "in void ConcreteClass::primitiveMethod3()" << endl;
}

