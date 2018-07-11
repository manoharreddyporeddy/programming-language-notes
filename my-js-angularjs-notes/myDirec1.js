/*
 *
 * https://angular.io/guide/ajs-quick-reference
 *
 *

 AngularJS Directive
 AngularJS lets you extend HTML with new attributes called Directives.
 
 AngularJS has a set of built-in directives to add functionality to your application.
 https://www.w3schools.com/angular/angular_ref_directives.asp
 use the module to add your own directives to your applications

 New directives are created by using the .directive function.

 */

app.directive("myCustomDirective1", function() {
  return {
    template: "I was made in a directive constructor 1! ..... "
  };
});

app.directive("myCustomDirective2", function() {
  return {
    template: "I was made in a directive constructor 2! ..... "
  };
});

/*
 restrict

 restrict your directives to only be invoked by some of the methods.

 By adding a restrict property with the value "A", the directive can only be invoked by attributes:

 The legal restrict values are:

 ** default the value is EA

 E for Element name - default
 A for Attribute    - also default  => both Element names and attribute names can invoke the directive
 C for Class
 M for Comment
 */

app.directive("myCustomDirective3", function() {
  return {
    restrict: "C",
    template: "I was made in a directive constructor 3! ..... "
  };
});

app.directive("myCustomDirective4", function() {
  //  NOTE: *********** not working ***********

  return {
    restrict: "M",
    replace: true,
    template: "I was made in a directive constructor 4! ..... "
  };
});

app.directive("w3TestDirective", function() {
  //  NOTE: *********** not working ***********

  return {
    restrict: "M",
    replace: true,
    template: "<h1>Made by a directive!</h1>"
  };
});
