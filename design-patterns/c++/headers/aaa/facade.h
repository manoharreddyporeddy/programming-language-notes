#ifndef FACADE_H_INCLUDED
#define FACADE_H_INCLUDED
#include "../common.h"

namespace FACADE {
class Facade // Car
{
  public:
  void subSystemOperation() {
    //      constructCar from engine, body, accessories
    cout << "in Facade::subSystemOperation()\n";

    pss1 = new SubSystem1();
    pss2 = new SubSystem2();
    pss3 = new SubSystem3();

    pss1->subSystem1Operation();
    pss2->subSystem2Operation();
    pss3->subSystem3Operation();
  }

  private:
  class SubSystem1 // Engine
  {
public:
    void subSystem1Operation() {
      //      setEngine
      cout << "in SubSystem1::subSystem1Operation()\n";
    }
  };
  class SubSystem2 // Body
  {
public:
    void subSystem2Operation() {
      //      setBody
      cout << "in SubSystem2::subSystem2Operation()\n";
    }
  };
  class SubSystem3 // Accessories
  {
public:
    void subSystem3Operation() {
      //      setAccessories
      cout << "in SubSystem3::subSystem3Operation()\n";
    }
  };

  SubSystem1 *pss1;
  SubSystem2 *pss2;
  SubSystem3 *pss3;
};
};     // namespace FACADE
#endif // FACADE_H_INCLUDED
