#ifndef SINGLETON_H_INCLUDED
#define SINGLETON_H_INCLUDED
#include "common.h"

namespace SINGLETON
{
	class Singleton												// Example: Room
	{
	public:
		static Singleton* getInstance();
		static void disposeInstance();
	private:
		Singleton();
		Singleton(const Singleton&);				// looks no need of copy cons implementation
		Singleton& operator= (const Singleton&);	// looks no need of asssignment operator implementation

		static Singleton *_pInstance;
	};
}
#endif // SINGLETON_H_INCLUDED
