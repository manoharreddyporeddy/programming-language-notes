#ifndef STRATEGY_H_INCLUDED
#define STRATEGY_H_INCLUDED

#include "common.h"

namespace STRATEGY {
  class IStrategy {
  public:
    virtual void algorithm() = 0; // {}
  };
  class ConcreteStrategy1 : public IStrategy {
  public:
    void algorithm() {}
  };
  class ConcreteStrategy2 : public IStrategy {
  public:
    void algorithm() {}
  };

  class Context {
  public:
    Context(IStrategy *pStrategy1) { _pStrategy = pStrategy1; }
    void executeAlgorithm() { _pStrategy->algorithm(); }
  private:
    IStrategy *_pStrategy;
  };
};
#endif // STRATEGY_H_INCLUDED
