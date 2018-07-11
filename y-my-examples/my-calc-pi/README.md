# Parallel programming to compute PI value

<h4>Background Math<h4>
<pre>Area of square/ Area of circle = side * side / Pi * radius * radius
if side = 2 * radius then
    Area of square/ Area of circle
        = (2*radius) * (2*radius) / Pi * radius * radius
        = 4 * radius * radius / Pi * radius * radius
        = 4 / Pi
    => Area of square * Pi = 4 * Area of circle
    => Pi = 4 * Area of circle/ Area of square
</pre>

<h4>Logic<h4>
<pre>1. Draw a square
2. Draw a circle, such that circle radius is 1/2 of square's side
    => circle will be embedded in square
3. Fill Area of square with some random points
4. Count the number of above random points, that fall in Area of circle too
5. Number of random points in square is Area of square
6. Number of above random points that fall in circle is Area of circle
7. Calc Pi = 4 * Area of circle/ Area of square
           = 4 * Number of points in square/ Number of points in circle too
</pre>

<h4>Web Application<h4>
<pre>Prerequisites:
    HTML 5 Canvas to draw
    HTML 5 Workers to schedule divided tasks
    JavaScript knowledge, mainly Math library & basics

This is a HTML 5 & Javascript application

index.html
    HTML5 Canvas file where the square and cirle are shown
    Also, on the right the log is displayed
main.js
    Main thread that shedules work to all workers
myWorker.js
    All workers/threads use this.
    Each calculates of it's share of Pi
</pre>
