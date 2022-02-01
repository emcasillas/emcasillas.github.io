function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(0);
  for (var x=0;x<=width;x++){
    stroke("white");
    strokeWeight(5);
    fill(random(255),random(255),random(255),40);
    rect(random(200), random(200),random(width), random(height));
  }
  for (var y=0;y<=width;y+=5){
    noStroke();
    //fill(random(0,100),random(0,100),random(0,100),70);
    fill(255,255,255,60);
    ellipse(random(width), random(height),random(100), random(100));
  }
}