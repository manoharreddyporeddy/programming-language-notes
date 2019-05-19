#include "strategy.h"

void test_Strategy()
{
    cout << " -- test_Strategy -- " << endl;
    using namespace STRATEGY;

    Context *pC = new Context(new ConcreteStrategy1());
    pC->someMethod();

    cout << endl;
}
