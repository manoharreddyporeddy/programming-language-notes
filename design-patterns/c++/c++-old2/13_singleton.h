#ifndef SINGLETON_H_INCLUDED
#define SINGLETON_H_INCLUDED

#include "common.h"

namespace SINGLETON {
  class Singleton {
  public:
    static Singleton* getInstance() {
      if (_p_only_instance == NULL) {
        _p_only_instance = new Singleton(); // lazy, created when this function is called
      }
      return _p_only_instance;
      //	static Singleton s1;    return &s1;     // threaded safe since C++11
    }
  private:
    Singleton() {}
  protected:
    Singleton(const Singleton&) {}
    Singleton& operator= (const Singleton&) {}
    static Singleton *_p_only_instance;
  };
}
#endif // SINGLETON_H_INCLUDED
