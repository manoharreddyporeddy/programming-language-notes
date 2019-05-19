#ifndef DECORATOR_H_INCLUDED
#define DECORATOR_H_INCLUDED
#include "common.h"

namespace DECORATOR
{
class IComponent // Coffee (in thought)
{
public:
    virtual void someOperation() = 0;
};
class Component : public IComponent // Coffee
{
public:
    void someOperation() // Coffee
    {
        cout << "void Component::someOperation()        - Real Coffee" << endl;
    }
};

class DecoratorBase : public IComponent // Coffee Add-on (in thought)
{
public:
    DecoratorBase(IComponent *pIComponent)
    {
        _pIComponent = pIComponent;
    }
    void someOperation()
    {
        _pIComponent->someOperation();
    }

protected:
    IComponent *_pIComponent;
};
class Decorator1 : public DecoratorBase // Coffee with Milk
{
public:
    Decorator1(IComponent *pIComponent) : DecoratorBase(pIComponent)
    {
    }
    void someOperation() // Coffee
    {
        DecoratorBase::someOperation();
        someOtherOperation1();
    }
    void someOtherOperation1() // Milk
    {
        cout << "void Decorator1::someOtherOperation1()     - with Milk" << endl;
    }
};
class Decorator2 : public DecoratorBase // Coffee with Cream
{
public:
    Decorator2(IComponent *pIComponent) : DecoratorBase(pIComponent)
    {
    }
    void someOperation() // Coffee
    {
        DecoratorBase::someOperation();
        someOtherOperation2();
    }
    void someOtherOperation2() // Cream
    {
        cout << "void Decorator2::someOtherOperation2()     - with Cream" << endl;
    }
};

}; // namespace DECORATOR

#endif // DECORATOR_H_INCLUDED
