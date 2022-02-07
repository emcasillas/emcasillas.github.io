let lines;
let c={x:540, y:300};
let r=153;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('black');
  for(lines =0;lines<=windowWidth;lines=lines+9){
    stroke('white');
    line(lines,0,lines,windowHeight);
  }
  rectMode(CENTER);
  fill('black');
  rect(200,300,306);
  
  ellipse(540,300,306);
  
  for(lines=147;lines<454;lines=lines+9){
    line(47, lines,353,lines);
  }
  
  //for(lines=147;lines<454;lines=lines+9){
  for(let y=c.y-r;y<c.y+r;y+=9){
    let x1= c.x-Math.sqrt(r*r-(c.y-y)*(c.y-y));
    let x2= c.x + Math.sqrt(r*r - (c.y-y)*(c.y-y));
    line(x1, y,x2,y);
  }
}