#include "lazy_initialization.h"
using namespace LAZY_INITIALIZATION;

/* In computer programming,
    lazy initialization is the
    tactic of delaying
    the creation of an object,
    the calculation of a value, or
    some other expensive process
    UNTIL the first time it is needed.
    */
int LazyInitialization::_count = 0;

int LazyInitialization::getCount()
{
    cout << endl << " .. LazyInitialization class is in use .. ";

    return _count;
}

Object* LazyInitialization::createObjectInstance()
{
    Object *p = new Object();

    cout << endl << " .. Now, LazyInitialization class, is used to create New object .. ";
    _count++;

    return p;
}

// implement call through atexit() for automatic delete?
void LazyInitialization::disposeObjectInstance(Object** pObjectInstance)
{
    if (*pObjectInstance != NULL)
    {
        /// cout << endl << " .. object at address .. " << *pObjectInstance;

        delete *pObjectInstance;
        *pObjectInstance = NULL;

        // cout << " is deleted";
    }
}
