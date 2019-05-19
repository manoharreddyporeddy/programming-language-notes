#ifndef COMPOSITE_H_INCLUDED
#define COMPOSITE_H_INCLUDED
#include "common.h"
#include <list>

// distribution and location transparency
namespace COMPOSITE
{
    class IComposite                                // Picture
    {
    public:
        virtual void someOperation() = 0;           //      Draw
    };

    class Composite : public IComposite             // Picture
    {
    public:
        void addChild(IComposite *pIC);             //      Add a child (Square, Rectangle, Picture, etc.)
        void removeChild(IComposite *pIC);
        void someOperation();                       //      Draw

    private:
        std::list<IComposite *> children;

    };

    class Leaf : public IComposite                  // Line
    {
    public:
        void someOperation();                       //      Draw
    };


};
#endif // COMPOSITE_H_INCLUDED
