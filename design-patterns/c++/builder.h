#ifndef BUILDER_H_INCLUDED
#define BUILDER_H_INCLUDED
#include "common.h"

namespace BUILDER
{
class Product
{
public:
    enum PartType
    {
        PART1,
        PART2,
        PART3,
        PART4
    };
    string part1, part2, part3, part4;
    void see()
    {
        cout << "Product is built with: " << (part1 + " " + part2 + " " + part3 + " " + part4).c_str() << endl;
    }
};

// Abstract interface for creating objects (product).
class AbstractBuilder
{
public:
    virtual void buildProductPart1(string partValue) = 0;
    virtual void buildProductPart2(string partValue) = 0;
    virtual void buildProductPart3(string partValue) = 0;
    virtual void buildProductPart4(string partValue) = 0;
};

//	Constructs and assembles parts to build the objects.
class Builder : public AbstractBuilder
{
public:
    //	Constructs and assembles parts to build the objects.
    void Builder::buildProductPart1(string partValue)
    {
        product.part1 = partValue;
    }
    void Builder::buildProductPart2(string partValue)
    {
        product.part2 = partValue;
    }
    void Builder::buildProductPart3(string partValue)
    {
        product.part3 = partValue;
    }
    void Builder::buildProductPart4(string partValue)
    {
        product.part4 = partValue;
    }
    Product &Builder::getResult()
    {
        return product;
    }

private:
    Product product;
};

class Director
{
public:
    Director::Director(AbstractBuilder &builder1) : builder(builder1)
    {
    }
    void Construct(enum Product::PartType partType, string partValue)
    {
        switch (partType)
        {
        case Product::PART1:
            builder.buildProductPart1(partValue);
            break;
        case Product::PART2:
            builder.buildProductPart2(partValue);
            break;
        case Product::PART3:
            builder.buildProductPart3(partValue);
            break;
        case Product::PART4:
            builder.buildProductPart4(partValue);
            break;
        default:
            break;
        }
    }

private:
    AbstractBuilder &builder;
};
} // namespace BUILDER
#endif // BUILDER_H_INCLUDED
