#ifndef COMPOSITE_H_INCLUDED
#define COMPOSITE_H_INCLUDED
#include "../common.h"
#include <list>

// structural pattern as this pattern creates a tree structure of group of objects.

// Composite pattern is used where
//    we need to treat
//      a group of objects in similar way
//      as a single object.
//
// Composite pattern composes objects in term of a tree structure
//    to represent part as well as
//    whole hierarchy.

// This pattern creates a class that contains group of its own objects.
//    This class provides ways to modify its group of same objects.

// ?? distribution and location transparency ??

namespace COMPOSITE {

class IComposite { // Picture
  public:
  virtual void someOperation() = 0; //      Draw
};

class Composite : public IComposite {
  // Picture
  public:
  void addChild(IComposite *pIC) { //      Add a child (Square, Rectangle, Picture, etc.)
    cout << "in Composite::addChild(IComposite *pIC)\n";
    children.push_back(pIC);
  }
  void removeChild(IComposite *pIC) {
    cout << "in Composite::removeChild(IComposite *pIC)\n";
    children.remove(pIC);
  }
  void someOperation() { //      Draw children
    cout << "in Composite::someOperation()\n";
    for (auto pcomposite : children) {
      pcomposite->someOperation();
    }
  }

  private:
  std::list<IComposite *> children;
};

class Leaf : public IComposite {
  // Line
  public:
  void someOperation() { //      Draw self
    cout << "in Leaf::someOperation()\n";
  }
};

};     // namespace COMPOSITE
#endif // COMPOSITE_H_INCLUDED
