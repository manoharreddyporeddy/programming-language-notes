#include "factorymethod_intfcimpl.h"
using namespace FACTORY_METHOD__USING_INTERFACE_IMPL;

AbstractProduct* Factory::factoryMethod()
{
	return new Product();	// dynamic_cast <AbstractProduct*> ()
}

void Product::use()
{
	cout << "Product consumed" << endl;
}
