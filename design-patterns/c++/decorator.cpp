#include "decorator.h"
using namespace DECORATOR;

// ------------------
void Component::someOperation()
{
    cout << "void Component::someOperation()        - Real Coffee" << endl;
}

// ------------------
DecoratorBase::DecoratorBase(IComponent *pIComponent)
{
    _pIComponent = pIComponent;
}
void DecoratorBase::someOperation()
{
    _pIComponent->someOperation();
}

// ------------------
Decorator1::Decorator1(IComponent *pIComponent) : DecoratorBase(pIComponent)
{
}
void Decorator1::someOperation()
{
    DecoratorBase::someOperation();
    someOtherOperation1();
}
void Decorator1::someOtherOperation1()
{
    cout << "void Decorator1::someOtherOperation1()     - with Milk" << endl;
}

// ------------------
Decorator2::Decorator2(IComponent *pIComponent) : DecoratorBase(pIComponent)
{
}
void Decorator2::someOperation()
{
    DecoratorBase::someOperation();
    someOtherOperation2();
}
void Decorator2::someOtherOperation2()
{
    cout << "void Decorator2::someOtherOperation2()     - with Cream" << endl;
}

// ------------------
