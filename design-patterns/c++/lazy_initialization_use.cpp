#include "lazy_initialization.h"
using namespace LAZY_INITIALIZATION;

void test_LazyInitialization()
{
    cout << " -- test_LazyInitialization -- " << endl;
    using namespace LAZY_INITIALIZATION;

    cout << "Number of objects: " << LazyInitialization::getCount() << endl;

    Object *p1 = LazyInitialization::createObjectInstance();    cout << " address: " << p1 << endl;
    cout << "Number of objects: " << LazyInitialization::getCount() << endl;

    Object *p2 = LazyInitialization::createObjectInstance();    cout << " address: " << p2 << endl;
    cout << "Number of objects: " << LazyInitialization::getCount() << endl;

    LazyInitialization::disposeObjectInstance(&p1);
    LazyInitialization::disposeObjectInstance(&p2);
    LazyInitialization::disposeObjectInstance(&p1); // shud be safe
    LazyInitialization::disposeObjectInstance(&p2); // shud be safe

    cout << endl;
}
