"use strict"

var ellipseSize = 200;
var ellipseRad = ellipseSize / 2;


var thoughts = [];
var thoughtsLength = 100;
var thoughtX;
var thoughtY;
var thoughtDist;
var i;

var r;
var theta;

var mouseToBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //ellipseTemp();

noCursor();
  for (i = 0; i < thoughtsLength; i++) {
    placeThought();
    thoughts.push(new Thought(thoughtX, thoughtY, 10));
    thoughts[i].setVelocity();
  }

}

function draw() {
  for (i = 0; i < thoughtsLength; i++) {
    if (releaseThought()) {
      thoughts[i].update();
    }
    thoughts[i].display();
  }
}

// function ellipseTemp() {
//   ellipseMode(CENTER);
//   push();
//   stroke(255);
//   fill(0);
//   ellipse(width/2,height/2,ellipseSize);
//   pop();
// }

function placeThought() {

 r = random(0,ellipseRad);
 theta = random(0,2*PI);

 thoughtX = width/2 + r*cos(theta)
 thoughtY = height/2 + r*sin(theta)

}

function mouseDragged() {

  for (i = 0; i < thoughtsLength; i++) {

    if (mouseToBall) {
      thoughts[i].update();
    }
  }
}


function releaseThought() {
  mouseToBall = dist(mouseX, mouseY, thoughtX, thoughtY);
  if (mouseToBall < thoughts[i].size / 2) {
    return true;
  }
}
