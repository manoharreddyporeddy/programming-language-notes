#include "decorator.h"

void test_Decorator()
{
    cout << " -- test_Decorator -- " << endl;
    using namespace DECORATOR;

    // IComponent *pC = new IComponent();   // error C2259 : 'DECORATOR::IComponent' : cannot instantiate abstract class
    Component *pC = new Component();
    // pC->someOperation(); // OK, if simple coffee is required
    // cout << endl;

    // DecoratorBase *pf = new DecoratorBase();      //  error C2259 : 'DECORATOR::DecoratorBase' : cannot instantiate abstract class
    Decorator1 *pD1 = new Decorator1((IComponent *)pC);
    pD1->someOperation();
    cout << endl;

    Decorator2 *pD2 = new Decorator2((IComponent *)pC);
    pD2->someOperation();
    cout << endl;

}
