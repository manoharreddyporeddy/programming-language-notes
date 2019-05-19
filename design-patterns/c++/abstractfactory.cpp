#include "abstractfactory.h"
using namespace ABSTRACT_FACTORY;

void Product1::use()
{
    cout << "Product1 consumed" << endl;
}
void Product2::use()
{
    cout << "Product2 consumed" << endl;
}

AbstractProduct* Factory1::createProduct()
{
    return new Product1();	// dynamic_cast <AbstractProduct*> ()
}
AbstractProduct* Factory2::createProduct()
{
    return new Product2();	// dynamic_cast <AbstractProduct*> ()
}
