#include "singleton.h"
using namespace SINGLETON;

Singleton* Singleton::_pInstance = NULL;

Singleton::Singleton()
{
}

Singleton* Singleton::getInstance()
{
	if (_pInstance == NULL)
	{
		_pInstance = new Singleton();
        cout << ".. instance created .. ";
    }
	return _pInstance;

	// Below local 'static' object, for single-threaded env's?
	//	static Singleton s1;
	//	return &s1;
}

// implement call through atexit() for automatic delete?
void Singleton::disposeInstance()
{
	if (_pInstance != NULL)
	{
		delete _pInstance;
		_pInstance = NULL;
        cout << ".. instance deleted .. " <<endl <<endl;
    }
}
