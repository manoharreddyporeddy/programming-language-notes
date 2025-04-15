#ifndef LAZY_INITIALIZATION_H_INCLUDED
#define LAZY_INITIALIZATION_H_INCLUDED
#include "../common.h"

/* In computer programming,
      lazy initialization is the
          tactic of delaying
              the creation of an object,
              the calculation of a value, or
              some other expensive process
                  UNTIL the first time it is needed.
*/

namespace LAZY_INITIALIZATION {

class Object {
  // assume 100 fields here
};

class LazyInitialization {
  static int _count;

  public:
  static Object *createObjectInstance() {
    cout << "\n .. Now, LazyInitialization class, is used to create New object .. ";
    _count++;
    return new Object();
  }

  // implement call through atexit() for automatic delete?
  static void disposeObjectInstance(Object **pObjectInstance) {
    if (*pObjectInstance != NULL) {
      cout << "\n .. object at address .. " << *pObjectInstance << " is deleted";

      _count--;

      delete *pObjectInstance;
      *pObjectInstance = NULL;
    }
  }

  static int getCount() {
    cout << " .. LazyInitialization class is in use .. ";
    return _count;
  }
};
int LazyInitialization::_count = 0;

} // namespace LAZY_INITIALIZATION
#endif // LAZY_INITIALIZATION_H_INCLUDED
