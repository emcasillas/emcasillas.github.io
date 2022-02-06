// I'm watching The Coding Train trying to figure out how to import photos because I want to work with hypertext like I was suggested to! I drew up some text pngs and I am going to figure out how to make them clickable as well. I need to make more. 
let mold;
let pain;
let love;

function preload(){
  mold = loadImage('mold.png');
  pain = loadImage('pain.png');
  love = loadImage('love.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  
//my colors
  //onyx  fill(43,46,49);
  //blue  fill(165,216,255);
  //yellowfill(221,244,91);
  //pink  fill(217,3,104);
  //onyx  fill(26,167,119);
  //gray? fill(180,180,200);
  
  background(43,46,49);
  
 //Attempting shakey effect. update it worked >:) Debating the framerate now though.
  let this_x;
  let this_y;
  this_x=random(-2,2);
  this_y=random(-2,2);

    
  
  //I want the text to be responsive to all screen sizes but I am not sure if this is the best or right way to do it. Also, I might want to look for another web safe font or just make my own because I don't know how I feel about the serif.
  text('DO YOU FEEL THE _______ INSIDE?',windowWidth/2,windowHeight/3.75);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("serif", 34);
  fill(180,180,200);
  
 //This is so cool I wanted to leave it in I just love when the quality of a drawing stays good and this is fun to mess around with.
 // image(img, 0,0, mouseX, mouseY);
  
 // I want the text to kind of lightly swivel in place. I think it would make it more dynamic as well. Figuring that out. Once again also not sure if this is good or bad UX design. We will see I guess. I also forgot to crop the pictures if something goes wrong I will go back and fix it :(. update the positions are maybe temporary if I want to add more options!
  image(mold, windowWidth/16+ this_x, windowHeight/6.5+ this_y,340,340);
  image(pain, windowWidth/2+ this_y, windowHeight/3+ this_x,340,340);
  image(love, windowWidth/4+ this_y, windowHeight/4+ this_y,340,340);

}
//next step is making them clickable D: