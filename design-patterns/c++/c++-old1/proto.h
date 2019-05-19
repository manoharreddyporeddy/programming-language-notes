// --------------------------------------------------
class Prototype // abstract class
{
public:
    virtual ~Prototype() { } // virtual destructor bcoz 'Clone' returns 'ConcretePrototype' as 'Prototype'
    virtual Prototype* Clone() = 0; // Acts as a virtual copy constructor - clones itself
};
// ------------
class ConcretePrototype: public Prototype
{    // Does the Copy constructor need to be private (and so constructor in public)?
public:
    virtual Prototype* Clone()  // 'Clone' returns 'ConcretePrototype' as 'Prototype'
    {
        ConcretePrototype *pConcretePrototype = new ConcretePrototype(*this); // calls Copy constructor
            // Some dynamic alloc operations for copy operations can go here?
        return dynamic_cast <Prototype*> ( pConcretePrototype );
    }
};
// --------------------------------------------------

void Test_Prototype()
{
    // Prototype
    ConcretePrototype *pConcretePrototype = new ConcretePrototype();
    // Client creates a new object by asking a 'Prototype' to clone itself
    Prototype *pConcretePrototype2 = pConcretePrototype->Clone();
}
