#include "composite.h"
using namespace COMPOSITE;

// --- Leaf ---
void Leaf::someOperation()
{
    cout << "in Leaf::someOperation()" << endl;
}


// --- Composite ---
void Composite::addChild(IComposite *pIC)
{
    cout << "in Composite::addChild(IComposite *pIC)" << endl;
    children.push_back(pIC);
}
void Composite::removeChild(IComposite *pIC)
{
    cout << "in Composite::removeChild(IComposite *pIC)" << endl;
    children.remove(pIC);
}
void Composite::someOperation()
{
    cout << "in Composite::someOperation()" << endl;

    list<IComposite*>::iterator itr;
    for (itr = children.begin(); itr != children.end(); itr++)
    {
        ((IComposite*)*itr)->someOperation();
    }
}
