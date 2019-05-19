#ifndef PROTOTYPE_H_INCLUDED
#define PROTOTYPE_H_INCLUDED
#include "common.h"

namespace PROTOTYPE
{
//	Abstract base class with a pure virtual clone() method.
//	A class that needs a "polymorphic constructor" capability
//		derives from above abstract base class, and
//      implements the clone() operation.

class Prototype // Abstract class
{
public:
    virtual Prototype *clone() = 0; // Acts as a virtual copy constructor - clones itself - returns 'ConcretePrototypeX' as 'Prototype'
    virtual ~Prototype() {}         // virtual destructor
};

class ConcretePrototype1 : public Prototype
{
public:
    ConcretePrototype1()
    {
        _someState1 = 0;
        _someState2 = 0.0;
    }

    virtual Prototype *clone() // 'clone' returns 'ConcretePrototype1' as 'Prototype'
    {
        return new ConcretePrototype1(*this); // calls Copy constructor   // dynamic_cast <Prototype*>
    }

    void calcAndStoreState1()
    {
        // Did a complex operation and
        // then, saved state into self
        _someState1 = 453456789;
    }

    void setState2(float state2)
    {
        // Did a complex operation and
        // then, saved state into self
        _someState2 = state2;
    }

    int getState1()
    {
        return _someState1;
    }

    float getState2()
    {
        return _someState2;
    }

private:
    // Does the Copy constructor need to be private (and so constructor in public)?
    int _someState1;
    float _someState2;
};
}; // namespace PROTOTYPE

#endif // PROTOTYPE_H_INCLUDED
