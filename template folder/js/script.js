"use strict"

var ellipseSize = 200;
var ellipseRad = ellipseSize / 2;


var thoughts = [];
var thoughtsLength = 1000;
var thoughtX;
var thoughtY;
var thoughtDist;
var i;

var mouseToBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //ellipseTemp();

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
  thoughtX = random(width / 2 - ellipseRad, width / 2 + ellipseRad);
  thoughtY = random(height / 2 - ellipseRad, height / 2 + ellipseRad);

  thoughtDist = (thoughtX, thoughtY, width / 2, height / 2)
  thoughtDist = constrain(thoughtDist, 0, ellipseRad);

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
