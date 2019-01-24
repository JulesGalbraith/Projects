"use strict"

var ellipseSize = 200;
var ellipseRad = ellipseSize / 2;


var thoughts = [];
var thoughtsLength = 1000;
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

 //noCursor();
  for (i = 0; i < thoughtsLength; i++) {
    placeThought();
    thoughts.push(new Thought(thoughtX, thoughtY,random(0,30)));
    thoughts[i].setVelocity();
  }

}

function draw() {
  for (i = 0; i < thoughtsLength; i++) {
  //  if (releaseThought()) {
      thoughts[i].update();
  //  }
    thoughts[i].display();
  }
}


function placeThought() {

 r = random(0,ellipseRad);
 theta = random(0,2*PI);

 thoughtX = width/2 + r*cos(theta)
 thoughtY = height/2 + r*sin(theta)

}

function mouseClicked() {

  for (i = 0; i < thoughtsLength; i++) {

    if (mouseToBall) {
      thoughts[i].update();
    }
  }
}


//
