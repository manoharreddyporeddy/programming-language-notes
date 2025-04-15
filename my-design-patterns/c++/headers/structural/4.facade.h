#ifndef FACADE_H_INCLUDED
#define FACADE_H_INCLUDED
#include "../common.h"

//  structural pattern as this pattern adds an interface to existing system to hide its complexities
// Facade pattern
//    hides the complexities of the system and
//    provides an interface to the client
//      using which the client can access the system.
// This pattern involves
//    a single class
//      which provides
//        simplified methods required by client and
//        delegates calls to methods of existing system classes.

namespace FACADE {
class Facade {
  // Car
  public:
  void doSubsystemOperations() {
    //      constructCar from engine, body, accessories
    cout << "in Facade::doSubsystemOperations()\n";

    pss1 = new Subsystem1();
    pss2 = new Subsystem2();
    pss3 = new Subsystem3();

    pss1->operation1();
    pss2->operation2();
    pss3->operation3();
  }

  private:
  class Subsystem1 {
    // Engine
public:
    void operation1() { //      setEngine
      cout << "in Subsystem1::operation1()\n";
    }
  };
  class Subsystem2 {
    // Body
public:
    void operation2() { //      setBody
      cout << "in Subsystem2::operation2()\n";
    }
  };
  class Subsystem3 {
    // Accessories
public:
    void operation3() { //      setAccessories
      cout << "in Subsystem3::operation3()\n";
    }
  };

  Subsystem1 *pss1;
  Subsystem2 *pss2;
  Subsystem3 *pss3;
};
};     // namespace FACADE
#endif // FACADE_H_INCLUDED
