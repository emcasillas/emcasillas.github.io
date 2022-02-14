//Code from https://editor.p5js.org/aferriss/sketches/H1oXWPu5G
//moldFunc will serve to place the MOLD png and make it clickable
class moldFunc {

  constructor() {
    this.x = 200;
    this.y = 200;
    this.size = 150;
    this.inside = false;
  }

  display() {
    image(mold, this.x, this.y,this.size,this.size);
  }

  move() {
    this.x = this.x+random(-2, 2);
    this.y = this.y+random(-2, 2);
  }
//clicked to make it interactive. makes it so that the clicking is confined to the png.
  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size && this.inside == false) {
      if(int(random(0,10)) == 5)
      {
        this.x = windowWidth/1.92;
        this.y = (windowHeight/7.3)-20;
        this.inside = true;
        drawScreen();
        this.display();
      }
      else
      {
        rectMode(CENTER);
//Interactive flash in between clicks.
        rect(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
        fill('white');
        this.x = random(0,windowWidth-310);
        this.y = random(0,windowHeight-240);
      }
    }
  }
}