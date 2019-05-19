#ifndef ADAPTER_H_INCLUDED
#define ADAPTER_H_INCLUDED
#include "common.h"

/*
VERIFY: https://en.wikipedia.org/wiki/Adapter_pattern
*/

namespace ADAPTER {

  class Adaptee { // socket
  public:
    virtual void useTarget() { cout << "useTarget" << endl; } // terminal
  };

  class Adapter {               // plug
    Adaptee *_pAdaptee; // member or parent
  public:
    Adapter() {}
    Adapter(Adaptee *_pAdaptee1) { _pAdaptee = _pAdaptee1; }
    void use() { _pAdaptee->useTarget(); }
  };

  class Client : public Adapter { // RoundPinPlug
    Adapter *_pAdapter;
  public:
    Client(Adapter *_pAdapter1) { _pAdapter = _pAdapter1; }
    void use() { _pAdapter->use(); }
  };
};

#endif // ADAPTER_H_INCLUDED
