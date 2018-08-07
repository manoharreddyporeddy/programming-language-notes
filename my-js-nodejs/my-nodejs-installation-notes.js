/*
============================
NODEJS
    SERVER
        Install nodejs server
            Install a
            LTS version like
            8.11.1 LTS
                https://nodejs.org/en/

    INSTALL NPM MODULES - GLOBAL (globally with -g parameter)

        Install the below (-g means globally)
            npm install eslint -g
            npm install nyc -g
            npm install mocha -g
============================
IDE & tools - (to write code, and tools to test code, and others that will help write better code)

> > Postman for windows 	: https://www.getpostman.com
> > SoapUI Open Source  	: https://www.soapui.org/downloads/soapui.html
> > Git for windows 		: https://git-scm.com/download/win
> > Notepad ++      		: https://notepad-plus-plus.org


> > VS - Microsoft Visual Studio (VS) Community edition
        https://www.visualstudio.com/vs/community/
            NOTE: select to include Nodejs while installing.

    VS - LATEST NODEJS IN VS
        Copy new nodejs into VS directory
        
        Copy all files
            From:
                    C:\Program Files\nodejs\
            To:
                    C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Web\External

> > VS Extensions:
        1. Install npm tools for VS Task Runner (to run test, link, etc. from within visualstudio)
            https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner
        2. Install FormatdocumentonSave tool so that VS formats your code after everytime you save.
            https://marketplace.visualstudio.com/items?itemName=mynkow.FormatdocumentonSave
        Restart visualstudio


============================

CREATE NODEJS PROJECT
    File > New Project > Node.js > Blank Node.js "Web Application"
        Name:      MyNodejsWebApp1
        Location:  C:\repo\my
            OK
    NOTE: If Node.js is not visible then reinstall community edition and select Nodejs while installing.

RUN NODEJS PROJECT
    Ctrl+ F5
        << This runs both
                server (black window) and
                client (browser) >>
============================
UNIT TESTING CODE
    INSTALL NPM MODULES - LOCAL (locally to project, NO -g parameter)
        Install the below, under test directory:
            cmd
            mkdir C:\repo\my\MyNodejsWebApp1\test
            cd    C:\repo\my\MyNodejsWebApp1\test
            npm install chai

============================
LINTING CODE
    eslint install above with -g is already done.

    NOTE: To disabling some ESLINT ERRORS IS AS BELOW (not recommended, but only in rare cases):
        Write below after the line that gave error "no-unused-vars"
        Example:
            let i = 0;        // eslint-disable-line no-unused-vars
============================

*/
