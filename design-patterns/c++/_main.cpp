// designpatterns.cpp : Defines the entry point for the console application.

/*
*******************************************************************************************************************
* LAZY INITIALIZATION
*******************************************************************************************************************
*/


/*
*******************************************************************************************************************
* BUILDER
*******************************************************************************************************************
*/
#include "builder.h"

void test_Builder()
{
    cout << " -- test_Builder -- " << endl;
    using namespace BUILDER;

    // Builder
    // Client creates Director object and configures with Builder object
    Builder concreteBuilder;

    Director director(concreteBuilder);

    director.Construct(Product::PART1, "Part 1");
    director.Construct(Product::PART2, "Part 2");
    // director.Construct(Product::PART3, "Part 3");
    director.Construct(Product::PART4, "Part 4");

    Product &p = concreteBuilder.getResult();
    p.see();

    cout << endl;
}


/*
 *******************************************************************************************************************
 * FACTORY METHOD
 *******************************************************************************************************************
 */
#include "factorymethod_intfcimpl.h"
#include "factorymethod_subclassing.h"

void test_FactoryMethod_UsingInterfaceImpl()
{
    cout << " -- test_FactoryMethod_UsingInterfaceImpl -- " << endl;
    using namespace FACTORY_METHOD__USING_INTERFACE_IMPL;
    // User knows abstract factory, concrete factory, & abstract product,  but not concrete product
    //		gets abstract product from concrete factory
    Factory *pF = new Factory();				// Example: SedanFactory
    AbstractProduct *pAP = pF->factoryMethod();	// Example: Car
    pAP->use(); // User uses  concrete product without knowning it		// Example: getCarType gives Sedan
    delete pAP;
    delete pF;

    cout << endl;
}

void test_FactoryMethod_Subclassing()
{
    cout << " -- test_FactoryMethod_Subclassing -- " << endl;
    using namespace FACTORY_METHOD__USING_SUBCLASSING;
    Container *p1 = new Container();
    SpecialContainer *p2 = new SpecialContainer();

    cout << endl;
}

/*
 *******************************************************************************************************************
 * ABSTRACT FACTORY
 *******************************************************************************************************************
 */
#include "abstractfactory.h"
/*
#include "abstractfactory_example.h"
// using namespace FACTORY_METHOD__USING_INTERFACE_IMPL;

// --- FRAMEWORK GENERATED CODE - START ---
//		when user chooses appname as 'myConslApp' for 'Application', and
//		when user chooses appname as 'myGUIApp' for 'GUIApplication'
//			these classese are framework created
class myConslApp : public ABSTRACT_FACTORY::Application
{
public:

// Assume this function is where framework allows user to write code here - see below for implementation
void run();
};

class myGUIApp : public ABSTRACT_FACTORY_EXAMPLE::GUIApplication
{
public:

// Assume this function is where framework allows user to write code here - see below for implementation
void run();
};
// --- FRAMEWORK GENERATED CODE - END ---

// --- USER CODE - START ---
// Concept
void myConslApp::run() // say this is where framework allows user to write code here
{
// user only knows  AbstractFactory & AbstractProduct  interfaces
ABSTRACT_FACTORY::AbstractProduct *pAP = this->createProduct();
pAP->use(); // User uses  concrete product without knowning the concrete factory & concrete product
delete pAP; pAP = NULL;
}

// Example
void myGUIApp::run() // say this is where framework allows user to write code here
{
// user only knows  AbstractFactory & AbstractProduct  interfaces
ABSTRACT_FACTORY_EXAMPLE::Button *pAP = this->createButton();
pAP->use(); // User uses  concrete product without known the concrete factory & concrete product
delete pAP; pAP = NULL;
}
// --- USER CODE - END ---

void test_AbstractFactoryEx()
{
cout << " -- test_AbstractFactoryEx -- " << endl;
//	Assume this is also framework code
(new myConslApp())->run();
(new myGUIApp())->run();

cout << endl;
}
*/

void test_AbstractFactory()
{
    using namespace ABSTRACT_FACTORY;
    cout << " -- test_AbstractFactory -- " << endl;

    (new Application())->createProduct()->use();

    cout << endl;
}

/*
 *******************************************************************************************************************
 *******************************************************************************************************************
 */

#include "singleton.h"
extern void test_Singleton();

#include "prototype.h"
extern void test_Prototype();

#include "lazy_initialization.h"
extern void test_LazyInitialization();
extern void test_Proxy();
extern void test_Composite();
extern void test_Facade();
extern void test_Decorator();
extern void test_Template_Method();
extern void test_Strategy();

int main(int argc, int *argv[])
{
    // Creational patterns
    // test_Singleton();
    // test_Prototype();
    // test_LazyInitialization();

    // test_AbstractFactory();
    // test_AbstractFactoryEx();
    // test_FactoryMethod_UsingInterfaceImpl();
    // test_FactoryMethod_Subclassing();
    // test_Builder();

    // test_Proxy();
    // test_Composite();
    // test_Facade();
    // test_Decorator();
    // test_Template_Method();
    test_Strategy();

    return 0;
}
