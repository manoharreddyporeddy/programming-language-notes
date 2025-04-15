#ifndef PROXY_H_INCLUDED
#define PROXY_H_INCLUDED
#include "../common.h"

//      structural pattern.

// In proxy pattern,
//      a class represents functionality of another class.
//
//      we create object having original object to interface its functionality to outer world.

// ?? distribution and location transparency ??
namespace PROXY {

class Subject {
  // Bank Account
  public:
  virtual void someOperation() = 0; //      deposit()
};

class RealSubject : public Subject {
  // Actual Bank Account
  public:
  // actual Subject's someOperation               //      actual deposit()
  void someOperation() { // actual some operation takes place here
    cout << "in RealSubject::someOperation()\n";
  }
};

// proxy of Subject
class Proxy : public Subject { // ProxyImage is a a proxy class to reduce memory footprint of RealImage object file loading
  // Proxy Bank Account
  public:
  // calls actual Subject's someOperation
  void someOperation() { //      proxy deposit()
    cout << "in Proxy::someOperation()\n";
    RealSubject *prs = new RealSubject();
    prs->someOperation();
  }
};

};     // namespace PROXY
#endif // PROXY_H_INCLUDED
