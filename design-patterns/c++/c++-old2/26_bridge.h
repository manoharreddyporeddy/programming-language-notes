#ifndef BRIDGE_H_INCLUDED
#define BRIDGE_H_INCLUDED

#include "common.h"

namespace BRIDGE { // Helps in providing truly decoupled architecture

  class IBridge {                // say, OS specific - bridge implementor
  public:
    virtual void Function1() = 0;
  };
  class Bridge1 : IBridge {
  public:
    void Function1() { }
  };

  class IAbstractBridge {
    virtual void CallMethod1() = 0;
  };
  class AbstractBridge : IAbstractBridge {    // shape
  public:
    IBridge *bridge;                          // drawapi
    AbstractBridge(IBridge *bridge1) {
      this->bridge = bridge1;
    }
    void CallMethod1() { this->bridge->Function1(); }
  };
};

#endif // BRIDGE_H_INCLUDED
