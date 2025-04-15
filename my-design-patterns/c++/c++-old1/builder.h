// --------------------------------------------------
class Product // Concrete
{
public:
    int Part1;
    int Part2;
};
// --------------------------------------------------
class Builder
{
public:
    virtual void BuildPart1(int nPartValue) = 0;
    virtual void BuildPart2(int nPartValue) = 0;
};
// ------------
class ConcreteBuilder: public Builder
{
    Product oProduct;
public:
    virtual void BuildPart1(int nPartValue)
    {    oProduct.Part1 = nPartValue;
    }
    virtual void BuildPart2(int nPartValue)
    {    oProduct.Part2 = nPartValue;
    }
    Product& GetResult()
    {    return oProduct;
    }
};
// --------------------------------------------------
class Director
{
    Builder &oBuilder;
public:
    Director(Builder &oBuilder1): oBuilder(oBuilder1) // Concrete Builder
    {
    }
    void Construct(int nPartNo, int nPartValue)
    {
        if (1 == nPartNo)
        {    oBuilder.BuildPart1(nPartValue);
        }
        else
        if (2 == nPartNo)
        {    oBuilder.BuildPart2(nPartValue);
        }
    }
};
// --------------------------------------------------

void Client_Builder()
{
    // Builder
    // Client creates Director object and configures with Builder object
    ConcreteBuilder oConcreteBuilder;
    Director oDirector( oConcreteBuilder );
    oDirector.Construct(1, 123);
    Product &p = oConcreteBuilder.GetResult();
}
