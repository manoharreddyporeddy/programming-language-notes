#ifndef PROXY_H_INCLUDED
#define PROXY_H_INCLUDED
#include "common.h"

// distribution and location transparency
namespace PROXY
{
    class Subject                                       // Bank Account
    {
    public:
        virtual void someOperation() = 0;               //      deposit()
    };

    // proxy of Subject
    class Proxy : public Subject                        // Proxy Bank Account
    {
    public:
        // calls actual Subject's someOperation
        void someOperation();                           //      proxy deposit()
    };

    // the actual Subject
    class RealSubject : public Subject                  // Actual Bank Account
    {
    public:
        // actual Subject's someOperation               //      actual deposit()
        void someOperation();
    };

};
#endif // PROXY_H_INCLUDED
