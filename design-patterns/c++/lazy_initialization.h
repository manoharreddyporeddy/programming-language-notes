#ifndef LAZY_INITIALIZATION_H_INCLUDED
#define LAZY_INITIALIZATION_H_INCLUDED
#include "common.h"

namespace LAZY_INITIALIZATION
{
    // In computer programming, lazy initialization is the tactic of delaying 
    //		the creation of an object, 
    //		the calculation of a value, or 
    //		some other expensive process 
    //			until the first time it is needed.

    class Object
    {
        // 100 fields
    };

    // NOTE
    //		Looks like it doesnt mean Singleton, it sounds more like dynamic variable instead of atuomatic variable (C/C++)

    class LazyInitialization
    {
        static int _count;
    public:
        static int getCount();
        static Object* createObjectInstance();
        static void disposeObjectInstance(Object** pObjectInstance);
    };
}
#endif // LAZY_INITIALIZATION_H_INCLUDED
