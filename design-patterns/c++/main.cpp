// designpatterns.cpp : Defines the entry point for the console application.

// creational patterns
// creational patterns
// creational patterns
// creational patterns
// creational patterns

/*
 *******************************************************************************************************************
 * SINGLETON
 *******************************************************************************************************************
 */

#include "headers/creational/1.singleton.h"
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

  cout << "\n";
}

/*
 *******************************************************************************************************************
 * FACTORY METHOD
 *******************************************************************************************************************
 */
#include "headers/creational/2.factorymethod_intfcimpl.h"
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

  cout << "\n";
}

#include "headers/creational/2.factorymethod_subclassing.h"
void test_FactoryMethod_Subclassing() {
  cout << " -- test_FactoryMethod_Subclassing -- \n";

  using namespace FACTORY_METHOD__USING_SUBCLASSING;
  Container *p1 = new Container();
  SpecialContainer *p2 = new SpecialContainer();

  cout << "\n";
}

/*
 *******************************************************************************************************************
 * ABSTRACT FACTORY
 *******************************************************************************************************************
 */
#include "headers/creational/3.abstractfactory.h"
void test_AbstractFactory() {
  cout << " -- test_AbstractFactory -- \n";

  using namespace ABSTRACT_FACTORY;
  (new Application())->createProduct()->use();

  cout << "\n";
}

/*
*******************************************************************************************************************
* BUILDER
*******************************************************************************************************************
*/
#include "headers/creational/4.builder.h"
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

  cout << "\n";
}

#include "headers/creational/5.prototype.h"
void test_Prototype() {
  cout << " -- test_Prototype -- \n";

  using namespace PROTOTYPE;

  ConcretePrototype *p1 = new ConcretePrototype();
  cout << "p1 values after new object:  state1: " << p1->getCalculatedState() << endl;
  p1->calculateState();
  cout << "p1 values after cal & set:   state1: " << p1->getCalculatedState() << endl;

  cout << "creating clone of p1 as p2..\n";
  // Client creates a new object by asking a 'Prototype' to clone itself
  ConcretePrototype *p2 = (ConcretePrototype *)p1->clone();
  cout << "p2 values after new object:  state1: " << p2->getCalculatedState() << endl;
  // p2 doesnt require to do same calculateState(), since same operation state is received from original object p1

  cout << "\n";
}

// structural patterns
// structural patterns
// structural patterns
// structural patterns
// structural patterns

#include "headers/structural/2.composite.h"
void test_Composite() {
  cout << " -- test_Composite -- \n";

  using namespace COMPOSITE;

  Leaf *pleaf1 = new Leaf();
  Leaf *pleaf2 = new Leaf();
  Leaf *pleaf3 = new Leaf();

  Composite *pcomposite1 = new Composite();
  pcomposite1->addChild(pleaf1);
  pcomposite1->addChild(pleaf2);

  Composite *pRoot_composite1 = new Composite();
  pRoot_composite1->addChild(pcomposite1);
  pRoot_composite1->addChild(pleaf3);

  pRoot_composite1->someOperation();

  cout << "\n";
}

#include "headers/structural/3.decorator.h"
void test_Decorator() {
  cout << " -- test_Decorator -- \n";

  using namespace DECORATOR;

  // IComponent *pC = new IComponent();   // error C2259 : 'DECORATOR::IComponent' : cannot instantiate abstract class

  IComponent *pC = new Component();
  // pC->someOperation(); // OK, if simple coffee is required

  // DecoratorBase *pf = new DecoratorBase();      //  error C2259 : 'DECORATOR::DecoratorBase' : cannot instantiate abstract class

  Decorator1 *pD1 = new Decorator1(pC);
  pD1->someOperation();

  Decorator2 *pD2 = new Decorator2(pC);
  pD2->someOperation();
}

/*
*******************************************************************************************************************
* LAZY INITIALIZATION
*******************************************************************************************************************
*/

#include "headers/aaa/lazy_initialization.h"
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

  cout << "\n";
}

#include "headers/aaa/proxy.h"
void test_Proxy() {
  cout << " -- test_Proxy -- \n";

  using namespace PROXY;

  Subject *ps = new Proxy();
  ps->someOperation();

  cout << "\n";
}

#include "headers/aaa/facade.h"
void test_Facade() {
  cout << " -- test_Facade -- \n";

  using namespace FACADE;

  Facade *pf = new Facade();
  pf->subSystemOperation();

  cout << "\n";
}

#include "headers/aaa/template_method.h"
void test_Template_Method() {
  cout << " -- test_Template_Method -- \n";

  using namespace TEMPLATE_METHOD;

  ConcreteClass *pTM = new ConcreteClass();
  // pTM->primitiveMethod();  // Ok, not so imporatant for now
  pTM->templateMethod();

  cout << "\n";
}

#include "headers/aaa/strategy.h"
void test_Strategy() {
  cout << " -- test_Strategy -- \n";

  using namespace STRATEGY;

  Context *pC = new Context(new ConcreteStrategy1());
  pC->executeAlgorithm();

  cout << "\n";
}

int main(int argc, char *argv[]) {
  // creational patterns
  // test_Singleton();
  // test_FactoryMethod_UsingInterfaceImpl();
  // test_FactoryMethod_Subclassing();
  // test_AbstractFactory();
  // test_Builder();
  // test_Prototype();

  // structural patterns
  // test_Composite();
  test_Decorator();

  // test_LazyInitialization();
  // test_Proxy();
  // test_Facade();
  // test_Template_Method();
  // test_Strategy();

  return 0;
}
