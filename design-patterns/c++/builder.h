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
            PART1, PART2, PART3, PART4
        };
        string part1, part2, part3, part4;
        void see();
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
        virtual void buildProductPart1(string partValue);
        virtual void buildProductPart2(string partValue);
        virtual void buildProductPart3(string partValue);
        virtual void buildProductPart4(string partValue);
        Product& getResult();
    private:
        Product product;
    };


    class Director
    {
    public:
        Director(AbstractBuilder &builder1);
        void Construct(enum Product::PartType partType, string partValue);
    private:
        AbstractBuilder &builder;
    };
}
#endif // BUILDER_H_INCLUDED
