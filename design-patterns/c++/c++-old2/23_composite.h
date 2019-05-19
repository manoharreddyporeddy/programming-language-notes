#ifndef COMPOSITE_H_INCLUDED
#define COMPOSITE_H_INCLUDEDx
#include "common.h"

namespace COMPOSITE {

  class IComponent {
  public:   virtual void Draw() = 0;
  };

  class Leaf : public IComponent {
  public:   void Draw() {}
  };

  class Composite : public IComponent
  {
    std::list<IComponent *> children;
  public:
    void addChild(IComponent *pIC) { children.push_back(pIC); }
    void removeChild(IComponent *pIC) { children.remove(pIC); }
    void Draw() {
      for (auto it1 = children.begin(); it1 != children.end(); it1++) {
        ((IComponent*)*it1)->Draw();
      }
    }
  };
};
#endif // COMPOSITE_H_INCLUDED

/*
when clients ignore the difference between compositions of objects and individual objects
*/