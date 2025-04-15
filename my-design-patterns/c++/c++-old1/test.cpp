#include "test.h"
#include "singleton.h"
// #include "fm.h"
// #include "af.h"
#include "proto.h"
/*
int main()
{
    // Abstract Factory
    AppFramework *myApp = new Application;
    IDocument *pdoc = myApp->NewDocument();
    myApp->CloseDocument(pdoc);
    delete myApp;
    return 0;
}
*/

int main()
{
    Test_Prototype();
    // Test_FactoryMethod();
    // Test_AbstractFactory();
    return 0;
}

/*
int main()
{
    // Factory Method - example
    AppFramework *myApp = new Application;
    IDocument *pdoc = myApp->NewDocument();
    myApp->CloseDocument(pdoc);
    delete myApp;
    return 0;
}
*/

/*
void a()
{
}

int main()
{
    Singleton *sc1,*sc2;
    sc1 = Singleton::getInstance();
    cout <<sc1 <<endl;

    sc2 = Singleton::getInstance();
    cout <<sc2 <<endl;
 
    Singleton *p1 = Singleton::getInstance();
    Singleton *p2 = p1->getInstance();
    Singleton & ref = * Singleton::getInstance();

    cout <<p1 <<endl;
    cout <<p2 <<endl;
    cout <<&ref <<endl;

    // Singleton a = *(Singleton::getInstance());   // fails as CC is protected!
    // cout <<&a <<endl;
    onexit((onexit_t)a);
    return 0;
}
*/
/*
int main()
{
    OnlyOne a3;
    OnlyOne a1 = OnlyOne::getInstance();
    cout <<&a1 <<endl;
    OnlyOne a2 = OnlyOne::getInstance();
    cout <<&a2 <<endl;
    return 0;
}
*/