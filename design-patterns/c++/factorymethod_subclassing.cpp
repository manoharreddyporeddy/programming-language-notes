#include "factorymethod_subclassing.h"
using namespace FACTORY_METHOD__USING_SUBCLASSING;

//	return new Product();	// dynamic_cast <AbstractProduct*> ()
Object::Object()               { cout << "object created" << endl; };			// TODO: this is      called when SpecialObject is created
SpecialObject::SpecialObject() { cout << "special object created" << endl; };	// TODO: this is  not called when SpecialObject is created

// Factory method
ObjectBase* Container::createObject() {
	return new Object();
}

// Factory method
ObjectBase* SpecialContainer::createObject() {
	return new SpecialObject(); // // subclass must invoke the inherited constructor
}

Container::Container() {
	ObjectBase *obj1 = this->createObject();
	ObjectBase *obj2 = this->createObject();
	/* Example:
	* constructor here can be is a template method, that makes some common logic, like:
	*		Create 2 rooms (Normal Or Special depending on which [sub]class is calling)
	*		connect rooms, add them to the game(Normal Or Special)
	*/
}
