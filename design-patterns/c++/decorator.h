#ifndef DECORATOR_H_INCLUDED
#define DECORATOR_H_INCLUDED
#include "common.h"

namespace DECORATOR
{
    class IComponent                            // Coffee (in thought)
    {
    public:
        virtual void someOperation() = 0;
    };
    class Component : public IComponent         // Coffee
    {
    public:
        void someOperation();                       // Coffee
    };

    class DecoratorBase : public IComponent     // Coffee Add-on (in thought)
    {
    public:
        DecoratorBase(IComponent *);
        void someOperation();
    protected:
        IComponent *_pIComponent;
    };
    class Decorator1 : public DecoratorBase     // Coffee with Milk
    {
    public:
        Decorator1(IComponent *);
        void someOperation();                       // Coffee
        void someOtherOperation1();                 // Milk
    };
    class Decorator2 : public DecoratorBase     // Coffee with Cream
    {
    public:
        Decorator2(IComponent *);
        void someOperation();                       // Coffee
        void someOtherOperation2();                 // Cream
    };

};

#endif // DECORATOR_H_INCLUDED
