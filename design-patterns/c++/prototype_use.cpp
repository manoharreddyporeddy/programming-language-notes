#include "prototype.h"

void test_Prototype()
{
    cout << " -- test_Prototype -- " << endl;
    using namespace PROTOTYPE;

    ConcretePrototype1 *p1 = new ConcretePrototype1();
    cout << "p1 values after new object:  state1: " << p1->getState1() << ", state2: " << p1->getState2() << endl;

    p1->calcAndStoreState1();
    p1->setState2(10.0);
    cout << "p1 values after cal & set:   state1: " << p1->getState1() << ", state2: " << p1->getState2() << endl;

    cout << "creating clone of p1 as p2.." << endl;

    // Client creates a new object by asking a 'Prototype' to clone itself
    ConcretePrototype1 *p2 = (ConcretePrototype1 *)p1->clone();
    cout << "p2 values after new object:  state1: " << p2->getState1() << ", state2: " << p2->getState2() << endl;
    // p2 doesnt require to do same calcAndStoreState(), since same operation state is received from original object p1

    cout << endl;
}
