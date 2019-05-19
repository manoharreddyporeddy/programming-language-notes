#ifndef STRATEGY_H_INCLUDED
#define STRATEGY_H_INCLUDED
#include "common.h"

// Enables an algorithm's behavior to be selected at runtime
namespace STRATEGY {
class IStrategy // AnOperation
{
public:
    virtual void algorithm() = 0; //      execute(int a, int b)
    // void IStrategy::algorithm()
    // {
    //     cout << "in void IStrategy::algorithm()\n";
    // }
};

class ConcreteStrategy1 : public IStrategy // Add : AnOperation
{
public:
    void algorithm() {
        //      execute(int a, int b) { return a+b; }
        cout << "in void ConcreteStrategy1::algorithm()\n";
    }
};
class ConcreteStrategy2 : public IStrategy // Subtract : AnOperation
{
public:
    void algorithm() {
        //      execute(int a, int b) { return a-b; }
        cout << "in void ConcreteStrategy2::algorithm()\n";
    }
};
class ConcreteStrategy3 : public IStrategy // Multiply : AnOperation
{
public:
    void algorithm() {
        //      execute(int a, int b) { return a*b; }
        cout << "in void ConcreteStrategy3::algorithm()\n";
    }
};

class Context // Shape
{
public:
    Context(IStrategy *pStrategy1) {
        _pStrategy = pStrategy1;
    }
    void executeAlgorithm() {
        //      Move (Point to)     {  Draw (black); current=to; Draw (white);  }
        _pStrategy->algorithm();
    }

private:
    IStrategy *_pStrategy;
};

};     // namespace STRATEGY
#endif // STRATEGY_H_INCLUDED
