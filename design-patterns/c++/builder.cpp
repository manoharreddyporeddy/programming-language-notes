#include "builder.h"
using namespace BUILDER;


void Product::see()
{
    cout << "Product is built with: " << (part1 + " " + part2 + " " + part3 + " " + part4).c_str() << endl;
}


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
Product& Builder::getResult()
{
    return product;
}


Director::Director(AbstractBuilder &builder1) : builder(builder1)
{
}

void Director::Construct(enum Product::PartType partType, string partValue)
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
