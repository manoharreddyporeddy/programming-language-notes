# application-security

Service-to-service-Oauth2
using Azure-Active-Directory (AAD)

Explains how the “service to service oauth2” works
	which is explained here:
	Azure AD Service to Service Auth using OAuth2.0 (https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-service-to-service)

First **some simple terms**:
1. Authentication
    1. It is a way to check, if the given username & password is correct or not, to access something/ some resource.
    2. Example: 
        1. if resource is email, then gmail is a service, and you need user name and password to check your email, so you are being *“authenticated” via user name and password to access email*.
        2. Why this is required? Because your email should be accessed “only” by you, so your username and password helps in achieving that.
        3. Also, now a days, while you do login to Windows OS, a year ago, you can login with your email itself (like, outlook, hotmail, live.com), this is also* email** authentication to access your computer*
        4. Today I have seen, the newer OS does not believe that passwords are strong, it says people can guess it easily, so, now they are asking PIN, possibly a 4 digit PIN that will help in login to your computer, this is *PIN **authentication to access your computer*
2. Authorization
    1. It is a way to check, if you have correct access level, like, are you administrator (admin) user or normal user.
        1. Example:
        2. If you are able to *install *software like MS Office, MS Excel, etc. on Windows OS, then you are a power user OR a admin user, that is you have more privileges.
        3. However if you are a normal OR guest user, then you *can’t install *software in Windows OS, you can only *use *the software, for example you can view a MS Word document, and read a resume written in that. Here you have less privileges, you *can’t **install** *a software
        4. So, essentially, a normal OR guest user is *not authorized to install software*. An admin OR power user is authorized to install software. So, authorization is permissions, you either have less or more permissions to do certain actions.
3. Active Directory, AD is (Active Directory - Wikipedia (https://en.wikipedia.org/wiki/Active_Directory))
    1. This is where we have our usernames and passwords are stored, of user, of computer & other computers on network -of-computers-and-other-devices-like-printer.
    2. So, it can Authenticate & Authorize all users across all computers on network -of-computers-and-other-devices-like-printer.

Now
**the Problem:**
Assume, we have an application, say it is the *resource to be secured*, just like our email OR computer, etc.
1. This should be open to internet, so users can access.
2. But not all users on internet should be able to access it.
    1. Only few should be access it.
3. This application is our secured resource, that means it should not be compromised. That is, say, it should be locked safely.
4. Even if someone is able to find where it is, that is, it is compromised,
    1. then, when it is compromised, every customer should be *not* be affected, that is damage should be minimal.
    2. also, we should be able to secure it again, without much difficulty and immediately. That is, may be, we will change the lock very soon, so that it is not fully compromised

How to solve this?
**Answer:**
Ok, we have an application, which is the resource to be secured.
1. To be able to “open to internet, so users can access”, this application can have a URL, similar to github, yahoo mail, gmail, (like http://example.com/mySecureApplication (http://example.com/mySecureApplication)) so it can be accessed from internet. If you are using an Mobile App on phone/tab to access email, then that App uses gmail url behind the scenes
    1. so, point #1 of question above satisfied just by having above like URL.
2. “not all users on internet should be able to access it”, to do this, we can have a username & password for above URL, then only few select people who have that username and password can access.
    1. so, point #2 of question above is satisfied just by having a username and password.
3. point #3 of question is difficult to satisfy
    1. yes, we have user name & password, but we need to give to select users so only those can access
    2. however the username and password can be leaked by those users, so it is difficult to share the application username and password directly
    3. so point#3 of question is to be solved yet
4. point #4 of question is difficult to satisfy too
    1. because of point #3, a leak of user name and password will compromise the application, and 
    2. “when it is compromised, every customer should be *not* be affected, that is damage should be minimal” also can’t happen when application has a single user and password, for those select users. All of those select users will get affected if we have a single username and password.
    3. so point#4 of question is also to be solved yet

Assume to solve points 3 & 4, we can do below:
1. We have Application A to be secured
2. We have something called as App Registration
    1. this means, we can have
        1. a username & (this stays fixed)
        2. a password (this we can delete or generate many passwords)
3. Now assume we have:
    1. Application A
        1. tied to an App registration (AAppReg) (that is we have username (**resource**) and password)
        2. NOTE: to make sure our application stays secure, we will not use password, in fact we don’t need to generate it.
    2. Another App registration for finance department (FinanceTeamAppReg), so we separate username (**client ID 1**) and password (**client secret 1**) for this.
    3. Yet another App registration for IT department (ITTeamAppReg), so we separate another username (**client ID 2**) and password (**client secret 2**) for this.

Finally, we have
1. So, Application has a App Registration, this has only username/resource, not password
2. And, team1 has a App Registration, with username/clientid1, and password/clientsecret1
3. And, team2 has a App Registration, with username/clientid2, and password/clientsecret2
since, application, team1, team2 are all under same “active directory”/ house, we can access each other, so
1. Application/ resource has only username** (say A)**
2. using team1 username & password (clientid/clientsecret) you can access application/resource** (say B)**
3. and, using team2 username & password (clientid/clientsecret) you can access application/resource **(say C)**

now coming back to  #3 & #4 parts of question:
1. “secured resource should not be compromised. That is, say, it should be locked safely”
    1. obviously, from (**A**) above, we don’t have password for resource, so it is safe
2. “if compromised, every customer should be *not* be affected, that is damage should be minimal”
    1. this is achieved, from (**B & C**) because if username and password of B is leaked to internet, only B is affected, not C, so damage is only for B, not C, C team continues to work normally.
    2. also, “should be able to secure it again, without much difficulty and immediately”, so when B is compromised/leaked it’s password, we can delete that password, and regenerate it, so B will have new clientsecret.
Hope that helped.
