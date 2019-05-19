#ifndef PROXY_H_INCLUDED
#define PROXY_H_INCLUDED

#include "common.h"

namespace PROXY {

  class Subject {
  public:
    virtual void someOperation() = 0;
  };

  class Real : public Subject {                     // hide real
  public:
    void someOperation() { }
  };

  class Proxy : public Subject {
    Real *p_real;
  public:
    Proxy() { p_real = NULL; }
    void someOperation() {
      if (p_real == NULL) {
        p_real = new Real();  // create real once 1st time
      }
      p_real->someOperation();
    }
  };
};

#endif // PROXY_H_INCLUDED

/*
Notes:
A proxy may hide information about the real object to the client.
A proxy may perform optimization like on demand loading.
A proxy may do additional house - keeping job like audit tasks.
Proxy design pattern is also known as surrogate design pattern.
*/
