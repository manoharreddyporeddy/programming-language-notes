#include "composite.h"

void test_Composite()
{
    cout << " -- test_Composite -- " << endl;
    using namespace COMPOSITE;

    Leaf *pleaf1 = new Leaf();
    Leaf *pleaf2 = new Leaf();

    Composite *pCompst = new Composite();
    pCompst->addChild(pleaf1);
    pCompst->addChild(pleaf2);


    Leaf *pleaf3 = new Leaf();

    Composite *pCompstRoot = new Composite();
    pCompstRoot->addChild(pCompst);
    pCompstRoot->addChild(pleaf3);

    pCompstRoot->someOperation();

    cout << endl;
}
