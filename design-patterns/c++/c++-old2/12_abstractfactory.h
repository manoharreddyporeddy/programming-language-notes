#ifndef ABSTRACT_FACTORY_H_INCLUDED
#define ABSTRACT_FACTORY_H_INCLUDED

#include "common.h"

namespace ABSTRACT_FACTORY {

  class IProduct { virtual void a() = 0; };
  class Product1 : public IProduct { void a() {} };
  class Product2 : public IProduct { void a() {} };

  class AbstractFactory {
  public:  virtual IProduct* createProduct() = 0;
  };
  class Factory1 : public AbstractFactory {
  public:  virtual IProduct* createProduct() { return new Product1(); }
  };
  class Factory2 : public AbstractFactory {
  public:  virtual IProduct* createProduct() { return new Product2(); }
  };
}
#endif // ABSTRACT_FACTORY_H_INCLUDED
