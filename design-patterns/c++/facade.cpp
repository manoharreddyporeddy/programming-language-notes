#include "facade.h"
using namespace FACADE;

void Facade::SubSystem1::subSystem1Operation()
{
    cout << "in SubSystem1::subSystem1Operation()" << endl;
}
void Facade::SubSystem2::subSystem2Operation()
{
    cout << "in SubSystem2::subSystem2Operation()" << endl;
}
void Facade::SubSystem3::subSystem3Operation()
{
    cout << "in SubSystem3::subSystem3Operation()" << endl;
}

void Facade::subSystemOperation()
{
    cout << "in Facade::subSystemOperation()" << endl;

    pss1 = new SubSystem1();
    pss2 = new SubSystem2();
    pss3 = new SubSystem3();

    pss1->subSystem1Operation();
    pss2->subSystem2Operation();
    pss3->subSystem3Operation();
}
