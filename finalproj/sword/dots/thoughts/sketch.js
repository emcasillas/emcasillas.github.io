// var password ="G4T3";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');
  stroke('#39FF14');
  noFill();
  let diam=random(10);
  ellipse(mouseX, mouseY,diam);

    // if (mouseX>=740&&mouseX<=760&&mouseY>=293&&mouseY<=300){
    //   document.getElementById('white').style.display;
    // }
    // else{
    //   document.getElementById('white').style.display="none";
    // }


}


  function mousePressed(event){
    loop();
  }

//I was trying to make a sort of thing where you can click your arrow and a new phrase would pop up but none of it is working.
// //https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
// document.onkeydown = checkKey;

// document.getElementById('one').style.display="none";
// document.getElementById('two').style.display="none";
// document.getElementById('three').style.display="none";
// document.getElementById('four').style.display="none";
// document.getElementById('five').style.display="none";
// document.getElementById('six').style.display="none";
// document.getElementById('seven').style.display="none";
// document.getElementById('eight').style.display="none";
// document.getElementById('nine').style.display="none";

// let one= document.getElementById('one');
// let two= document.getElementById('two');
// let three= document.getElementById('three');
// let four= document.getElementById('four');
// let five= document.getElementById('five');
// let six= document.getElementById('six');
// let seven= document.getElementById('seven');
// let eight= document.getElementById('eight');
// let nine= document.getElementById('nine');

// const texts = ["one", "two", "three","four","five","six","seven","eight","nine"];
// var num=0;

// function checkKey(e) {

//     e = e || window.event;
//     if (num<0){
//       num=9;
//     }
//     if (num>9){
//       num=0;
//     }
//     if (e.keyCode == '37') {
//        // left arrow
//        num-1;
      
//         texts[num];
//         document.getElementById(texts[num]).style.display;
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        num+1;
//        document.getElementById(texts[num]).style.display;
//     }

// }

// function passcheck(){

//   if(document.getElementById('pass1').value !=  password){
//     alert('brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass brass');
//     return false;
//   }

//   if(document.getElementById('pass1').value == password){
//     alert('speak to me his virtues')
//   }}


