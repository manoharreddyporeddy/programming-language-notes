#ifndef TEMPLATE_METHOD_H_INCLUDED
#define TEMPLATE_METHOD_H_INCLUDED
#include "../common.h"

// behavior pattern

// In Template pattern
//    an abstract class exposes defined way(s)/template(s) to execute its methods.
//    Its subclasses can override the method implementation as per need but
//        the invocation is to be in the same way as defined by an abstract class.

namespace TEMPLATE_METHOD {
// In software engineering, the template method pattern is a behavioral design pattern that
//      defines the program skeleton of an algorithm in a method, called
//      template method, which defers some steps to subclasses.[1]
//          It lets one redefine certain steps of an algorithm without changing the algorithm's structure.[2]
//  This use of "template" is unrelated to C++ templates.

// Shape
class IAbstractClass {
  public:
  virtual void primitiveMethod1() = 0; //      Draw (Color c)
  virtual void primitiveMethod2() = 0; //      Draw (Color c)

  virtual void templateMethod() final { //      Move (Point to)     {  Draw (black); current=to; Draw (white);  }
    cout << "in void IAbstractClass::templateMethod()\n";
    primitiveMethod1();
    primitiveMethod2();
  }

  // TODO: add virtual destructor
};

// Circle : Shape
class ConcreteClass : public IAbstractClass {
  public:
  void primitiveMethod1() { cout << "in void ConcreteClass::primitiveMethod1()\n"; } // Draw (Color c)
  void primitiveMethod2() { cout << "in void ConcreteClass::primitiveMethod2()\n"; } // Draw (Color c)
};

};     // namespace TEMPLATE_METHOD
#endif // TEMPLATE_METHOD_H_INCLUDED
