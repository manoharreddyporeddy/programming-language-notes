#ifndef ABSTRACT_FACTORY_H_INCLUDED
#define ABSTRACT_FACTORY_H_INCLUDED
#include "../common.h"

// In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly specifying their classes. Each generated factory can give the objects as per the Factory pattern.

namespace ABSTRACT_FACTORY {

class AbstractProduct {
  // Button
  public:
  virtual ~AbstractProduct() {}
  virtual void use() = 0;
};
class Product1 : public AbstractProduct {
  // WinButton
  public:
  virtual void use() {
    cout << "Product1 consumed\n";
  }
};
class Product2 : public AbstractProduct {
  // OSXButton
  public:
  virtual void use() {
    cout << "Product2 consumed\n";
  }
};

class AbstractFactory {
  // GUIFactory
  public:
  virtual AbstractProduct *createProduct() = 0;
};
class Factory1 : public AbstractFactory {
  // WinFactory
  public:
  // createButton
  virtual AbstractProduct *createProduct() {
    return new Product1(); // dynamic_cast <AbstractProduct*> ()
  }
};
class Factory2 : public AbstractFactory {
  // OSXFactory
  public:
  // createButton
  virtual AbstractProduct *createProduct() {
    return new Product2(); // dynamic_cast <AbstractProduct*> ()
  }
};

#define USE_FACTORY_DEPENDING_ON_USECASE 1
#ifdef USE_FACTORY_DEPENDING_ON_USECASE
class Application : public Factory1 { // GUIApplication
#else
class Application : public Factory2 { // GUIApplication
#endif
};

/***************************************************************************************************/
} // namespace ABSTRACT_FACTORY
#endif // ABSTRACT_FACTORY_H_INCLUDED
