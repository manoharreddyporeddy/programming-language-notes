// --------------------------------------------------
class AbstractProduct
{
public:
    virtual ~AbstractProduct() { } // virtual destructor bcoz 'CREATEProduct' returns 'ConcreteProduct' as 'AbstractProduct'
    virtual void oper() = 0;
};
// ------------
class ConcreteProduct: public AbstractProduct
{
public:
    virtual void oper()
    {
    };
};
// --------------------------------------------------
class AbstractFactory
{
public:
    virtual AbstractProduct* CREATEProduct() = 0;
};
// ------------
class ConcreteFactory: public AbstractFactory
{
public:
    virtual AbstractProduct* CREATEProduct() // 'CREATEProduct' returns 'ConcreteProduct' as 'AbstractProduct'
    {
        ConcreteProduct *poConcreteProduct = new ConcreteProduct();
        return dynamic_cast <AbstractProduct*> ( poConcreteProduct );
        // subclass creates approp. 'ConcreteProduct'
    }
};
// --------------------------------------------------

void Test_AbstractFactory()
{
    // Abstract Factory
    // Only AbstractFactory & AbstractProduct interfaces must be used by client
    AbstractFactory *pAF = NULL;
        AbstractProduct *pAP = pAF->CREATEProduct();
        pAP->oper();
        delete pAP;
}
