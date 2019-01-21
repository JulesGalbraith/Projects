class Thought {
  constructor(x,y,size) {
    this.x = x;
    this.y =y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
  }


display() {
  push();
  noStroke();
  fill(random(255));
  ellipse(this.x,this.y,this.size);
  pop();
}

update() {


  if (! this.releaseThought) {
    this.vx = 0;
    this.vy = 0;
  }

  else {

  this.setVelocity();
}

  this.x += this.vx;
  this.y += this.vy;

  if (this.x > width) {
    this.vx = random(-this.speed,0)*this.vx;
  }
  if (this.x < 0){
    this.vx = random(-this.speed,0)*this.vx;
  }
  if (this.y > height) {
    this.vy = random(-this.speed,0)*this.vy;
  }
  if (this.y < 0){
    this.vy = random(-this.speed,0)*this.vy;
  }

}


setVelocity() {
  this.vx = random(-this.speed,this.speed);
  this.vy = random(-this.speed,this.speed);
}

releaseThought() {
  mouseToBall = dist(mouseX, mouseY, thoughtX, thoughtY);
  if (mouseToBall < thoughts[i].size / 2) {
    return true;
  }
}

}
