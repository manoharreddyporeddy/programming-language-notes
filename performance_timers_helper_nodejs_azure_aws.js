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
