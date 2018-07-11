/*-------------------------------------------------------------------------
 * @author  Manohar Poreddy (pgmreddy@outlook.com)
 * @file
 *      Worker/ thread related functions
 *      Workers do the job of calculating Pi in parts
 * @requires    main.js
 -------------------------------------------------------------------------*/

function pointInCircle(px, py, centerX, centerY, cRadius) {
    var distanceOfPointFromCenter =
          Math.sqrt(Math.pow(px - centerX, 2) + Math.pow(py - centerY, 2));

    // postMessage("(" + px + " " + py + "), ((" + centerX + " " + centerY + "), " + cRadius + ")");

    if (distanceOfPointFromCenter < cRadius) {
        // point is inside the circle
        return true;
    } else {
        // point is Not inside the circle
        return false;
    }
}

// required variable
//  same name as in main.js is for intellisense
var g_mainThreadObj = {
};

onmessage = function (e) {
    // message from main thread
    g_mainThreadObj = e.data;

    // so, lets start work
    startTheThreadsWork();
};

function startTheThreadsWork() {
    var numberOfPointsInCircleToo = 0;

    // for (var i = 1; i <= 1; i += 1) {
    for (var i = 1; i <= g_mainThreadObj.pointsToDrawByEachThread; i += 1) {

        // Generate a random point in square
        var x =
              g_mainThreadObj.rectObj.upperLeftX +
              Math.floor(Math.random() * g_mainThreadObj.rectObj.width + 1);
        var y =
              g_mainThreadObj.rectObj.upperLeftY +
              Math.floor(Math.random() * g_mainThreadObj.rectObj.height + 1);

        // Check if the random point in circle too
        if (
              pointInCircle(
                    x, y,
                    g_mainThreadObj.circleObj.centerX,
                    g_mainThreadObj.circleObj.centerY,
                    g_mainThreadObj.circleObj.radius
                    ) === true
              ) {
            // it is, so increment count
            numberOfPointsInCircleToo++;
        }
    }

    // this thread is done, so

    // post number of random points in square also in circle, to main thread
    postMessage(numberOfPointsInCircleToo);

    // exit
    close();
}
