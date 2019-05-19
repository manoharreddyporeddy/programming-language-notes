#ifndef FACADE_H_INCLUDED
#define FACADE_H_INCLUDED
#include "common.h"

namespace FACADE
{
    class Facade                        // Car
    {
    public:
        void subSystemOperation();      //      constructCar from engine, body, accessories

    private:
        class SubSystem1                // Engine
        {
        public:
            void subSystem1Operation(); //      setEngine
        };
        class SubSystem2                // Body
        {
        public:
            void subSystem2Operation(); //      setBody
        };
        class SubSystem3                // Accessories
        {
        public:
            void subSystem3Operation(); //      setAccessories
        };

        SubSystem1 *pss1;
        SubSystem2 *pss2;
        SubSystem3 *pss3;
    };
};
#endif // FACADE_H_INCLUDED
