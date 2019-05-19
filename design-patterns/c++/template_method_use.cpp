#include "template_method.h"

void test_Template_Method()
{
    cout << " -- test_Template_Method -- " << endl;
    using namespace TEMPLATE_METHOD;

    ConcreteClass *pTM = new ConcreteClass();
    // pTM->primitiveMethod();  // Ok, not so imporatant for now
    pTM->templateMethod();

    cout << endl;
}
