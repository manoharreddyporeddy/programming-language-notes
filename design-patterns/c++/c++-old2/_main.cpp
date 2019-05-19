// designpatterns.cpp : Defines the entry point for the console application.



//  FACTORY METHOD

#include "11_factorymethod.h"

void test_FactoryMethod() {
  cout << " -- test_FactoryMethod -- " << endl;

  { using namespace FacMethod1;
  Factory::FactoryMethod(1);
  Factory::FactoryMethod(2);
  }
}


//  ABSTRACT FACTORY

#include "12_abstractfactory.h"

void test_AbstractFactory() {
  cout << " -- test_AbstractFactory -- " << endl;

  { using namespace ABSTRACT_FACTORY;

  AbstractFactory * p = NULL;
  int x = 1;
  if (x == 1) { p = new Factory1(); }
  else { p = new Factory2(); }
  p->createProduct();
  }

}


#include "13_singleton.h"

void test_Singleton() {
  cout << " -- test_Singleton -- " << endl;

  using namespace SINGLETON;

  Singleton *p1 = Singleton::getInstance();
  Singleton *p2 = Singleton::getInstance();
  assert(p1 == p2); // Pass, since both will be same

  /*
  // Singleton o;
  // Singleton o2 (*p1);
  // Singleton o22 = *p1;
  // *p1 = *p2;
  //      error C2248 : 'SINGLETON::Singleton::Singleton' :
  //      cannot access private member declared in class 'SINGLETON::Singleton
  */
}


//  BUILDER
#include "14_builder.h"

void test_Builder() {
  cout << " -- test_Builder -- " << endl;

  using namespace BUILDER;
  (new Director())->getCar();
}



#include "15_prototype.h"

void test_Prototype() {
  cout << " -- test_Prototype -- " << endl;

  using namespace PROTOTYPE;

  IPrototype *pI = new Prototype();
  Prototype *p = (Prototype *)pI->clone();
  delete pI;
  delete p;
}


#include "21_proxy.h"

void test_Proxy() {
  cout << " -- test_Proxy -- " << endl;

  using namespace PROXY;

  Subject *p1 = new Proxy();
  p1->someOperation();
  p1->someOperation();
  delete p1;
}


#include "22_facade.h"

void test_Facade() {
  cout << " -- test_Facade -- " << endl;

  using namespace FACADE;

  (new Computer())->start();
}


#include "23_composite.h"

void test_Composite() {
  cout << " -- test_Composite -- " << endl;

  using namespace COMPOSITE;

  Composite *pC1 = new Composite();
  pC1->addChild(new Leaf());
  pC1->addChild(new Leaf());

  Composite *pC2 = new Composite();
  pC2->addChild(pC1);
  pC2->addChild(new Leaf());

  pC2->Draw();
}



#include "24_decorator.h"
void test_Decorator() {
  cout << " -- test_Decorator -- " << endl;

  using namespace DECORATOR;

  Coffee *pC = new Coffee();  cout << pC->get().c_str() << endl;
  MilkCoffee *pD1 = new MilkCoffee(pC);  cout << pD1->get().c_str() << endl;
}


#include "25_adapter.h"

void test_Adapter() {
  cout << " -- test_Adapter -- " << endl;

  using namespace ADAPTER;

  Client plug(new Adapter(new Adaptee()));
  plug.use();
}


#include "26_bridge.h"

void test_Bride() {
  cout << " -- test_Bride -- " << endl;

  using namespace BRIDGE;

  AbstractBridge p = AbstractBridge(new Bridge1());
  p.CallMethod1();
}



#include "31_template_method.h"

void test_Template_Method() {
  cout << " -- test_Template_Method -- " << endl;

  using namespace TEMPLATE_METHOD;

  IAbstractClass *p = new ConcreteClass();
  p->templateMethod();
}



#include "32_strategy.h"

void test_Strategy() {
  cout << " -- test_Strategy -- " << endl;

  using namespace STRATEGY;

  Context *pC = new Context(new ConcreteStrategy1());
  pC->executeAlgorithm();
}


#include "33_iterator.h"

void test_Iterator() {
  using namespace ITERATOR;

  // NameRepository<string> namesRepository;
  NameRepository<string> *namesRepository = new NameRepository<string>();

  for (IIterator<string> *iter = namesRepository->getIterator(); iter->hasNext();) {
    string name = (string)iter->next();
    cout << name.c_str();
  }
}

#include "34_command.h"

void test_Command() {
  using namespace COMMAND;

  string arg = "OFF";
  ISwitchable *lamp = (ISwitchable *)new Light();

  //Pass reference to instances of the Command objects to the switch
  Switch *switch1 = new Switch(
    (ICommand *)new OpenSwitchCommand(lamp),//Pass reference to the lamp instance to each command
    (ICommand *)new CloseSwitchCommand(lamp)
  );

  if (arg == "ON") { switch1->Close(); }  /* Switch (the Invoker) will invoke Execute() (the Command) on the command object - _closedCommand.Execute(); */
  else if (arg == "OFF") { switch1->Open(); }  /* Switch (the Invoker) will invoke the Execute() (the Command) on the command object - _openedCommand.Execute(); */
  else {}  /* Console.WriteLine("Argument \"ON\" or \"OFF\" is required."); */

}


/// other
// LAZY INITIALIZATION
#include "zlazy_initialization.h"

void test_LazyInitialization() {
  cout << " -- test_LazyInitialization -- " << endl;

  using namespace LAZY_INITIALIZATION;

  Object *p = LazyInitialization::createObjectInstance();
}


#include "35_memento.h"

void test_memento() {
  cout << " -- test_memento -- " << endl;

  using namespace MEMEMTO;

  Object *p = new Object("state1"); cout << p->current_state.c_str() << endl;
  p->current_state = "state2";      cout << p->current_state.c_str() << endl;
  p->Revert();                      cout << p->current_state.c_str() << endl;
}

int main(int argc, int *argv[]) {

  // 10____Creational_Patterns

  // test_FactoryMethod();
  // test_AbstractFactory();
  // test_Singleton();
  // test_Builder();
  // test_Prototype();


  // 20____Structural_Patterns

  // test_Proxy();
  // test_Facade();
  // test_Composite();
  // test_Decorator();
  // test_Adapter();
  // test_Bride();


  // 30____Behavioral_Patterns

  // test_Template_Method();
  // test_Strategy();
  // test_Iterator();
  // test_Command();
  test_memento();
  //  test_AbstractFactoryEx();
  //  test_LazyInitialization();

  return 0;
}
