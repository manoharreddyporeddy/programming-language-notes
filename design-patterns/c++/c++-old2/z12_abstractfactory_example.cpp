#include "abstractfactory_example.h"

/*****************************
 * Example
 *****************************/
Button* WinFactory::createButton()
{
	return new WinButton();
}

Button* OSXFactory::createButton()
{
	return new OSXButton();
}

void WinButton::use()
{
	cout << "WinButton consumed" << endl;
}
void OSXButton::use()
{
	cout << "OSXButton consumed" << endl;
}
