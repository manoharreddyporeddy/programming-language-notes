#include "proxy.h"

void test_Proxy()
{
    cout << " -- test_Proxy -- " << endl;
    using namespace PROXY;

    Subject *ps = new Proxy();
    ps->someOperation();

    cout << endl;
}
