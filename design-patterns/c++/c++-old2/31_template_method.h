#ifndef TEMPLATE_METHOD_H_INCLUDED
#define TEMPLATE_METHOD_H_INCLUDED

#include "common.h"

namespace TEMPLATE_METHOD {

  class IAbstractClass {
  public:
    virtual void primitiveMethod1() = 0;
    virtual void primitiveMethod2() = 0;

    virtual void templateMethod() final { // final is keyword since C++11
      primitiveMethod1();
      primitiveMethod2();
    }
  };

  class ConcreteClass : public IAbstractClass {
  public:
    void primitiveMethod1() {}
    void primitiveMethod2() {}
  };
};
#endif // TEMPLATE_METHOD_H_INCLUDED
