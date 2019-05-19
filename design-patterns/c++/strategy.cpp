#include "strategy.h"
using namespace STRATEGY;
// --- IStrategy Method ---

void IStrategy::algorithm()
{
    cout << "in void IStrategy::algorithm()" << endl;
}


void ConcreteStrategy1::algorithm()
{
    cout << "in void ConcreteStrategy1::algorithm()" << endl;
}
void ConcreteStrategy2::algorithm()
{
    cout << "in void ConcreteStrategy2::algorithm()" << endl;
}
void ConcreteStrategy3::algorithm()
{
    cout << "in void ConcreteStrategy3::algorithm()" << endl;
}


Context::Context(IStrategy *pStrategy1)
{
    _pStrategy = pStrategy1;
}
void Context::executeAlgorithm()
{
    _pStrategy->algorithm();
}
