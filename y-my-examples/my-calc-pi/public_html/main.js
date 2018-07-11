/*-------------------------------------------------------------------------
 * @author  Manohar Poreddy (pgmreddy@outlook.com)
 * @file
 *      Main thread, that spawns and assigns tasks
 *      draws canvas
 * @requires    index.html
 -------------------------------------------------------------------------*/

// treads to create, and completed
var NUMBER_OF_WORKERS_FOR_PI_CALCULATION = 4;
var g_numberOfWorkersCompletedTheJob = 0;

// get canvas object
var g_mycanvas = document.getElementById('mycanvas');

// to pass to thread
var g_mainThreadObj = {};
var ctx = null;

// print log on right
var canvasPrintXPos = 200;
var canvasPrintYPos = 100;
var canvasPrintYGap = 20;
var g_piCalc = {
    numberOfPointsInSquare: 0,
    numberOfPointsInCircleToo: 0
};

if (g_mycanvas.getContext) {
    ctx = g_mycanvas.getContext('2d'); // mycanvas_context
}

function drawSqAndCircle() {
    if (ctx) {
        var rectObj = {
            upperLeftX: 50,
            upperLeftY: 50,
            width: 100,
            height: 100
        };
        // arc for circle
        var END_ANGLE_DEGREES = 360;
        var RADIUS = rectObj.width / 2;
        var circleObj = {
            radius: RADIUS,
            centerX: rectObj.upperLeftX + RADIUS,
            centerY: rectObj.upperLeftY + RADIUS,
            startAngleRadians: 0,
            endAngleDegrees: END_ANGLE_DEGREES,
            endAngleRadians: END_ANGLE_DEGREES * Math.PI / 180
        };

        g_piCalc.numberOfPointsInSquare = rectObj.width * rectObj.height;

        g_mainThreadObj = {
            rectObj: rectObj,
            circleObj: circleObj,
            pointsToDrawByEachThread: g_piCalc.numberOfPointsInSquare / NUMBER_OF_WORKERS_FOR_PI_CALCULATION
        };


        // draw rect
        ctx.strokeStyle = "black";
        ctx.strokeRect(rectObj.upperLeftX, rectObj.upperLeftY, rectObj.width, rectObj.height); // x,y,w,h
        ctx.fillStyle = "yellow";
        ctx.fillRect(rectObj.upperLeftX, rectObj.upperLeftY, rectObj.width, rectObj.height); // x,y,w,h
        // ctx.clearRect(45, 45, 60, 60); // x,y,w,h

        // draw circle in rect
        var bAntiClockwise = true;
        ctx.arc(
              rectObj.upperLeftX + RADIUS,
              rectObj.upperLeftY + RADIUS,
              circleObj.radius,
              circleObj.startAngleRadians, circleObj.endAngleRadians,
              bAntiClockwise
              ); // centerx,centery, r, circleObj.startAngleRadians, circleObj.endAngleRadians, bAntiClockwise
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
    } else {
        alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
}
// ==============================================
// ==============================================

function onMessageFromWorker(event) {
    // console.log("From thread: " + event.data);
    ctx.fillText("From thread: " + event.data, canvasPrintXPos, canvasPrintYPos = canvasPrintYPos + canvasPrintYGap);
    g_piCalc.numberOfPointsInCircleToo += event.data;

    g_numberOfWorkersCompletedTheJob++;
    if (g_numberOfWorkersCompletedTheJob >= NUMBER_OF_WORKERS_FOR_PI_CALCULATION) {
        ctx.fillText(
              "All " + g_numberOfWorkersCompletedTheJob + " of " +
              NUMBER_OF_WORKERS_FOR_PI_CALCULATION + " threads done.",
              canvasPrintXPos, canvasPrintYPos = canvasPrintYPos + canvasPrintYGap);
        ctx.fillText(
              "Approx. PI value is: " +
              4 * g_piCalc.numberOfPointsInCircleToo / g_piCalc.numberOfPointsInSquare,
              canvasPrintXPos, canvasPrintYPos = canvasPrintYPos + canvasPrintYGap);
    }
}

function createRandomPointsAndCalcPi() {

    ctx.fillText(
          "Main thread: Starting " + NUMBER_OF_WORKERS_FOR_PI_CALCULATION + " threads: " +
          g_mainThreadObj.pointsToDrawByEachThread +
          " random numbers to create..",
          canvasPrintXPos, canvasPrintYPos);

    var workers = [];
    // create threads
    //  workers.length initally is 0
    while (true) {
        var a_worker = new Worker('myWorker.js');
        a_worker.onmessage = onMessageFromWorker;
        workers[workers.length] = a_worker;
        // start worker
        a_worker.postMessage(g_mainThreadObj);
        if (workers.length === NUMBER_OF_WORKERS_FOR_PI_CALCULATION) {
            break;
        }
    }
}

drawSqAndCircle();
createRandomPointsAndCalcPi();
