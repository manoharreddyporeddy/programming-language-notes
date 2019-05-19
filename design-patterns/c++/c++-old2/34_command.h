#ifndef COMMAND_H_INCLUDED
#define COMMAND_H_INCLUDED

#include "common.h"

namespace COMMAND {   // provides truly decoupled architecture

  class ISwitchable {
  public:
    virtual void PowerOn() = 0;
    virtual void PowerOff() = 0;
  };
  class Light : ISwitchable {         // Receiver
  public:
    void PowerOn() { }
    void PowerOff() { }
  };

  class ICommand {
  public:
    virtual void Execute() = 0;
  };
  class OpenSwitchCommand : ICommand {      // ConcreteCommand #2
    ISwitchable *_switchable;
  public:
    OpenSwitchCommand(ISwitchable *switchable1) { _switchable = switchable1; }
    void Execute() { _switchable->PowerOff(); }
  };
  class CloseSwitchCommand : ICommand {     // ConcreteCommand #1
    ISwitchable *_switchable;
  public:
    CloseSwitchCommand(ISwitchable *switchable1) { _switchable = switchable1; }
    void Execute() { _switchable->PowerOn(); }
  };

  class Switch {                      // Invoker
  public:
    ICommand *_openedCommand, *_closedCommand;
    Switch(ICommand *openedCommand1, ICommand *closedCommand1) {
      this->_openedCommand = openedCommand1;
      this->_closedCommand = closedCommand1;
    }
    void Open() { this->_openedCommand->Execute(); }
    void Close() { this->_closedCommand->Execute(); }
  };
};

#endif // COMMAND_H_INCLUDED
