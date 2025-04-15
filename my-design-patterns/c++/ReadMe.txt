========================================================================
    CONSOLE APPLICATION : designpatterns Project Overview
========================================================================

Abstract factory
	Following
	http://en.wikipedia.org/wiki/Abstract_factory_pattern

	The abstract factory pattern provides a way
		to encapsulate a group of individual factories
			that have a common theme without specifying their concrete classes.
	In normal usage,
		the client software 
			creates a concrete implementation of the abstract factory and then 
			uses the generic interface of the factory
				to create the concrete objects that are part of the theme.
		The client doesn't know (or care) which concrete objects it gets from each of these internal factories, 
			since it uses only the generic interfaces of their products.
		This pattern separates the details of implementation of a set of objects from their general usage and 
			relies on object composition, as object creation is implemented in methods exposed in the factory interface.[2]

Factory Method
	Following
	http://en.wikipedia.org/wiki/Factory_method_pattern

	In class-based programming,
	the factory method pattern
		is a creational pattern which
			uses factory methods
			to deal with the problem of creating objects
				without specifying the exact class of object that will be created.
			This is done by creating objects via a factory method,
				which is either
					specified in an interface (abstract class) and
					implemented in implementing classes (concrete classes); 
						or
					implemented in a base class (optionally as a template method),
					which can be overridden when inherited in derived classes; rather than by a constructor.

	The factory method pattern should not be confused with the more general notion of factories and factory methods.
	The factory method pattern is the best-known use of factories and factory methods, 
		but not all uses of factory methods are examples of the factory method pattern
			only when inheritance is involved (a class implementing an interface, or derived class, implements a factory method)
				is it an example of the factory method pattern.
			More basic uses of factories are not examples of the factory method pattern, and 
				may instead be referred to as the factory pattern or a simple factory.
	
	Define an interface for creating an object, 
		but let the classes that implement the interface decide which class to instantiate.
	The Factory method lets a class defer instantiation to subclasses

Singleton
	Following: http://en.wikipedia.org/wiki/Singleton_pattern

	singleton pattern is a design pattern that 
		restricts the instantiation of a class to one object
	This is useful when exactly one object is needed to coordinate actions across the system.
	The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or 
		that restrict the instantiation to a certain number of objects.
		The term comes from the mathematical concept of a singleton.
Builder
	Following: http://en.wikipedia.org/wiki/Builder_pattern

	The intent of the Builder design pattern is to 
		separate the construction of a complex object 
			from its representation.
	By doing so, the 
		same construction process 
		can create different representations.
Prototype
	Following: http://en.wikipedia.org/wiki/Prototype_pattern
	prototype pattern
		is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
		This pattern is used to:
		* avoid subclasses of an   object creator   in the client application, like the abstract factory pattern does.
		* avoid the   inherent cost   of   
			creating a new object   
			in the standard way (e.g., using the 'new' keyword) 
			when it is prohibitively expensive for a given application.

lazy initialization
	Following: http://en.wikipedia.org/wiki/Lazy_initialization
	is the tactic of 
		delaying
			the creation of an object, 
			the calculation of a value, or 
			some other expensive process 
				until the first time it is needed.
	This is typically accomplished by maintaining a flag indicating whether the process has taken place.
		Each time the desired object is summoned, the flag is tested.
			If it is ready, it is returned.
			If not, it is initialized on the spot.
		In multithreaded code, access to the flag must be synchronized to guard against a race condition.







// -----------------------------------------------------------------------------------------------------------

AppWizard has created this designpatterns application for you.

This file contains a summary of what you will find in each of the files that
make up your designpatterns application.


designpatterns.vcxproj
    This is the main project file for VC++ projects generated using an Application Wizard.
    It contains information about the version of Visual C++ that generated the file, and
    information about the platforms, configurations, and project features selected with the
    Application Wizard.

designpatterns.vcxproj.filters
    This is the filters file for VC++ projects generated using an Application Wizard. 
    It contains information about the association between the files in your project 
    and the filters. This association is used in the IDE to show grouping of files with
    similar extensions under a specific node (for e.g. ".cpp" files are associated with the
    "Source Files" filter).

designpatterns.cpp
    This is the main application source file.

/////////////////////////////////////////////////////////////////////////////
Other standard files:

StdAfx.h, StdAfx.cpp
    These files are used to build a precompiled header (PCH) file
    named designpatterns.pch and a precompiled types file named StdAfx.obj.

/////////////////////////////////////////////////////////////////////////////
Other notes:

AppWizard uses "TODO:" comments to indicate parts of the source code you
should add to or customize.

/////////////////////////////////////////////////////////////////////////////
