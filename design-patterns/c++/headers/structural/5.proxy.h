#ifndef PROXY_H_INCLUDED
#define PROXY_H_INCLUDED
#include "../common.h"

// distribution and location transparency
namespace PROXY {
class Subject // Bank Account
{
public:
    virtual void someOperation() = 0; //      deposit()
};

// the actual Subject
class RealSubject : public Subject // Actual Bank Account
{
public:
    // actual Subject's someOperation               //      actual deposit()
    void someOperation() {
        // actual some operation takes place here
        cout << "in RealSubject::someOperation()\n";
    }
};

// proxy of Subject
class Proxy : public Subject // Proxy Bank Account
{
public:
    // calls actual Subject's someOperation
    void someOperation() //      proxy deposit()
    {
        cout << "in Proxy::someOperation()\n";
        RealSubject *prs = new RealSubject();
        prs->someOperation();
    }
};

};     // namespace PROXY
#endif // PROXY_H_INCLUDED
