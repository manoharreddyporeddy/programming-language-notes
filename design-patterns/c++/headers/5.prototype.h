#ifndef PROTOTYPE_H_INCLUDED
#define PROTOTYPE_H_INCLUDED
#include "common.h"

// Prototype pattern refers to
//      creating duplicate object
//      while keeping performance in mind.

// This pattern involves implementing a prototype interface which tells to create a clone of the current object. This pattern is used when creation of object directly is costly. For example, an object is to be created after a costly database operation. We can cache the object, returns its clone on next request and update the database as and when needed thus reducing database calls.

namespace PROTOTYPE {
//	Abstract base class with a pure virtual clone() method.
//	A class that needs a "polymorphic constructor" capability
//		derives from above abstract base class, and
//      implements the clone() operation.

class Prototype {
  // Abstract class
  public:
  virtual ~Prototype() {}         // virtual destructor
  virtual Prototype *clone() = 0; // Acts as a virtual copy constructor - clones itself - returns 'ConcretePrototypeX' as 'Prototype'
};
class ConcretePrototype : public Prototype {
  public:
  ConcretePrototype() {
    someState = 0;
  }
  virtual Prototype *clone() {           // 'clone' returns 'ConcretePrototype' as 'Prototype'
    return new ConcretePrototype(*this); // calls Copy constructor   // dynamic_cast <Prototype*>
  }

  void calculateState() { // Did a complex operation and then, saved state into self
    someState = 453456789;
  }
  int getCalculatedState() { return someState; }

  private:
  // Does the Copy constructor need to be private (and so constructor in public)?
  int someState;
};
}; // namespace PROTOTYPE

#endif // PROTOTYPE_H_INCLUDED
