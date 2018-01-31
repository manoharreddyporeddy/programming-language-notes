
// ------------------------------
my-nodejs-notes.js
// ------------------------------
for (var i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}

for (let i = 1; i < 5; i++){
    setTimeout(() => { console.log(i); }, 1000);
}


// const
//    locks assignment
//    does not make immutable


// ...    the spread operator
//	spreads both array and object elements, can be used in wrapper [] and {}
function (...a) {
	console.log(a);
}


	
// ------------------------------
// azure-context-console-log-error.js
// ------------------------------
let context = console;

context.log.verbose = context.log;
context.log.info = context.log;
context.log.error = context.error;

// 
// context.log.verbose = function () { };
// context.log.info = function () { };
// context.log = function () { };


// ------------------------------
// date-time-timezone.js
// ------------------------------

var dateString = (new Date()).toString(); console.log(dateString);
// Fri Dec 29 2017 14:49:04 GMT+0530 (India Standard Time)

var UTCstring = (new Date()).toUTCString(); console.log(UTCstring);
// Fri, 29 Dec 2017 09:19:07 GMT

var ISOString = (new Date()).toISOString(); console.log(ISOString);
// 2017-12-29T09:18:43.180Z


// DON'T USE THIS ONE - BEGIN
// Note: toGMTString() is deprecated and should no longer be used.
var GMTString = (new Date()).toGMTString(); console.log(GMTString);
// Fri, 29 Dec 2017 09:21:16 GMT
// DON'T USE THIS ONE - END
// ------------------------------
essentials-unit-testing-integration-testing-linting-code-coverage.js
// ------------------------------

// For testing, linting, doing code coverage, I use:
// 
// 1. mocha & chai for unit testing & integration testing
// 2. eslint for linting (finding errors) the code
// 3. use nyc (istanbul) for code coverage
//
// Assuming you have below structure
//   yourproj/test/testrunner.js
//   yourproj/test/test-cases.js
//   yourproj/src/index.js
//
// The package.json can have below: lines to have test, lint&test, and other things done.

  "scripts": {
    "test1": "cd test && mocha *testrunner.js     --timeout 240000",
    "lintAndtest1": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest2": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest3": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest4": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "lintAndtest5": "cd test && eslint ../**/*.js --ignore-pattern node_modules/  --ignore-pattern docs/ && mocha *testrunner.js     --timeout 240000",
    "zcc": "cd test &&                 nyc --reporter=text --reporter=text-summary --reporter=html mocha *testrunner.js     --timeout 240000",
    "test:int1": "cd test &&                                                                             mocha *testrunner_api.js --timeout 240000",
    "srcinstall": "cd src && npm install",
    "testinstall": "cd test && npm install"
  },

  

// ------------------------------
nodejs-simple-promise-example.js
// ------------------------------
function someFunction(arg1) {
    return new Promise((resolve, reject) => {
        
        if (arg1 === 'YES') {
            return resolve('GOOD VALUE');
        }else {
            return reject('BAD VALUE - EXPECTING.. YES');
        }

    });

}

someFunction('YES')    // 'YES' will go into arg1, of someFunction
		.then(function (result) {                    
			console.error('good result');   // this will be triggered
		})
		.catch(function (err) {
			console.error('bad error');
		});
		
someFunction('NO')   // 'NO' will go into arg1, of someFunction
		.then(function (result) {                    
			console.error('good result');
		})
		.catch(function (err) {
			console.error('bad error');     // this will be triggered
		});


// ------------------------------
performance_timers_helper_nodejs_azure_aws.js
// ------------------------------
//
// Author: github.com/manoharreddyporeddy
// for aws, azure, nodejs - performance timers
//  time & timeEnd

// hrtime
//      high-resolution real time
//      returns [seconds, nanoseconds], relative to an arbitrary time in the past

let startTimeArray = undefined;
let endTimeArray = undefined;
let strMessage = undefined;

// =========
// If you are working on micrsoft azure functions
// then replace all
//  console
//      to
//  context
// =========

function time(strMessage1) {
    if (startTimeArray !== undefined) {
        console.error('Error: timeEnd() was not called, resetting');

        startTimeArray = undefined; // clear previous timer
    }

    startTimeArray = process.hrtime(); // from current time // start new timer
    strMessage = strMessage1;
}

function timeEnd(strMessage1) {
    if (startTimeArray === undefined) {
        console.error('Error: time() was not called, resetting');

        startTimeArray = undefined; // clear previous timer
        endTimeArray = undefined; // clear previous timer
        return;
    }

    if (strMessage !== strMessage1) {
        console.error('Error: time() & timeEnd() messages don\'t match, resetting');

        startTimeArray = undefined; // clear previous timer
        endTimeArray = undefined; // clear previous timer
        return;
    }


    endTimeArray = process.hrtime(startTimeArray); // from start time

    console.log('TimeTaken: ' + (endTimeArray[0] + (endTimeArray[1] / 1e9)).toFixed(3) + ' seconds');

    // console.log('TimeTaken: ' + (endTimeArray[0] * 1e9 + (endTimeArray[1])) + ' nanoseconds');

    startTimeArray = undefined; // clear previous timer
    endTimeArray = undefined; // clear previous timer
}


function doMain() {

    console.log('=======================');
    console.log('testing positive cases');
    console.log('=======================');

    // case 1: 1 second
    time();
    for (let i = 0; i < 1e9; i++) {
    }
    timeEnd();

    // case 2: 8 second
    time();
    for (let i = 0; i < 3 * 1e9; i++) {
    }
    timeEnd();


    console.log('=======================');
    console.log('testing negative cases');
    console.log('=======================');

    // case 3: error scenarios
    timeEnd();
    time();
    time();
    console.log('=======================');
}

doMain();

// ------------------------------






/*

# my-nodejs-notes
my nodejs notes


Install nodejs

   1. Goto: https://nodejs.org
   2. click "Download for Windows (x64)   -  v6.11.2 LTS"
   3. Follow with Next > Next > .. > Finish
</pre>

Verify nodejs installation
<pre>
   1. CMD
   2. node --version
                    v6.11.2 (output will be similar to this)
</pre>
---------------

To read this page better
click this: https://raw.githubusercontent.com/manoharreddyporeddy/my-nodejs-notes/master/README.md

<pre>
............
Source: https://www.tutorialspoint.com/nodejs/index.htm
............
Node.js® is a
    JavaScript runtime
        built on Chrome's V8 JavaScript engine
        
    Node.js uses an
        event-driven,
        non-blocking I/O model
            that makes it lightweight and efficient.
    
    Node.js' package ecosystem, npm,
        is the largest ecosystem of open source libraries in the world.
............
Node.js is a single-threaded application
    can support concurrency via the concept of event and callbacks
    
    Every API of Node.js is asynchronous and being single-threaded
        use asynchronous function calls
            to maintain concurrency
    
    Node uses observer pattern.

    Node thread keeps an event loop
        task completed -> fire corresponding event -> signals the event-listener function to execute

Event-Driven Programming
    
    Node.js uses events heavily
        one of the reasons why Node.js is pretty fast compared to other similar technologies.

    Node
        starts its server
            initiates its variables
            declares functions and
            waits for the event to occur

    In an event-driven application
        a main loop
            listens for events, and
            when one of those events is detected
                triggers a callback function

Although events look quite similar to callbacks
    difference
        callback functions are called when an asynchronous function returns its result
        event handling works on the observer pattern
        
        Observers
            functions that listen to events
            Whenever an event gets fired -> its listener function starts executing

        Node.js has
            multiple in-built events
                available through events module's EventEmitter class
                which are used to bind events and event-listeners

............
npm install uuid
npm update uuid
npm ls
npm install uuid -g
npm list -g --depth=0
npm uninstall uuid

npm search express

npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sane defaults.

    See 'npm help json' for definitive documentation on these fields
    and exactly what they do.

    Use 'npm install <pkg> --save' afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    name: (webmaster)
npm adduser
    Username: mcmohd
    Password:
    Email: (this IS public) mcmohd@gmail.com
npm publish
............
var events = require('events');
var objEventEmitter = new events.EventEmitter();
objEventEmitter.on('eventName', eventHandler);
eventEmitter.emit('eventName');
............
var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log('connection succesful.');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler); 
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});
eventEmitter.emit('connection');
............
In Node Application
    any asynchronous function
        accepts a callback as the last parameter
        
        a callback function accepts
            an error as the first parameter
............
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
............
Many objects in a Node emit events
    for example
    a net.Server emits an event each time a peer connects to it
    an fs.readStream emits an event when the file is opened
    
        All objects which emit events
            are the instances of events.EventEmitter
............
When an EventEmitter instance faces any error -> it emits an 'error' event
When a new listener is added -> 'newListener' event is fired
when a listener is removed -> 'removeListener' event is fired.

EventEmitter
    provides multiple properties like
        on property        used to bind a function with the event
        emit property    used to fire an event
            chainable: o = o.addListener().removeListener();
            listener array
            event may/maynot have listeners
Methods
    addListener(event, listener) - adds one more listener - could be same event&listener
    on(event, listener) - adds one more listener - could be same event&listener
    once(event, listener) - adds one more listener - removed after 1 event fired
    removeListener(event, listener) - removes one instance of listener
    removeAllListeners([event]) - Removes all listeners, or those of the specified event - not a good idea to remove listeners that were added elsewhere in the code, especially when it's on an emitter that you didn't create (e.g. sockets or file streams)
    setMaxListeners(n) - By default, EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.
    listeners(event) - Returns an array of listeners for the specified event.
    emit(event, [arg1], [arg2], [...]) - Execute each of the listeners in order with the supplied arguments. Returns true if the event had listeners, false otherwise.

Class Methods
    listenerCount(emitter, event) - Returns the number of listeners for a given event.

Events
    newListener
        event − String: the event name
        listener − Function: the event handler function
        This event is emitted any time a listener is added.
            When this event is triggered, the listener may not yet have been added to the array of listeners for the event.
    removeListener
        event − String The event name
        listener − Function The event handler function
        This event is emitted any time someone removes a listener.
            When this event is triggered, the listener may not yet have been removed from the array of listeners for the event.
............
    var listner1 = function listner1() {    console.log('listner1 executed.');    }
    var listner2 = function listner2() {    console.log('listner2 executed.');    }
    
    var eventEmitter = new require('events').EventEmitter();
    
    eventEmitter.addListener('connection', listner1);
    eventEmitter.on('connection', listner2);
    var eventListenersCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');    console.log(eventListenersCount + " Listner(s) listening to connection event");

    eventEmitter.emit('connection');

    eventEmitter.removeListener('connection', listner1);        console.log("Listner1 will not listen now.");
    eventEmitter.emit('connection');
    eventListenersCount = require('events').EventEmitter.listenerCount(eventEmitter,'connection');        console.log(eventListenersCount + " Listner(s) listening to connection event");
    
Output.
    2 Listner(s) listening to connection event
    listner1 executed.
    listner2 executed.
    
    Listner1 will not listen now.
    listner2 executed.
    1 Listner(s) listening to connection event
............
Buffer class is a global class that can be accessed in an application without importing the buffer module.
Pure JavaScript is Unicode friendly, but it is not so for binary data.
    While dealing with TCP streams or the file system, it's necessary to handle octet streams.
    
    Buffer class which provides instances to store raw data similar to an array of integers
        but corresponds to a raw memory allocation outside the V8 heap.

............

// create a Buffer
var buf = new Buffer(10);                        // uninitiated Buffer of 10 octets
var buf = new Buffer([10, 20, 30, 40, 50]);        // from a given array
var buf = new Buffer("Simply Easy Learning", "utf-8");    //  from a given string and optionally encoding type
    // "utf8" is the default encoding, other encodings are "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex"
............
buf.write(string[, offset][, length][, encoding])
..
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len);

    Octets written : 20
............
buf.toString([encoding][, start][, end])
..
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

    abcdefghijklmnopqrstuvwxyz
    abcde
    abcde
    abcde
............
buf.toJSON()
..
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

    [ 83, 105, 109, 112, 108, 121, 32, 69, 97, 115, 121, 32, 76, 101, 97, 114, 110, 105, 110, 103 ]
............
Buffer.concat(list[, totalLength])
..
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

    buffer3 content: TutorialsPoint Simply Easy Learning
............
buf.compare(otherBuffer);
..
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

    ABC comes before ABCD
............
buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
..
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);

buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());

    buffer2 content: ABC
............
buf.slice([start][, end])
..
var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

var buffer3 = buffer1.slice(-5);
console.log("buffer3 content: " + buffer3.toString());

var buffer4 = buffer1.slice(-5,-4);
console.log("buffer4 content: " + buffer4.toString());

    buffer2 content: Tutorials
    buffer3 content: Point
    buffer4 content: P
............
buf.length;
..
var buffer = new Buffer('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);
    buffer length: 14
............
Class Methods
..
Buffer.isEncoding(encoding)
Buffer.isBuffer(obj)
Buffer.byteLength(string[, encoding])
Buffer.concat(list[, totalLength])
Buffer.compare(buf1, buf2)
............
Streams?
..
    Streams are objects that let you
        read data from a source or
        write data to a destination
            in continuous fashion

    In Node.js, there are four types of streams −
        Readable − Stream which is used for read operation.
        Writable − Stream which is used for write operation.
        Duplex   − Stream which can be used for both read and write operation.
        Transform − A type of duplex stream where the output is computed based on input.

    commonly used events
        data − This event is fired when there is data is available to read.
        end − This event is fired when there is no more data to read.
        error − This event is fired when there is any error receiving or writing data.
        finish − This event is fired when all the data has been flushed to underlying system.

............
Reading from a Stream
..
var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

// Handle stream events -> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});
readerStream.on('end',function(){
   console.log(data);
});
readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

        Program Ended
        Tutorials Point is giving self learning content
        to teach the world in simple and easy way!!!!!
............
Writing to a Stream
..
var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events -> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

        Program Ended
        Write completed.
............
Piping the Streams
- a mechanism where we provide the output of one stream as the input to another stream
..
var fs = require("fs");

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations - read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

        Program Ended
............
Chaining the Streams
- a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations
..
var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())        // Compress the file input.txt to input.txt.gz
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");

    File Compressed.
..
var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())        // Decompress the file input.txt.gz to input.txt
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");

    File Decompressed.
............
Node.js - File System
..
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


    Synchronous read: Tutorials Point is giving self learning content
    to teach the world in simple and easy way!!!!!

    Program Ended
    Asynchronous read: Tutorials Point is giving self learning content
    to teach the world in simple and easy way!!!!!
............
fs.open(path, flags[, mode], callback)
..
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");     
});

    Going to open file!
    File opened successfully!
............
Get File Information
..
fs.stat(path, callback)
    stats.isFile()    Returns true if file type of a simple file.
    stats.isDirectory()    Returns true if file type of a directory.
    stats.isBlockDevice()    Returns true if file type of a block device.
    stats.isCharacterDevice()    Returns true if file type of a character device.
    stats.isSymbolicLink()    Returns true if file type of a symbolic link.
    stats.isFIFO()    Returns true if file type of a FIFO.
    stats.isSocket()    Returns true if file type of asocket.
..
    var fs = require("fs");

    console.log("Going to get file info!");
    fs.stat('input.txt', function (err, stats) {
       if (err) {
           return console.error(err);
       }
       console.log(stats);
       console.log("Got file info successfully!");
       
       // Check file type
       console.log("isFile ? " + stats.isFile());
       console.log("isDirectory ? " + stats.isDirectory());    
    });

                Going to get file info!
                { 
                   dev: 1792,
                   mode: 33188,
                   nlink: 1,
                   uid: 48,
                   gid: 48,
                   rdev: 0,
                   blksize: 4096,
                   ino: 4318127,
                   size: 97,
                   blocks: 8,
                   atime: Sun Mar 22 2015 13:40:00 GMT-0500 (CDT),
                   mtime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT),
                   ctime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT) 
                }
                Got file info successfully!
                isFile ? true
                isDirectory ? false
............
Writing a File
fs.writeFile(filename, data[, options], callback)
..
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

        Going to write into existing file
        Data written successfully!
        Let's read newly written data
        Asynchronous read: Simply Easy Learning!
............
Reading a File
fs.read(fd, buffer, offset, length, position, callback)
..
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});

        Going to open an existing file
        File opened successfully!
        Going to read the file
        97 bytes read
        Tutorials Point is giving self learning content
        to teach the world in simple and easy way!!!!!
............
Closing a File
fs.close(fd, callback)
..
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // Close the opened file.
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("File closed successfully.");
      });
   });
});

        Going to open an existing file
        File opened successfully!
        Going to read the file
        Tutorials Point is giving self learning content
        to teach the world in simple and easy way!!!!!

        File closed successfully.
............
Truncate a File
fs.ftruncate(fd, len, callback)
..
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to truncate the file after 10 bytes");
   
   // Truncate the opened file.
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("File truncated successfully.");
      console.log("Going to read the same file"); 
      
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }

         // Print only read bytes to avoid junk.
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         // Close the opened file.
         fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("File closed successfully.");
         });
      });
   });
});

        Going to open an existing file
        File opened successfully!
        Going to truncate the file after 10 bytes
        File truncated successfully.
        Going to read the same file
        Tutorials 
        File closed successfully.
............
Delete a File
fs.unlink(path, callback)
..
var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});

        Going to delete an existing file
        File deleted successfully!
............
Create a Directory
fs.mkdir(path[, mode], callback)
..
var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/tmp/test',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

        Going to create directory /tmp/test
        Directory created successfully!
............
Read a Directory
fs.readdir(path, callback)
..
var fs = require("fs");

console.log("Going to read directory /tmp");
fs.readdir("/tmp/",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});

        Going to read directory /tmp
        ccmzx99o.out
        ccyCSbkF.out
        employee.ser
        hsperfdata_apache
        test
        test.txt
............
Remove a Directory
fs.rmdir(path, callback)
..
var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/tmp/",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});

        Going to read directory /tmp
        ccmzx99o.out
        ccyCSbkF.out
        employee.ser
        hsperfdata_apache
        test.txt
............
Node.js - Global Objects
..
    Available in all modules.
        no need to include these objects in our application, rather we can use them directly
    These objects are
        modules,
        functions,
        strings and
        object itself        
............
// Let's try to print the value of __filename
console.log( __filename );
        /web/com/1427091028_21099/main.js
............
// Let's try to print the value of __dirname
console.log( __dirname );
        /web/com/1427091028_21099
............
setTimeout(cb, ms) - run callback cb after at least ms milliseconds
..
function printHello(){
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
setTimeout(printHello, 2000);

        Hello, World!
............
clearTimeout(t)
..
function printHello(){
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

        << no output is printed >>
............
setInterval(cb, ms) - to run callback cb repeatedly after at least ms milliseconds
..
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);

    Hello, World!
    Hello, World!
    Hello, World!

............
Process Events
events
    exit
    beforeExit
    uncaughtException
    Signal Events - Emitted when the processes receives a signal such as SIGINT, SIGHUP, etc.
..
process.on('exit', function(code) {
   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('About to exit with code:', code);
});
console.log("Program Ended");

        Program Ended
        About to exit with code: 0
............
Exit Code's names
    Uncaught Fatal Exception
    Unused
    Internal JavaScript Parse Error
    Internal JavaScript Evaluation Failure
    Fatal Error
    Non-function Internal Exception Handler
    Internal Exception Handler Run-Time Failure
    Unused
    Invalid Argument
    Internal JavaScript Run-Time Failure
    Invalid Debug Argument
    Signal Exits

Process Properties
    stdout
    stderr
    stdin
    argv
    execPath
    execArgv
    env
    exitCode
    version
    versions
    config
    pid
    title
    arch
    platform
    mainModule

// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// Getting executable path
console.log(process.execPath);

// Platform Information 
console.log(process.platform);

            Hello World!
            0: node
            1: /web/com/1427106219_25089/main.js
            /usr/bin/node
            linux


        abort()
        chdir(directory)
        cwd()
        exit([code])
        getgid()
        setgid(id)
        getuid()
        setuid(id)
        getgroups()
        setgroups(groups)
        initgroups(user, extra_group)
        kill(pid[, signal])
        memoryUsage()
        nextTick(callback)
        umask([mask])
        uptime()
        hrtime()

console.log('Current directory: ' + process.cwd());
console.log('Current version: ' + process.version);
console.log(process.memoryUsage());

            Current directory: /web/com/1427106219_25089
            Current version: v0.10.33
            { rss: 11505664, heapTotal: 4083456, heapUsed: 2157704 }
............
Node.js - Console
..
console.log([data][, ...])
console.info([data][, ...])

console.error([data][, ...])
console.warn([data][, ...])

console.dir(obj[, options])        // a hierarchical listing with disclosure triangles that let you see the contents of child objects

console.time(label)        // Mark a time.
console.timeEnd(label)    // Finish timer, record output.

console.trace(message[, ...])


............
console.info("Program Started");
var counter = 10;
console.log("Counter: %d", counter);
console.time("Getting data");
for (var i=0; i<10; i++) {
    console.log('Doing some processing here...');
}
console.timeEnd('Getting data');
console.info("Program Ended")
console.trace('message')
console.assert(counter === 10, 'counter is not 10');        // true  => no error
console.assert(counter === 11, 'counter is not 11');        // false => error
        Program Started
        Counter: 10
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Doing some processing here...
        Getting data: 1ms
        Program Ended
        Trace: message
            at Object. (/web/com/1500469682_99130/main.js:14:9)
            at Module._compile (module.js:456:26)
            at Object.Module._extensions..js (module.js:474:10)
            at Module.load (module.js:356:32)
            at Function.Module._load (module.js:312:12)
            at Function.Module.runMain (module.js:497:10)
            at startup (node.js:119:16)
            at node.js:929:3
        AssertionError: counter is not 11
            at Console.assert (console.js:102:23)
            at Object. (/web/com/1500469682_99130/main.js:14:9)
            at Module._compile (module.js:456:26)
            at Object.Module._extensions..js (module.js:474:10)
            at Module.load (module.js:356:32)
            at Function.Module._load (module.js:312:12)
            at Function.Module.runMain (module.js:497:10)
            at startup (node.js:119:16)
            at node.js:929:3
............
Node.js - Utility Modules
1    OS Module
Provides basic operating-system related utility functions.

2    Path Module
Provides utilities for handling and transforming file paths.

3    Net Module
Provides both servers and clients as streams. Acts as a network wrapper.

4    DNS Module
Provides functions to do actual DNS lookup as well as to use underlying operating system name resolution functionalities.

5    Domain Module
Provides ways to handle multiple different I/O operations as a single group


............
Node.js - Web Module
..
A Web Server is a software application which handles HTTP requests sent by the HTTP client, like web browsers, and returns web pages in response to the clients. Web servers usually deliver html documents along with images, style sheets, and scripts.

Most of the web servers support server-side scripts, using scripting languages or redirecting the task to an application server which retrieves data from a database and performs complex logic and then sends a result to the HTTP client through the Web server.

Apache web server is one of the most commonly used web servers. It is an open source project.

Web Application Architecture
A Web application is usually divided into four layers −

Web Architecture
Client − This layer consists of web browsers, mobile browsers or applications which can make HTTP requests to the web server.

Server − This layer has the Web server which can intercept the requests made by the clients and pass them the response.

Business − This layer contains the application server which is utilized by the web server to do the required processing. This layer interacts with the data layer via the database or some external programs.

Data − This layer contains the databases or any other source of data.
............
Web Server using Node
..
index.htm

<html>
   <head>
      <title>Sample Page</title>
   </head>
   
   <body>
      Hello World!
   </body>
</html>
..
main.js

var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {    
         //Page found      
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // Write the content of the file to response body
         response.write(data.toString());        
      }
      // Send the response body 
      response.end();
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');



node main.js
Server running at http://127.0.0.1:8081/

Open http://127.0.0.1:8081/index.htm
Displays Hello World! on browser

Server running at http://127.0.0.1:8081/
Request for /index.htm received.
............
Creating Web client using Node
..
main.js

var http = require('http');

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.htm'  
};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();


node main.js

Output on console
    <html>
       <head>
          <title>Sample Page</title>
       </head>
       
       <body>
          Hello World!
       </body>
    </html>

output on server
    Server running at http://127.0.0.1:8081/
    Request for /index.htm received.
............
Node.js - Express Framework

Express Overview
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −
Allows to set up middlewares to respond to HTTP Requests.
Defines a routing table which is used to perform different actions based on HTTP Method and URL.
Allows to dynamically render HTML Pages based on passing arguments to templates.

npm install express --save
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
............
var express = require('express');
var app = express();

app.get('/index.htm', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


node main.js
Example app listening at http://0.0.0.0:8081

Open http://127.0.0.1:8081/index.htm
Displays Hello World! on browser
............
Request & Response
Express application uses a callback function whose parameters are request and response objects.

app.get('/', function (req, res) {
   // ..
})
Request Object − The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

Response Object − The response object represents the HTTP response that an Express app sends when it gets an HTTP request.

You can print req and res objects which provide a lot of information related to HTTP request and response including cookies, sessions, URL, etc.
..
............
Basic Routing
..
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
To handle more types of HTTP requests.

main.js

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user page");
   res.send('Hello DELETE');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


node main.js

Example app listening at http://0.0.0.0:8081



http://127.0.0.1:8081/list_user
Page Listing

http://127.0.0.1:8081/abcdefg
Cannot GET /abcdefg

............


......
Serving Static Files
Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc.
You simply need to pass the name of the directory where you keep your static assets, to the express.static middleware to start serving the files directly. For example, if you keep your images, CSS, and JavaScript files in a directory named public, you can do this −
......
app.use(express.static('public'));
......
node_modules
server.js
public/
public/images
public/images/logo.png
..
To handle static files

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


node main.js

Open http://127.0.0.1:8081/images/logo.png
<image will be displyed>
......
HTML FORM : GET Method
..
main.js

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {
   response = {
      first_name: req.query.first_name,
      last_name:  req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
..
main.html

<html>
   <body>
      
      <form action = "http://127.0.0.1:8081/process_get" method = "GET">
         First Name: <input type = "text" name = "first_name">  <br>
         Last Name: <input type = "text" name = "last_name">
         <input type = "submit" value = "Submit">
      </form>
      
   </body>
</html>


Open http://127.0.0.1:8081/index.htm
    enter first_name
    enter last_name
        click submit

Browser will show:
    {"first_name":"John","last_name":"Paul"}
......
HTML FORM : POST Method
..
main.js

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })    // Create application/x-www-form-urlencoded parser

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})
..
main.htm

<html>
   <body>
      
      <form action = "http://127.0.0.1:8081/process_post" method = "POST">
         First Name: <input type = "text" name = "first_name"> <br>
         Last Name: <input type = "text" name = "last_name">
         <input type = "submit" value = "Submit">
      </form>
      
   </body>
</html>
..
Open http://127.0.0.1:8081/index.htm
    enter first_name
    enter last_name
        click submit

Browser will show:
    {"first_name":"John","last_name":"Paul"}
......
File Upload
..
There are three possibilities for enctype:
    x-www-urlencoded
    multipart/form-data        (spec points to RFC2388) - for upload of files
    text-plain.                This is "not reliably interpretable by computer", so it should never be used in production, and we will not look further into it.
..
main.js

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


main.htm

<html>
   <head>
      <title>File Uploading Form</title>
   </head>

   <body>
      <h3>Select a file to upload:</h3>
      
      <form action = "http://127.0.0.1:8081/file_upload" method = "POST" 
         enctype = "multipart/form-data">
         <input type="file" name="file" size="50" />
         <br />
         <input type = "submit" value = "Upload File" />
      </form>
      
   </body>
</html>


output:
    Select a file to upload: 

    [Choose File] No file chosen        // this is input of 'file' type

    [Upload File]                        // this is input of 'submit' type
......
Cookies Management
..
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
   console.log("Cookies: ", req.cookies)
})
app.listen(8081)
......
Node.js - RESTful API
..
REST stands for REpresentational State Transfer.
    REST
    REST based architecture
        is "web-standards based architecture" and

    Every component is a resource
    Uses HTTP Protocol (http://) for resourceaccess, by a common interface


    Resource is identified by URIs/ global IDs (Uniform Resource Identifier a service)
    
        which provides
            Resource representation such as:
                text,
                XML,
                JSON    (most popular one)

            and
            set of HTTP Methods        
                Resource access is common through four HTTP standard methods:
                    POST    - creates a new resource, or updates a existing resource
                    PUT     - creates a new resource
                    GET     - provides a read only access to a resource
                    DELETE    - removes a resource




REST Server
    provides access to resources

REST client
    accesses and
    modifies
        the resources
            using HTTP protocol (http://)
........
RESTful Web Services
..
Web services
    based on REST Architecture

A web service is
    a collection of
        open protocols and
        standards
            used for
                exchanging data
                between
                    applications or systems
    
    Software applications
        written in various programming languages and
        running on various platforms
            can use web services
                to exchange data over computer networks
                    like the Internet
                    in a manner
                        similar to inter-process communication on a single computer.
                        
        This interoperability
            (e.g., communication between Java and Python, or
                    Windows and Linux applications)
                is due to the use of open standards.    
......
Creating RESTful for A Library
..
users.json

    {
       "user1" : {
          "name" : "mahesh",
          "password" : "password1",
          "profession" : "teacher",
          "id": 1
       },
       "user2" : {
          "name" : "suresh",
          "password" : "password2",
          "profession" : "librarian",
          "id": 2
       },
       "user3" : {
          "name" : "ramesh",
          "password" : "password3",
          "profession" : "clerk",
          "id": 3
       }
    }
......
RESTful APIs.

S. N.    URI            HTTP Method        POST body        Result
1        listUsers    GET                empty            Show list of all the users.
2        addUser        POST            JSON String        Add details of new user.
4        :id            GET                empty            Show details of a user.
3        deleteUser    DELETE            JSON String        Delete an existing user.
......
listUsers.js

    var express = require('express');
    var app = express();
    var fs = require("fs");

    app.get('/listUsers', function (req, res) {
       fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
       });
    })

    var server = app.listen(8081, function () {
      var host = server.address().address
      var port = server.address().port

      console.log("Example app listening at http://%s:%s", host, port)
    })
    
Open: http://127.0.0.1:8081/listUsers
Output:
    {
       "user1" : {
          "name" : "mahesh",
          "password" : "password1",
          "profession" : "teacher",
          "id": 1
       },
       "user2" : {
          "name" : "suresh",
          "password" : "password2",
          "profession" : "librarian",
          "id": 2
       },
       "user3" : {
          "name" : "ramesh",
          "password" : "password3",
          "profession" : "clerk",
          "id": 3
       }
    }
......
addUser.js

    var express = require('express');
    var app = express();
    var fs = require("fs");

    var user = {
       "user4" : {
          "name" : "mohit",
          "password" : "password4",
          "profession" : "teacher",
          "id": 4
       }
    }

    app.post('/addUser', function (req, res) {
       fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {    // read
           data = JSON.parse( data );
           
           data["user4"] = user["user4"];    // add temporarily
           
           console.log( data );
           res.end( JSON.stringify(data));    // send
       });
    })

    var server = app.listen(8081, function () {
      var host = server.address().address
      var port = server.address().port
      
      console.log("Example app listening at http://%s:%s", host, port)
    })
..
Open: http://127.0.0.1:8081/addUser
Output:
    {
        "user1":{"name":"mahesh","password":"password1","profession":"teacher","id":1},
        "user2":{"name":"suresh","password":"password2","profession":"librarian","id":2},
        "user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3},
        "user4":{"name":"mohit","password":"password4","profession":"teacher","id":4}
    }
......
using user ID, show user details
:id
..
    var express = require('express');
    var app = express();
    var fs = require("fs");

    app.get('/:id', function (req, res) {
       fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) { // read
      
          var users = JSON.parse( data );
          var user = users["user" + req.params.id]     // extract using user id passed as param
          
          console.log( user );
          res.end( JSON.stringify(user));    // send
       });
    })

    var server = app.listen(8081, function () {
       var host = server.address().address
       var port = server.address().port
       
       console.log("Example app listening at http://%s:%s", host, port)
    })
    
Open:    http://127.0.0.1:8081/2
Output:    {"name":"suresh","password":"password2","profession":"librarian","id":2}
......
deleteUser
..
    var express = require('express');
    var app = express();
    var fs = require("fs");

    var id = 2;

    app.delete('/deleteUser', function (req, res) {

       fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {    // read
           data = JSON.parse( data );
           
           delete data["user" + 2];        // delete temporarily
           
           console.log( data );
           res.end( JSON.stringify(data));    // send
       });
    })

    var server = app.listen(8081, function () {
      var host = server.address().address
      var port = server.address().port
      
      console.log("Example app listening at http://%s:%s", host, port)
    })
    
Open:    http://127.0.0.1:8081/deleteUser
Output:    {    "user1":    {"name":"mahesh","password":"password1","profession":"teacher","id":1},
            "user3":    {"name":"ramesh","password":"password3","profession":"clerk","id":3}
        }
........
Node.js - Scaling Application
..
Node.js runs in a single-thread mode,
    but it uses an event-driven paradigm to handle concurrency.
    
facilitates
    creation of child processes
        to leverage parallel processing
        on multi-core CPU based systems

Child processes always have
    three streams
        child.stdin,
        child.stdout, and
        child.stderr
            which may be
                shared with the
                    stdio streams
                    of the parent process.

Node provides
    child_process module
        it has three major ways
            to create a child process
            
                child_process.exec    method    - runs a command in a shell/console and buffers the output.
                child_process.spawn    method    - launches a new process with a given command.
                child_process.fork    method    - special case of the spawn() to create child processes.
..
child_process.exec(command[, options], callback)
parameters used −
    command (String)    The command to run, with space-separated arguments
    options (Object)    may comprise one or more of the following options
                            cwd (String)        Current working directory of the child process
                            env (Object)        Environment key-value pairs
                            encoding (String)    (Default: 'utf8')
                            shell (String)        Shell to execute the command with
                                                    Default:
                                                        '/bin/sh' on UNIX,
                                                        'cmd.exe' on Windows,
                                                    The shell should understand the
                                                        -c switch on UNIX or
                                                        /s /c on Windows.
                                                            On Windows, command line parsing should be compatible with cmd.exe.
                            timeout (Number)        (Default: 0)
                            maxBuffer (Number)        (Default: 200*1024)
                            killSignal (String)        (Default: 'SIGTERM')
                            uid (Number)            Sets the user  identity of the process.
                            gid (Number)            Sets the group identity of the process.
                            
    callback            The function gets three arguments
                                error, stdout, and stderr
                                    which are called with the output
                                        when the process terminates.


    returns a buffer with a max size

    waits for the process to end and
        tries to return all the buffered data at once.

..
support.js

console.log("Child Process " + process.argv[2] + " executed." );


master.js

const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {

   var workerProcess =
       child_process.exec('node support.js ' + i, function (error, stdout, stderr) {      
          if (error) {
             console.log(error.stack);
             console.log('Error code: '+error.code);
             console.log('Signal received: '+error.signal);
          }

          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
       });

   workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code ' + code);
   });
   
}


node master.js

Output:
    Child process exited with exit code 0
    stdout: Child Process 1 executed.

    stderr:
    Child process exited with exit code 0
    stdout: Child Process 0 executed.
    
    stderr:
    Child process exited with exit code 0
    stdout: Child Process 2 executed.
..
..

......
child_process.spawn(command[, args][, options])

    launches a new process
        with a given command.

Parameters
    command (String)    The command to run
    args (Array)        List of string arguments
    options (Object)    may comprise one or more of the following options −
                            cwd (String)        Current working directory of the child process.
                            env (Object)        Environment key-value pairs.
                            stdio (Array)        String Child's stdio configuration.
                            customFds (Array)    Deprecated File descriptors for the child to use for stdio.
                            detached (Boolean)    The child will be a process group leader.
                            uid (Number)        Sets the user identity of the process.
                            gid (Number)        Sets the group identity of the process.

    returns streams (stdout & stderr)
    
    it should be used when the process returns a volume amount of data.
        spawn() starts receiving the response as soon as the process starts executing.



support.js

    console.log("Child Process " + process.argv[2] + " executed." );

master.js

    const fs = require('fs');
    const child_process = require('child_process');
     
    for(var i = 0; i<3; i++) {
       var workerProcess = child_process.spawn('node', ['support.js', i]);

       workerProcess.stdout.on('data', function (data) {
          console.log('stdout: ' + data);
       });

       workerProcess.stderr.on('data', function (data) {
          console.log('stderr: ' + data);
       });

       workerProcess.on('close', function (code) {
          console.log('child process exited with code ' + code);
       });
    }

node master.js
Output:
    stdout: Child Process 0 executed.

    child process exited with code 0
    stdout: Child Process 1 executed.

    stdout: Child Process 2 executed.

    child process exited with code 0
    child process exited with code 0
......
child_process.fork(modulePath[, args][, options])
    a special case of spawn() to create Node processes.

Parameters
    modulePath (String)        The module to run in the child.
    args (Array)            List of string arguments
    options (Object)        may comprise one or more of the following options −
                                cwd (String)        Current working directory of the child process.
                                env (Object)        Environment key-value pairs.
                                execPath (String)    Executable used to create the child process.
                                execArgv (Array)    List of string arguments passed to the executable (Default: process.execArgv).
                                silent (Boolean)    If true, stdin, stdout, and stderr of the child will be piped to the parent,
                                                    otherwise they will be inherited from the parent,
                                                        see the "pipe" and "inherit" options for spawn()'s stdio for more details
                                                        (default is false)
                                uid (Number)        Sets the user identity of the process.
                                gid (Number)        Sets the group identity of the process.

The fork method returns
    an object with a built-in communication channel
        in addition to having
            all the methods in a normal ChildProcess instance


support.js
    console.log("Child Process " + process.argv[2] + " executed." );

master.js
    const fs = require('fs');
    const child_process = require('child_process');
     
    for(var i=0; i<3; i++) {
       var worker_process =
                child_process.fork("support.js", [i]);

       worker_process.on('close', function (code) {
          console.log('child process exited with code ' + code);
       });
    }

node master.js

Output:
    Child Process 0 executed.
    Child Process 1 executed.
    Child Process 2 executed.
    child process exited with code 0
    child process exited with code 0
    child process exited with code 0
......
Node.js - Packaging
JXcore
    http://jxcore.com/downloads/

install - Cenots running on 64-bit machine
    wget https://s3.amazonaws.com/nodejx/jx_rh64.zip
    unzip jx_rh64.zip
    cp jx_rh64/jx /usr/bin
    export PATH=$PATH:/usr/bin

verify    
    jx --version
        v0.10.32
            
input (example):            
        node_modules\
        images\
        scripts\
        style\
        index.htm
        index.js

command:
    jx package index.js index
        where
            index.js    is the entry file for your Node.js project
            index        is package name

output:
    index.jxp    - an intermediate file which contains the complete project detail needed to compile the project.
    index.jx    - binary file having the complete package that is ready to be shipped to your client or to your production environment.

launch
    jx index.jx command_line_arguments
        is similar to
    node index.js command_line_arguments


..
......
TODO:
    Node.js - Utility Modules
    https://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg
......
............
..
*/



