#ifndef LAZY_INITIALIZATION_H_INCLUDED
#define LAZY_INITIALIZATION_H_INCLUDED

#include "common.h"

namespace LAZY_INITIALIZATION {

  class Object { // 100 fields
  };

  class LazyInitialization {
  public:
    static Object* createObjectInstance() {
      Object *p = new Object();
      return p;
    }
  };

}

#endif // LAZY_INITIALIZATION_H_INCLUDED
