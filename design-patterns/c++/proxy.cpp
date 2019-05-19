#include "proxy.h"
using namespace PROXY;


void Proxy::someOperation()
{
    cout << "in Proxy::someOperation()" << endl;
    RealSubject *prs = new RealSubject();
    prs->someOperation();
}


void RealSubject::someOperation()
{
    // actual some operation takes place here
    cout << "in RealSubject::someOperation()" << endl;
}

