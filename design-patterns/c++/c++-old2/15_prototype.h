#ifndef PROTOTYPE_H_INCLUDED
#define PROTOTYPE_H_INCLUDED
#include "common.h"

namespace PROTOTYPE {

  class IPrototype {
  public:
    virtual ~IPrototype() { }

    virtual IPrototype* clone() = 0;
  };

  class Prototype: public IPrototype {
  public:
    Prototype() { }
    ~Prototype() { }

    // virtual copy constructor
    virtual IPrototype* clone() { return new Prototype(*this); }
  };
};

#endif // PROTOTYPE_H_INCLUDED
