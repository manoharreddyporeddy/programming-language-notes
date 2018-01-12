
let context = console;

context.log.verbose = context.log;
context.log.info = context.log;
context.log.error = context.error;

// 
// context.log.verbose = function () { };
// context.log.info = function () { };
// context.log = function () { };
