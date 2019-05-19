#ifndef ITERATOR_H_INCLUDED
#define ITERATOR_H_INCLUDED

#include "common.h"

namespace ITERATOR { // an iterator is used to traverse a container & access the container's elements

  template <class T>
  class IIterator {
  public:
    virtual bool hasNext() = 0;
    virtual T next() = 0;
  };

  template <class T>
  class IContainer {
  public:
    virtual IIterator<T>* getIterator() = 0;
  };

  template <class T>
  class NameRepository : IContainer<T> {

    template <class T>
    class NameIterator : IIterator<T> {
      size_t index;
      vector<T> *pnames;
    public:
      NameIterator(vector<T> *pnames1) { pnames = pnames1; }
      bool hasNext() {
        if (index < pnames->size()) { return true; }
        else { return false; }
      }
      T next() {
        if (this->hasNext()) { return (*pnames)[index++]; }
        return "";
      }
    };

    vector<T> names;
  public:
    NameRepository() { names = { "Robert" , "John" ,"Julie" , "Lora" }; }
    IIterator<T>* getIterator() { return (IIterator<T>*)new NameIterator<T>(&names); }

  };
}

#endif // ITERATOR_H_INCLUDED
