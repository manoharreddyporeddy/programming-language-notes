#ifndef LAZY_INITIALIZATION_H_INCLUDED
#define LAZY_INITIALIZATION_H_INCLUDED
#include "common.h"

/* In computer programming,
    lazy initialization is the
    tactic of delaying
    the creation of an object,
    the calculation of a value, or
    some other expensive process
    UNTIL the first time it is needed.

    // In computer programming, lazy initialization is the tactic of delaying 
    //		the creation of an object, 
    //		the calculation of a value, or 
    //		some other expensive process 
    //			until the first time it is needed.

    */
namespace LAZY_INITIALIZATION {

class Object {
  // 100 fields
};

// NOTE
//		Looks like it doesnt mean Singleton, it sounds more like dynamic variable instead of atuomatic variable (C/C++)

class LazyInitialization {
  static int _count;

  public:
  static int getCount() {
    cout << "\n .. LazyInitialization class is in use .. ";

    return _count;
  }
  static Object *createObjectInstance() {
    Object *p = new Object();

    cout << "\n .. Now, LazyInitialization class, is used to create New object .. ";
    _count++;

    return p;
  }
  // implement call through atexit() for automatic delete?
  static void disposeObjectInstance(Object **pObjectInstance) {
    if (*pObjectInstance != NULL) {
      /// cout << "\n .. object at address .. " << *pObjectInstance;

      delete *pObjectInstance;
      *pObjectInstance = NULL;

      // cout << " is deleted";
    }
  }
};
int LazyInitialization::_count = 0;

} // namespace LAZY_INITIALIZATION
#endif // LAZY_INITIALIZATION_H_INCLUDED
