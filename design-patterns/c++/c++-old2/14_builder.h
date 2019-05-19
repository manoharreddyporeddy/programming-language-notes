#ifndef BUILDER_H_INCLUDED
#define BUILDER_H_INCLUDED

#include "common.h"

namespace BUILDER {

  class Product {
  public:
    int part1;
  };

  class Builder {
  private:
    Product *p;
  public:
    Builder(int value1) {
      p = new Product();
      p->part1 = value1;
    }

    Product* buildCar() { return p; }
  };

  class Director {  // assembles
  public:
    Product* getCar() {
      Builder b(3);
      return b.buildCar();
    }
  };
}
#endif // BUILDER_H_INCLUDED
