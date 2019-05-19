#include "singleton.h"
using namespace SINGLETON;

void createAndCheckSame()
{
    cout << "creating 1st instance of singleton class.. ";
    Singleton *p1 = Singleton::getInstance();   cout << "instance address: " << p1 << endl;

    cout << "creating 2nd instance of singleton class.. ";
    Singleton *p2 = Singleton::getInstance();   cout << "instance address: " << p2 << endl;

    cout << "creating 3rd instance of singleton class.. ";
    Singleton *p3 = Singleton::getInstance();   cout << "instance address: " << p3 << endl;

    assert(p1 == p2); // This assertion should pass
    assert(p2 == p3); // This assertion should pass

    cout << "all instances of singleton class are same!" << endl;
}
void test_Singleton()
{
    cout << " -- test_Singleton -- " << endl;

    // cant create a direct object
    // Singleton s1;

    createAndCheckSame();
    Singleton::disposeInstance();
    createAndCheckSame();
    Singleton::disposeInstance();
    Singleton::disposeInstance(); // should not be a problem
    cout << endl;
}
