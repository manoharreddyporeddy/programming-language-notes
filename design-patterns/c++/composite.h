#ifndef COMPOSITE_H_INCLUDED
#define COMPOSITE_H_INCLUDED
#include "common.h"
#include <list>

// distribution and location transparency
namespace COMPOSITE
{
class IComposite // Picture
{
public:
    virtual void someOperation() = 0; //      Draw
};

class Composite : public IComposite // Picture
{
public:
    void addChild(IComposite *pIC) //      Add a child (Square, Rectangle, Picture, etc.)
    {
        cout << "in Composite::addChild(IComposite *pIC)" << endl;
        children.push_back(pIC);
    }
    void removeChild(IComposite *pIC)
    {
        cout << "in Composite::removeChild(IComposite *pIC)" << endl;
        children.remove(pIC);
    }
    void someOperation() //      Draw
    {
        cout << "in Composite::someOperation()" << endl;
        list<IComposite *>::iterator itr;
        for (itr = children.begin(); itr != children.end(); itr++)
        {
            ((IComposite *)*itr)->someOperation();
        }
    }

private:
    std::list<IComposite *> children;
};

class Leaf : public IComposite // Line
{
public:
    void someOperation() //      Draw
    {
        cout << "in Leaf::someOperation()" << endl;
    }
};

};     // namespace COMPOSITE
#endif // COMPOSITE_H_INCLUDED
