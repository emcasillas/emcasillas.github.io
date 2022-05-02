var password ="G4T3";
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background("black");
  stroke('#39FF14');
  noFill();
  let diam=random(10);
  ellipse(mouseX, mouseY,diam);
}

function passcheck(){

  if(document.getElementById('pass1').value !=  password){
    alert('brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass');
    return false;
  }

  if(document.getElementById('pass1').value == password){
    alert('speak to me his virtues')
  }

}
