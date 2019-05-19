#ifndef ABSTRACT_FACTORY_H_INCLUDED
#define ABSTRACT_FACTORY_H_INCLUDED
#include "common.h"
// Concept

namespace ABSTRACT_FACTORY {
class AbstractProduct {
  public:
  virtual ~AbstractProduct() {}
  virtual void use() = 0;
};

class Product1 : public AbstractProduct {
  public:
  virtual void use() {
    cout << "Product1 consumed\n";
  }
};

class Product2 : public AbstractProduct {
  public:
  virtual void use() {
    cout << "Product2 consumed\n";
  }
};

// an abstract facory
class AbstractFactory {
  public:
  virtual AbstractProduct *createProduct() = 0;
};
class Factory1 : public AbstractFactory {
  public:
  virtual AbstractProduct *createProduct() {
    // returns 'Product1' as 'AbstractProduct'
    return new Product1(); // dynamic_cast <AbstractProduct*> ()
  }
};
class Factory2 : public AbstractFactory {
  public:
  virtual AbstractProduct *createProduct() {
    // returns 'Product2' as 'AbstractProduct'
    return new Product2(); // dynamic_cast <AbstractProduct*> ()
  }
};

#define USE_FACTORY_DEPENDING_ON_USECASE 1
#ifdef USE_FACTORY_DEPENDING_ON_USECASE
class Application : public Factory1
#else
class Application : public Factory2
#endif
{
};

/***************************************************************************************************/
} // namespace ABSTRACT_FACTORY
#endif // ABSTRACT_FACTORY_H_INCLUDED
