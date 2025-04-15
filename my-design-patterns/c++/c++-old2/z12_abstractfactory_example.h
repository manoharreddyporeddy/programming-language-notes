#ifndef ABSTRACT_FACTORY_EX_H_INCLUDED
#define ABSTRACT_FACTORY_EX_H_INCLUDED

#include "iostream"
using namespace std;

/*
*************************************************************************************************
* Example
*************************************************************************************************
*/

// an abstract product
class Button
{
public:
virtual ~Button() { }
virtual void use() = 0;
};


// an abstract facory
class GUIFactory
{
public:
	virtual Button* createButton() = 0;
};


// factory1 of product1
class WinFactory : public GUIFactory
{
public:
	virtual Button* createButton(); // returns 'Product1' as 'AbstractProduct'
};
// factory2 of product2
class OSXFactory : public GUIFactory
{
public:
	virtual Button* createButton(); // returns 'Product2' as 'AbstractProduct'
};


// a product1
class WinButton : public Button
{
public:
virtual void use();
};
// a product2
class OSXButton : public Button
{
public:
virtual void use();
};

#define USE_FACTORY_DEPENDING_ON_USECASE 1
#ifdef USE_FACTORY_DEPENDING_ON_USECASE
class GUIApplication : public WinFactory
#else
class GUIApplication : public OSXFactory
#endif
{
};

/***************************************************************************************************/

#endif // ABSTRACT_FACTORY_EX_H_INCLUDED
