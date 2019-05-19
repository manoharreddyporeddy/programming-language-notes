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
#include "headers/builder.h"
void test_Builder() {
  cout << " -- test_Builder -- \n";

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
#include "headers/factorymethod_intfcimpl.h"
#include "headers/factorymethod_subclassing.h"
void test_FactoryMethod_UsingInterfaceImpl() {
  cout << " -- test_FactoryMethod_UsingInterfaceImpl -- \n";

  using namespace FACTORY_METHOD__USING_INTERFACE_IMPL;
  // User knows abstract factory, concrete factory, & abstract product,  but not concrete product
  //		gets abstract product from concrete factory
  Factory *pF = new Factory();                // Example: SedanFactory
  AbstractProduct *pAP = pF->factoryMethod(); // Example: Car
  pAP->use();                                 // User uses  concrete product without knowning it		// Example: getCarType gives Sedan
  delete pAP;
  delete pF;

  cout << endl;
}

void test_FactoryMethod_Subclassing() {
  cout << " -- test_FactoryMethod_Subclassing -- \n";

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
/*
#include "headers/abstractfactory_example.h"
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
cout << " -- test_AbstractFactoryEx -- \n";
//	Assume this is also framework code
(new myConslApp())->run();
(new myGUIApp())->run();

cout << endl;
}
*/

#include "headers/abstractfactory.h"
void test_AbstractFactory() {
  cout << " -- test_AbstractFactory -- \n";

  using namespace ABSTRACT_FACTORY;

  (new Application())->createProduct()->use();

  cout << endl;
}

/*
 *******************************************************************************************************************
 *******************************************************************************************************************
 */

#include "headers/singleton.h"
void test_Singleton() {
  using namespace SINGLETON;

  // cant create a direct object
  // Singleton s1;

  cout << " -- test_Singleton -- \n\n";

  cout << "creating 1st instance of singleton class.. ";
  Singleton *p1 = Singleton::getInstance();
  cout << "instance address: " << p1 << endl;

  cout << "creating 2nd instance of singleton class.. ";
  Singleton *p2 = Singleton::getInstance();
  cout << "instance address: " << p2 << endl;

  assert(p1 == p2); // This assertion should pass

  cout << "all instances of singleton class are same!\n";

  Singleton::disposeInstance();
  Singleton::disposeInstance(); // should not be a problem

  cout << endl;
}

#include "headers/prototype.h"
void test_Prototype() {
  cout << " -- test_Prototype -- \n";
  using namespace PROTOTYPE;

  ConcretePrototype1 *p1 = new ConcretePrototype1();
  cout << "p1 values after new object:  state1: " << p1->getState1() << ", state2: " << p1->getState2() << endl;

  p1->calcAndStoreState1();
  p1->setState2(10.0);
  cout << "p1 values after cal & set:   state1: " << p1->getState1() << ", state2: " << p1->getState2() << endl;

  cout << "creating clone of p1 as p2..\n";

  // Client creates a new object by asking a 'Prototype' to clone itself
  ConcretePrototype1 *p2 = (ConcretePrototype1 *)p1->clone();
  cout << "p2 values after new object:  state1: " << p2->getState1() << ", state2: " << p2->getState2() << endl;
  // p2 doesnt require to do same calcAndStoreState(), since same operation state is received from original object p1

  cout << endl;
}

#include "headers/lazy_initialization.h"
void test_LazyInitialization() {
  cout << " -- test_LazyInitialization -- \n";
  using namespace LAZY_INITIALIZATION;

  cout << "Number of objects: " << LazyInitialization::getCount() << endl;

  Object *p1 = LazyInitialization::createObjectInstance();
  cout << " address: " << p1 << endl;
  cout << "Number of objects: " << LazyInitialization::getCount() << endl;

  Object *p2 = LazyInitialization::createObjectInstance();
  cout << " address: " << p2 << endl;
  cout << "Number of objects: " << LazyInitialization::getCount() << endl;

  LazyInitialization::disposeObjectInstance(&p1);
  LazyInitialization::disposeObjectInstance(&p2);
  LazyInitialization::disposeObjectInstance(&p1); // shud be safe
  LazyInitialization::disposeObjectInstance(&p2); // shud be safe

  cout << endl;
}

#include "headers/proxy.h"
void test_Proxy() {
  cout << " -- test_Proxy -- \n";

  using namespace PROXY;

  Subject *ps = new Proxy();
  ps->someOperation();

  cout << endl;
}

#include "headers/composite.h"
void test_Composite() {
  cout << " -- test_Composite -- \n";
  using namespace COMPOSITE;

  Leaf *pleaf1 = new Leaf();
  Leaf *pleaf2 = new Leaf();

  Composite *pCompst = new Composite();
  pCompst->addChild(pleaf1);
  pCompst->addChild(pleaf2);

  Leaf *pleaf3 = new Leaf();

  Composite *pCompstRoot = new Composite();
  pCompstRoot->addChild(pCompst);
  pCompstRoot->addChild(pleaf3);

  pCompstRoot->someOperation();

  cout << endl;
}

#include "headers/facade.h"
void test_Facade() {
  cout << " -- test_Facade -- \n";

  using namespace FACADE;

  Facade *pf = new Facade();
  pf->subSystemOperation();

  cout << endl;
}

#include "headers/template_method.h"
void test_Template_Method() {
  cout << " -- test_Template_Method -- \n";

  using namespace TEMPLATE_METHOD;

  ConcreteClass *pTM = new ConcreteClass();
  // pTM->primitiveMethod();  // Ok, not so imporatant for now
  pTM->templateMethod();

  cout << endl;
}

#include "headers/strategy.h"
void test_Strategy() {
  cout << " -- test_Strategy -- \n";

  using namespace STRATEGY;

  Context *pC = new Context(new ConcreteStrategy1());
  pC->executeAlgorithm();

  cout << endl;
}

#include "headers/decorator.h"
void test_Decorator() {
  cout << " -- test_Decorator -- \n";

  using namespace DECORATOR;

  // IComponent *pC = new IComponent();   // error C2259 : 'DECORATOR::IComponent' : cannot instantiate abstract class
  Component *pC = new Component();
  // pC->someOperation(); // OK, if simple coffee is required
  // cout << endl;

  // DecoratorBase *pf = new DecoratorBase();      //  error C2259 : 'DECORATOR::DecoratorBase' : cannot instantiate abstract class
  Decorator1 *pD1 = new Decorator1((IComponent *)pC);
  pD1->someOperation();
  cout << endl;

  Decorator2 *pD2 = new Decorator2((IComponent *)pC);
  pD2->someOperation();
  cout << endl;
}

int main(int argc, char *argv[]) {
  // Creational patterns
  test_Singleton();
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
  // test_Strategy();

  return 0;
}
