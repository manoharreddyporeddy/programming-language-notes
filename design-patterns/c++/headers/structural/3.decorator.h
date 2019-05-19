#ifndef DECORATOR_H_INCLUDED
#define DECORATOR_H_INCLUDED
#include "../common.h"

namespace DECORATOR {

class IComponent {
  // Coffee (in thought)
  public:
  virtual void someOperation() = 0;
};

class Component : public IComponent {
  // Coffee
  public:
  void someOperation() {
    cout << "void Component::someOperation()        - Coffee\n";
  }
};

class DecoratorBase : public IComponent {
  // Coffee Add-on (in thought)
  public:
  DecoratorBase(IComponent *pIComponent) { _pIComponent = pIComponent; }
  void someOperation() { _pIComponent->someOperation(); }

  protected:
  IComponent *_pIComponent;
};
class Decorator1 : public DecoratorBase {
  // Coffee with Milk
  public:
  Decorator1(IComponent *pIComponent) : DecoratorBase(pIComponent) {}
  void someOperation() { // Coffee
    DecoratorBase::someOperation();
    someOtherOperation1();
  }
  // Milk
  void someOtherOperation1() { cout << "void Decorator1::someOtherOperation1()     - with Milk\n\n"; }
};
class Decorator2 : public DecoratorBase {
  // Coffee with Cream
  public:
  Decorator2(IComponent *pIComponent) : DecoratorBase(pIComponent) {}
  void someOperation() { // Coffee
    DecoratorBase::someOperation();
    someOtherOperation2();
  }
  // Cream
  void someOtherOperation2() { cout << "void Decorator2::someOtherOperation2()     - with Cream\n\n"; }
};

}; // namespace DECORATOR

#endif // DECORATOR_H_INCLUDED
