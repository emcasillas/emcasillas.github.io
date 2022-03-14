function preload() {
  //https://www.spriters-resource.com/pc_computer/coolrun2/sheet/102127/
  img = loadImage('background.png');
  imgg= loadImage('fastwalkright.gif');
  imggg= loadImage('fastwalkleft.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

var x=20;
var y=20;
//var imaje=imgg;


function draw() {
  image(img, 0, 0, windowWidth, windowHeight);

  if (mousePressed){

    if (mouseX>=x){
      image(imgg, x,y);
      x+=2.5
    }
    if (mouseY>y){
      y+=2.5
    }
    if (mouseX<x){
      image(imggg, x,y);
      x-=2.5
    }
    if (mouseY<y){
      y-=2.5
    }
    // if(mouseX=x){
    //   image(still, x,y);
    // }
  }

  if (x>=1300 && y>=300){
//go to next html
  }
}

 function mousePressed(event){
   loop();
  //  var lead = document.getElementById("leading");
  //  lead.style.opacity=0;
   
  // var xposition = (event.clientX - walking.offsetLeft - walking.offsetWidth/2);
  // var yposition = (event.clientY - walking.offsetTop - walking.offsetHeight/2);
  // walking.style.transform = "translate("+ xposition + "px," + yposition + "px)";
 }

// var walking= imgg;

// walking.addEventListener('click', mouseClicked);

// function mouseClicked (event){
//   var xposition = (event.clientX - walking.offsetLeft - walking.offsetWidth/2);
//   var yposition = (event.clientY - walking.offsetTop - walking.offsetHeight/2);
//   walking.style.transform = "translate("+ xposition + "px," + yposition + "px)";
//   console.log(event);
// }



// //function leftArrowPressed() {
// //	var element = document.getElementById("character");
// 	element.style.left = parseInt(element.style.left) - 5 + 'px';
// 	}

// 	function rightArrowPressed() {
// 	var element = document.getElementById("character");
// 	element.style.left = parseInt(element.style.left) + 5 + 'px';

// 	}

// 	function upArrowPressed() {
// 	var element = document.getElementById("character");
// 	element.style.top = parseInt(element.style.top) - 5 + 'px';
// 	}

// 	function downArrowPressed() {
// 	var element = document.getElementById("character");
// 	element.style.top = parseInt(element.style.top) + 5 + 'px';
// 	}

// 	function moveSelection(evt) {
// 		switch (evt.keyCode) {
// 			case 37:
// 			leftArrowPressed();
// 			break;
// 			case 39:
// 			rightArrowPressed();
// 			break;
// 			case 38:
// 			upArrowPressed();
// 			break;
// 			case 40:
// 			downArrowPressed();
// 			break;
// 			}
// 		};

// function docReady()
// {
  
//   window.addEventListener('keydown', moveSelection);
// }




