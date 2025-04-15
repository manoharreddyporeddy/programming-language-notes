// designpatterns.cpp : Defines the entry point for the console application.
//

#include "abstractfactory.h"
#include "abstractfactory_example.h"

/*
 *******************************************************************************************************************
 * FRAMEWORK GENERATE CODE - START
 *******************************************************************************************************************
*/
// when user chooses appname as 'myApp' for 'Application', and
// when user chooses appname as 'myGUIApp' for 'GUIApplication'
//		these classese are framework created 
class myApp : public Application
{
public:

	// Assume this function is where framework allows user to write code here - see below for implementation
	void run(); 
};

class myGUIApp : public GUIApplication
{
public:

	// Assume this function is where framework allows user to write code here - see below for implementation
	void run();
};

// Assume this is also framework code
int main(int argc, int *argv[])
{
	(new myApp())->run();
	(new myGUIApp())->run();

	return 0;
}
/*
*******************************************************************************************************************
* FRAMEWORK GENERATE CODE - END
*******************************************************************************************************************
*/



/*
*******************************************************************************************************************
* USER CODE - START
*******************************************************************************************************************
*/

// Concept
void myApp::run() // say this is where framework allows user to write code here
{
	// user only knows    AbstractFactory & AbstractProduct    interfaces
	AbstractProduct *pAP = this->createProduct();
	pAP->use(); // User uses  concrete product   without known the   concrete factory & concrete product
	delete pAP; pAP = NULL;
}

// Example
void myGUIApp::run() // say this is where framework allows user to write code here
{
	// user only knows    AbstractFactory & AbstractProduct    interfaces
	Button *pAP = this->createButton();
	pAP->use(); // User uses  concrete product   without known the   concrete factory & concrete product
	delete pAP; pAP = NULL;
}

/*
*******************************************************************************************************************
* USER CODE - END
*******************************************************************************************************************
*/
