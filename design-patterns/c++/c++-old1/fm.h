// --------------------------------------------------
class AbstractProduct
{
public:
    virtual ~AbstractProduct() { } // virtual destructor bcoz 'FactoryMethod' returns 'ConcreteProduct' as 'AbstractProduct'
    virtual void oper() = 0;
};
// ------------
class ConcreteProduct: public AbstractProduct // 'FactoryMethod' returns 'ConcreteProduct' as 'AbstractProduct'
{
public:
    virtual void oper()
    {
    };
};
// --------------------------------------------------
class Creator // May or May not be Abstract
{
public:
    virtual AbstractProduct* FactoryMethod() = 0; // May contain default implementation
        // relies on its subclasses to return approp. 'ConcreteProduct' in their 'FactoryMethod'
};
// ------------
class ConcreteCreator: public Creator
{
public:
    virtual AbstractProduct* FactoryMethod()
    {
        ConcreteProduct *poConcreteProduct = new ConcreteProduct();
        return dynamic_cast <AbstractProduct*> ( poConcreteProduct );
        // subclass returns approp. 'ConcreteProduct'
    }
};
// --------------------------------------------------

void Test_FactoryMethod()
{
    // Factory Method
    // Concrete factory method used by client - Check
    ConcreteCreator *pC = new ConcreteCreator();
        AbstractProduct *pAP = pC->FactoryMethod();
        pAP->oper();
        delete pAP;
    delete pC;
}
