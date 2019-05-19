#ifndef FACTORY_METHOD__USING_SUBCLASSING_H_INCLUDED
#define FACTORY_METHOD__USING_SUBCLASSING_H_INCLUDED
#include "common.h"

namespace FACTORY_METHOD__USING_SUBCLASSING
{
	// Inheritance is involved
	// --------------------------------------------------

	class ObjectBase												// Example: Room
	{
		// public: virtual void someOperation(class ObjectBase* obj1) = 0;	// Example: connect rooms
	};
	class Object : public ObjectBase								// Example: Ordinary room
	{
	public:
		Object();
	};
	class SpecialObject : public ObjectBase							// Example: Magic room
	{
	public:
		SpecialObject();
	};


	class Container {												// Example: MazeGame
	public:
		Container();
	protected:
		virtual ObjectBase* createObject();	// Factory method
	};

	class SpecialContainer : Container {							// Example: MagicMazeGame
	protected:
		virtual ObjectBase* createObject(); // Factory method
	};
}

#endif // FACTORY_METHOD__USING_SUBCLASSING_H_INCLUDED
