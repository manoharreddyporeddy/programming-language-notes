#include "facade.h"

void test_Facade()
{
    cout << " -- test_Facade -- " << endl;
    using namespace FACADE;

    Facade *pf = new Facade();
    pf->subSystemOperation();

    cout << endl;
}
