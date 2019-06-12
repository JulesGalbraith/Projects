"use strict"

var userSize = 25;
var step = 20;
var i, anOther, dest, velocity, acceleration, mag;
var others = [];
var numOthers = 30;
var othMax = 20;
var othMin = 10;
var collected;


canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
var canvasSize = new Point(canvas.width, canvas.height);


var user = new Path.Circle([canvas.width / 2, canvas.height / 2], userSize);
user.strokeWidth = 3;
user.fillColor = 'white';
user.strokeColor = new Color(0);
createBackground();

createOthers();
choosePoint();

function onFrame(event){
updateOthers();
updateUser();
}

function choosePoint(){
 velocity = new Point(0,0);
 acceleration = new Point.random()*(-3,2)-1.1;
}

function onKeyDown(event) {
  if (event.key == 'left') {
    createBackground();
    user.position.x -= step;
  }
  if (event.key === 'right') {
    createBackground();
    user.position.x += step;
  }
  if (event.key === 'down') {
    createBackground();
    user.position.y += step;
  }
  if (event.key === 'up') {
    createBackground();
    user.position.y -= step;
  }
}

function createOthers() {

  for (var i = 0; i < numOthers; i++) {
    var position = Point.random() * canvasSize;
    var othSize = Math.random() * (othMax - othMin) + othMin;
    anOther = new Path.Circle(position, othSize);
    anOther.strokeWidth = 3;
    anOther.fillColor = 'white';
    anOther.strokeColor = 'black';
    anOther.collected = false;
    anOther.dist = anOther.position.getDistance(user.position);
    others.push(anOther);
    }
}

function updateUser(){
  if (user.position.x> canvas.width) {user.position.x = userSize}
  if (user.position.x < 0){user.position.x = canvas.width - userSize}
  if (user.position.y > canvas.height) {user.position.y =userSize}
  if (user.position.y < 0){user.position.y = canvas.height-userSize}
}
function updateOthers() {


  for (i = 0; i < numOthers; i++) {
    choosePoint();
    velocity += acceleration;
    others[i].position += velocity*2;
    velocity.length = 10;

    if (others[i].position.x > canvas.width) {others[i].position.x = 0}
    if (others[i].position.x < 0){others[i].position.x = canvas.width}
    if (others[i].position.y > canvas.height) {others[i].position.y =0}
    if (others[i].position.y < 0){others[i].position.y = canvas.height}

    collect();
    }
  }

function collect() {
  distance = others[i].position.getDistance(user.position);
    if (distance < others[i].length/2+userSize/2){
      mag = new Point(user.position-others[i].position);
      mag.length = 35;
      others[i].position += mag;
      others[i].collected = true;
    }
}

function createBackground() {
  var background = new Path.Rectangle({
    point: [0, 0],
    size: [canvas.width, canvas.height],
    strokeColor: 'white',
  });
  background.fillColor = '#87b4ff';
  background.sendToBack();
}
