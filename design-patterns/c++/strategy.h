#ifndef STRATEGY_H_INCLUDED
#define STRATEGY_H_INCLUDED
#include "common.h"

// Enables an algorithm's behavior to be selected at runtime
namespace STRATEGY
{
    class IStrategy                                 // AnOperation
    {
    public:
        virtual void algorithm() = 0;               //      execute(int a, int b)
    };

    class ConcreteStrategy1 : public IStrategy      // Add : AnOperation
    {
    public:
        void algorithm();                           //      execute(int a, int b) { return a+b; }
    };
    class ConcreteStrategy2 : public IStrategy      // Subtract : AnOperation
    {
    public:
        void algorithm();                           //      execute(int a, int b) { return a-b; }
    };
    class ConcreteStrategy3 : public IStrategy      // Multiply : AnOperation
    {
    public:
        void algorithm();                           //      execute(int a, int b) { return a*b; }
    };

    class Context                                   // Shape
    {
    public:
        Context(IStrategy *pStrategy);
        void executeAlgorithm();                          //      Move (Point to)     {  Draw (black); current=to; Draw (white);  }
    private:
        IStrategy *_pStrategy;
    };

};
#endif // STRATEGY_H_INCLUDED
