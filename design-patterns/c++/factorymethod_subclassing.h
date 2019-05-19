#ifndef FACTORY_METHOD__USING_SUBCLASSING_H_INCLUDED
#define FACTORY_METHOD__USING_SUBCLASSING_H_INCLUDED
#include "common.h"

namespace FACTORY_METHOD__USING_SUBCLASSING
{
// Inheritance is involved
// --------------------------------------------------

class ObjectBase // Example: Room
{
	// public: virtual void someOperation(class ObjectBase* obj1) = 0;	// Example: connect rooms
};
class Object : public ObjectBase // Example: Ordinary room
{
public:
	//	return new Product();	// dynamic_cast <AbstractProduct*> ()
	Object() { cout << "object created" << endl; }; // TODO: this is      called when SpecialObject is created
};
class SpecialObject : public ObjectBase // Example: Magic room
{
public:
	SpecialObject() { cout << "special object created" << endl; }; // TODO: this is  not called when SpecialObject is created
};

class Container
{ // Example: MazeGame
public:
	Container()
	{
		ObjectBase *obj1 = this->createObject();
		ObjectBase *obj2 = this->createObject();
		/* Example:
	* constructor here can be is a template method, that makes some common logic, like:
	*		Create 2 rooms (Normal Or Special depending on which [sub]class is calling)
	*		connect rooms, add them to the game(Normal Or Special)
	*/
	}

protected:
	virtual ObjectBase *createObject() // Factory method
	{
		return new Object();
	}
};

class SpecialContainer : Container
{ // Example: MagicMazeGame
protected:
	virtual ObjectBase *createObject() // Factory method
	{
		return new SpecialObject(); // // subclass must invoke the inherited constructor
	}
};
} // namespace FACTORY_METHOD__USING_SUBCLASSING

#endif // FACTORY_METHOD__USING_SUBCLASSING_H_INCLUDED
