#ifndef FACTORY_METHOD_H
#define FACTORY_METHOD_H

#include "common.h"

namespace FacMethod1 {

  class IProduct { virtual void a() = 0; };
  class Product1 : public IProduct { void a() {} };
  class Product2 : public IProduct { void a() {} };

  class Factory {
  public:
    static IProduct* FactoryMethod(int product_type) {
      if (product_type == 1) {
        return new Product1();
      }
      else {
        return new Product2();
      }
    }
  };
};

#endif // FACTORY_METHOD_H
