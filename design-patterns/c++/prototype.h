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
        virtual Prototype* clone() = 0;     // Acts as a virtual copy constructor - clones itself - returns 'ConcretePrototypeX' as 'Prototype'
        virtual ~Prototype() { }            // virtual destructor
    };

    class ConcretePrototype1 : public Prototype
    {
    public:
        ConcretePrototype1();
        virtual Prototype* clone();                         // 'clone' returns 'ConcretePrototype1' as 'Prototype'
        void calcAndStoreState1();
        void setState2(float state2);
        int getState1();
        float getState2();
    private:
        // Does the Copy constructor need to be private (and so constructor in public)?
        int _someState1;
        float _someState2;
    };
};

#endif // PROTOTYPE_H_INCLUDED
