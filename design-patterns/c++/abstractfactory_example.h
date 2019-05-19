#ifndef ABSTRACT_FACTORY_EXAMPLE_H_INCLUDED
#define ABSTRACT_FACTORY_EXAMPLE_H_INCLUDED
#include "common.h"
// Example

namespace ABSTRACT_FACTORY_EXAMPLE
{
    // an abstract product
    class Button
    {
    public:
        virtual ~Button() { }
        virtual void use() = 0;
    };

    class WinButton : public Button
    {
    public:
        virtual void use();
    };

    class OSXButton : public Button
    {
    public:
        virtual void use();
    };



    // an abstract factory
    class GUIFactory
    {
    public:
        virtual Button* createButton() = 0;
    };

    class WinFactory : public GUIFactory
    {
    public:
        virtual Button* createButton(); // returns 'Product1' as 'AbstractProduct'
    };

    class OSXFactory : public GUIFactory
    {
    public:
        virtual Button* createButton(); // returns 'Product2' as 'AbstractProduct'
    };



#define USE_FACTORY_DEPENDING_ON_USECASE 1
#ifdef USE_FACTORY_DEPENDING_ON_USECASE
    class GUIApplication : public WinFactory
#else
    class GUIApplication : public OSXFactory
#endif
    {
    };

}
#endif // ABSTRACT_FACTORY_EXAMPLE_H_INCLUDED
