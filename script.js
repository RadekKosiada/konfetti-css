var distanceBetweenSquares = 20;
var squareSize = 10;
// number of squares depends on the width of window (more mobile-friendly/responsive approach);
// their density will be always the same, regardless the size of the screen;
var numberOfSquares = 4*Math.round(window.innerWidth/distanceBetweenSquares);
console.log(numberOfSquares);

var colors = ["yellow", "blue", "red", "orange", "green"];
var numberOfColors = colors.length;

var animationDirection = ["normal", "reverse"];
var animationDirectionNumber = animationDirection.length;
 
var maxRotationSpeed = 1.5;
var minRotationSpeed = 0.25;

function createSquares() {
  for (var i = 0; i < numberOfSquares; i++) {
    //creating elements
    var square = document.createElement("div");
    square.setAttribute("class", "square");
  
    //style
    square.style.width = squareSize + "px";
    square.style.height = square.style.width;
    // adding random background color
    square.style.backgroundColor = colors[randomInteger(numberOfColors)];
    square.style.position = "fixed";
    square.style.zIndex = "-1";
    square.style.top =  randomInteger(window.innerHeight) + "px";
    // square.style.top = "0px";
    // setting left position for each square with even distance between them
    square.style.left = (window.innerWidth / numberOfSquares) * i + "px";
    // setting 'rotation' animation

    square.style.transform = "translate(100px, 200px);"

    square.style.animationName = "rotation";
    square.style.animationTimingFunction = "linear";
    square.style.animationIterationCount ="infinite";

    // square.style.animation = "rotation 2s linear infinite reverse, falling 2s linear infinite reverse";

    // square.style.animation = "rotation" + randomNumber(minRotationSpeed, maxRotationSpeed) + "s linear infinite" + animationDirection[randomInteger(animationDirectionNumber)];

    // direction will be randomly picked from predefined array;
    square.style.animationDirection = "normal";
    // duration will determine speed of rotation
    square.style.animationDuration = randomNumber(minRotationSpeed, maxRotationSpeed) + "s"; 

    // appending to body
    document.body.appendChild(square);
  }
}

createSquares();
//setInterval(createSquares, 2000);

// random position
// movement
// loop? or setInterval? or CSS animation!!!
// 3 animacje rotating
// 7 animacji ruchu
// i dodac je randomly do squares;

// add window resize event
// var num = window.addEventListener("resize", function () {
//   console.log(window.innerWidth)
//   return window.innerWidth;
// });

// console.log(num)

// var allSquares = document.getElementsByClassName("square");

// Array.from(allSquares).forEach(function(elem) {
  

//   elem.style.animationName = "falling";
//   elem.style.animationTimingFunction = "linear";
//   elem.style.animationIterationCount ="infinite";
// });


// supporting functions

// returns a random integer from 0 to num-1;
function randomInteger(num) {
  return Math.floor(Math.random() * Math.floor(num));
};

// returns a random number larger or equal than min and smaller (not equal) than max
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
};