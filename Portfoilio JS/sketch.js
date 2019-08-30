
var pos, target, vel;
var r;
var drag;
var strength;
var x, y, fillColor, currentTime;

//Limit on how long a circle stays up.
var time = 200;


function setup() {

  createCanvas(windowWidth, windowHeight);

  r = 10;
  pos = 0;
  target = 0;
  vel = 0;

  x = random(100, windowWidth);
  y = random(100, windowHeight);
  fillColor = color(0);

  drag = .82;
  strength = 0.2;

  currentTime = 0;
}

//Draw circles
function draw() {

  clear();
  target = 100;

  //Calulate the force for the circle
  var force = target - r;
  force *= strength;

  //Mul by drag and add by force to get new Velocity
  vel *= drag;
  vel += force;

  //Add velocity to new radius
  r += vel;

  currentTime++;

  if(currentTime > time) {
    redrawCircle();
  }

  //Draw
  noStroke();
  fill(fillColor);
  ellipse(x,y, r);
}

//If resized just changed canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Creates a new circle somewhere on the screen with a random color.
function redrawCircle() {

  r = 0;
  x = random(100, windowWidth);
  y = random(100, windowHeight);
  fillColor = color(random(0, 255), random(0, 255), random(0, 255));
  currentTime = 0;
}
