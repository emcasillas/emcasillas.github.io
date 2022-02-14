// I'm watching The Coding Train trying to figure out how to import photos because I want to work with hypertext like I was suggested to! I drew up some text pngs and I am going to figure out how to make them clickable as well. I need to make more. 
let mold;
let moldDraw;

function preload(){
  mold = loadImage('mold.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  moldDraw= new moldFunc();
}

function draw() {
  //Made a draw function for ease of access in restarting/replaying at the end if i need to.
  // If the mold lands inside of the line it will draw a bunch of green dots to look like mold covering the screen.
  if(moldDraw.inside == false)
  {
    drawScreen();
    moldDraw.display();
    moldDraw.move();
  }
  else
  {
    fill(random(120,140),144,random(70,80),50);
    noStroke();
    moldSize = random(20,150);
    frameRate(frameRate+1);
    ellipse(random(0,windowWidth),random(0,windowHeight),moldSize,moldSize);
  }
}


 function drawScreen(){
   //my colors
  //onyx  fill(43,46,49);
  //blue  fill(165,216,255);
  //yellowfill(221,244,91);
  //pink  fill(217,3,104);
  //onyx  fill(26,167,119);
  //gray? fill(180,180,200);

  background(43,46,49);

 //Attempting shakey effect. update it worked >:) Debating the framerate now though.
  //let this_x;
  //let this_y;
  //this_x=random(-2,2);
  //thisy=random(-2,2);



  //I want the text to be responsive to all screen sizes but I am not sure if this is the best or right way to do it. Also, I might want to look for another web safe font or just make my own because I don't know how I feel about the serif.
  text('DO YOU FEEL THE _______ INSIDE?',windowWidth/2,windowHeight/3.75);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("serif", 34);
  fill(180,180,200);



//  image(mold, windowWidth/16+ this_x, windowHeight/6.5+ //this_y,340,340);
//  image(pain, windowWidth/2+ this_y, windowHeight/3+ //this_x,340,340);
//  image(love, windowWidth/4+ this_y, windowHeight/4+ //this_y,340,340);

  }

function mousePressed(){
 moldDraw.clicked(); 
}
//next step is making them clickable D: