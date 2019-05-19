#ifndef STRATEGY_H_INCLUDED
#define STRATEGY_H_INCLUDED
#include "../common.h"

//      behavior pattern.
// In Strategy pattern
//      a class behavior or its algorithm can be changed at run time
//
//      we create objects which represent
//          various strategies and
//          a context object
//              whose behavior varies as per its strategy object.
//
//          The strategy object
//              changes the executing algorithm
//                  of the context object.
//

// Enables an algorithm's behavior to be selected at runtime
namespace STRATEGY {

// MathOperation
class IStrategy {
  public:
  // void IStrategy::algorithm() { cout << "in void IStrategy::algorithm()\n"; }
  virtual void algorithm() = 0; //      execute(int a, int b)
};

// Add : MathOperation
class ConcreteStrategy1 : public IStrategy {
  public:
  void algorithm() { cout << "in void ConcreteStrategy1::algorithm()\n"; }
  //      execute(int a, int b) { return a+b; }
};
// Subtract : MathOperation
class ConcreteStrategy2 : public IStrategy {
  public:
  void algorithm() { cout << "in void ConcreteStrategy2::algorithm()\n"; }
  //      execute(int a, int b) { return a-b; }
};

// Shape
class Context {
  public:
  Context(IStrategy *pStrategy1) { _pStrategy = pStrategy1; }
  void executeAlgorithm() { _pStrategy->algorithm(); }

  private:
  IStrategy *_pStrategy;
};

};     // namespace STRATEGY
#endif // STRATEGY_H_INCLUDED
