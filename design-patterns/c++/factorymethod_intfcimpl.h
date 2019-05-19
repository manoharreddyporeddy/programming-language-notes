#ifndef FACTORY_METHOD_H_INCLUDED
#define FACTORY_METHOD_H_INCLUDED
#include "common.h"

namespace FACTORY_METHOD__USING_INTERFACE_IMPL
{
	// Inheritance is involved
	// --------------------------------------------------

	class AbstractProduct					// Example: Car,			IDocument
	{
	public:
		virtual ~AbstractProduct() { }
		virtual void use() = 0;				// Example: getCarType,		open, save, close
	};

	class Product : public AbstractProduct	// Example: Sedan,			Document
	{
	public:
		virtual void use();					// Example: getCarType,		open, save, close
	};


	// Define an interface for creating an object
	class AbstractFactory					// Example: CarFactory,		AppFramework
	{
	public:
		virtual AbstractProduct* factoryMethod() = 0;
		/* Example:
			virtual IDocument* CreateDocument() = 0;
			virtual void DestroyDocument(IDocument* pdoc) = 0;
			IDocument* NewDocument() { IDocument* p = CreateDocument(); p->open(); return p; }
			void CloseDocument(IDocument* pdoc) { pdoc->close(); DestroyDocument(pdoc); }
			*/
	};

	// but let the classes that implement the interface decide which class to instantiate
	class Factory : public AbstractFactory	// Example: SedanFactory,		Application
	{
	public:
		AbstractProduct* factoryMethod();
		/* Example:
			IDocument* CreateDocument() { return new Document(); }
			void DestroyDocument(IDocument* pdoc) { delete pdoc; }
			*/
	};
}

#endif // FACTORY_METHOD_H_INCLUDED

/*
NOTES:
	interface = abstract class, as pure virtual function exists
	class implements interface
*/
