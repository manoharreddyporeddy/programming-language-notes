#include "prototype.h"
using namespace PROTOTYPE;

ConcretePrototype1::ConcretePrototype1()
{
    _someState1 = 0;
    _someState2 = 0.0;
}

Prototype* ConcretePrototype1::clone()  // 'clone' returns 'ConcretePrototype1' as 'Prototype'
{
    return new ConcretePrototype1(*this);		// calls Copy constructor   // dynamic_cast <Prototype*>
}

void ConcretePrototype1::calcAndStoreState1()
{
    // Did a complex operation and
    // then, saved state into self
    _someState1 = 453456789;
}

void ConcretePrototype1::setState2(float state2)
{
    // Did a complex operation and
    // then, saved state into self
    _someState2 = state2;
}

int ConcretePrototype1::getState1()
{
    return _someState1;
}

float ConcretePrototype1::getState2()
{
    return _someState2;
}
