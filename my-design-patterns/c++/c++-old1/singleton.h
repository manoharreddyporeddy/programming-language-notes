#include <iostream.h>

class Singleton
{
    static Singleton *pInstance;
    Singleton()  { }
protected:
    Singleton(const Singleton&);
    Singleton& operator= (const Singleton&);
public:
    static Singleton* getInstance();
    // ~Singleton() { }    // Called ONLY by "delete"!
};

Singleton* Singleton::pInstance = NULL;
Singleton* Singleton::getInstance()
{
    if( !pInstance )
        pInstance = new Singleton();

    return pInstance;
}

/*
    static Singleton* getInstance();
    {
        static Singleton theSingleInstance; // if single threaded
        return theSingleInstance;
    }
};
*/