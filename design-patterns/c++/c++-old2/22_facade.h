#ifndef FACADE_H_INCLUDED
#define FACADE_H_INCLUDED
#include "common.h"

namespace FACADE {

  class SubSystem1 {};

  class Computer {
    SubSystem1 *p_ss1;

  public:
    Computer() {                // create Computer obj
      p_ss1 = new SubSystem1(); //  create RAM obj
    }

    void start() {              // start Computer
      // use p_ss1
    }
  };
};
#endif // FACADE_H_INCLUDED

/*
A facade can:
  make a software library easier to use, understand and test, since the facade has convenient methods for common tasks;
  make the library more readable, for the same reason;
  reduce dependencies of outside code on the inner workings of a library, since most code uses the facade, thus allowing more flexibility in developing the system;
  wrap a poorly designed collection of APIs with a single well-designed API.
The facade pattern is typically used when:
  a simple interface is required to access a complex system;
  the abstractions and implementations of a subsystem are tightly coupled;
  need an entry point to each level of layered software; or
  a system is very complex or difficult to understand.
*/
