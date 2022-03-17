function preload() {
  //https://www.spriters-resource.com/pc_computer/coolrun2/sheet/102127/
  img = loadImage('background.png');
  // https://www.spriters-resource.com/nintendo_switch/newsupermariobrosudeluxe/sheet/169163/
  imgg= loadImage('fastwalkright.gif');
  imggg= loadImage('fastwalkleft.gif');
  //https://www.spriters-resource.com/genesis_32x_scd/wackyworldscreativitystudio/sheet/156956/
  treeback = loadImage('trees.png');
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

  if (x>=1200 && y>=300){
    // treePage();
  }
}

//  function mousePressed(event){
//    loop();
//  }

//  function treePage(){

// // var x=20;
// // var y=20;
// // //var imaje=imgg;


// // function draw() {
// //   image(treeback, 0, 0, windowWidth, windowHeight);

// //   if (mousePressed){

// //     if (mouseX>=x){
// //       image(imgg, x,y);
// //       x+=2.5
// //     }
// //     if (mouseY>y){
// //       y+=2.5
// //     }
// //     if (mouseX<x){
// //       image(imggg, x,y);
// //       x-=2.5
// //     }
// //     if (mouseY<y){
// //       y-=2.5
// //     }
// //     // if(mouseX=x){
// //     //   image(still, x,y);
// //     // }
// //   }

// //   if (x>=1200 && y>=300){

// //   }
// // }

// //  function mousePressed(event){
// //    loop();
// //  }
  
//   }

 