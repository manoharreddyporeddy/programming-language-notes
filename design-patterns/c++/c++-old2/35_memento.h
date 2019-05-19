#ifndef MEMEMTO_H_INCLUDED
#define MEMEMTO_H_INCLUDED

#include "common.h"

namespace MEMEMTO {
  class Memento
  {
    string state;
  public:
    Memento(string str1) { this->state = str1; }
    string get() { return state; }
  };

  class Object {
    Memento *MyMemento;

  public:
    string current_state;

    Object(string state1) {
      this->current_state = state1;
      this->MyMemento = new Memento(state1);
    }
    void Save(string state1) {
      this->current_state = state1;
      this->MyMemento = new Memento(state1);
    }
    void Revert() {
      this->current_state = this->MyMemento->get();
    }
  };

}
#endif // MEMEMTO_H_INCLUDED
