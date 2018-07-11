/*
 AngularJS module define AngularJS application
 - created by using the AngularJS function angular.module
 - The module is a container for the different parts of an application.
 - The module is a container for the application controllers.
 - Now you can add controllers, directives, filters, and more, to your AngularJS application
 */
var app = angular.module('myApp', []); // myApp is HTML element in which the application will run.


/*
 The [] parameter in the module definition can be used to define dependent modules.
 Without the [] parameter, you are not creating a new module, but retrieving an existing one.
 */

app
    .run(function($rootScope) {
      $rootScope.color = '$rootScope color';
    });
