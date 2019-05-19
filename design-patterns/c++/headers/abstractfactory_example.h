#ifndef ABSTRACT_FACTORY_EXAMPLE_H_INCLUDED
#define ABSTRACT_FACTORY_EXAMPLE_H_INCLUDED
#include "common.h"
// Example

namespace ABSTRACT_FACTORY_EXAMPLE { // an abstract product

class Button {
  public:
  virtual ~Button() {}
  virtual void use() = 0;
};

class WinButton : public Button {
  public:
  virtual void use() {
    cout << "WinButton consumed\n";
  }
};

class OSXButton : public Button {
  public:
  virtual void use() {
    cout << "OSXButton consumed\n";
  }
};

// an abstract factory
class GUIFactory {
  public:
  virtual Button *createButton() = 0;
};

class WinFactory : public GUIFactory {
  public:
  virtual Button *createButton() // returns 'Product1' as 'AbstractProduct'
  {
    return new WinButton(); // dynamic_cast <AbstractProduct*> ()
  }
};

class OSXFactory : public GUIFactory {
  public:
  virtual Button *createButton() // returns 'Product2' as 'AbstractProduct'
  {
    return new OSXButton(); // dynamic_cast <AbstractProduct*> ()
  }
};

#define USE_FACTORY_DEPENDING_ON_USECASE 1
#ifdef USE_FACTORY_DEPENDING_ON_USECASE
class GUIApplication : public WinFactory
#else
class GUIApplication : public OSXFactory
#endif
{
};

} // namespace ABSTRACT_FACTORY_EXAMPLE
#endif // ABSTRACT_FACTORY_EXAMPLE_H_INCLUDED
