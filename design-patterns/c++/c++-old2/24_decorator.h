#ifndef DECORATOR_H_INCLUDED
#define DECORATOR_H_INCLUDED
#include "common.h"

namespace DECORATOR {

  class ICoffee {
  public:
    virtual string get() = 0;
  };

  class Coffee : public ICoffee { // Component
  public:
    string _str = "";
    Coffee() { _str = "coffee"; }
    string get() { return _str; }
  };

  class MilkCoffee : public ICoffee { // Decorator
    ICoffee *iC;
  public:
    MilkCoffee(ICoffee *iC1) { iC = iC1; }
    string get() { return iC->get() + " + milk"; }
  };
};

#endif // DECORATOR_H_INCLUDED
