// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro;

// where our player is current hanging out at
var playerX, playerY;

// artwork for our player
var playerArtwork;

// a bunch of coins
var coins = [];

// points
var points = 0;

// this is a major hack, but if you plan on using getScreenPosition on a mobile device you have to load an image or other media file here
// the reason has to do with the fact that the AR.js camera system takes some time to initialize, and this process pauses while the user
// is providing their consent to turn on their camera via a pop-up box.  however, p5 will continue executing behind the scenes and will set
// up its end of the AR world wtihout AR.js.  using 'preload' will pause p5's startup routine until after the user clicks to allow access to
// their camera, thus bringing the system back into balance.
// as mentioned, this is a hack, but I'm working on fixing it for the next version of the library!
function preload() {
   img =loadImage('images/player.png');
   imgg =loadImage('images/stonebrick.png');
   imggg= loadImage('images/gold_block.png');
   img2= loadImage('images/soap.png');
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');

  // place the player in the middle of the screen
  playerX = width/2;
  playerY = height/2;
}


function draw() {
  // erase the background
  world.clearDrawingCanvas();
  image(imgg, 100,200,50,50);
  image(imggg, 600,400,50,50);
  image(img2, 700,300,50,50);
  // use the markers as positional controllers
  if (markerHiro.isVisible() == true) {
    // get the position of this marker
    var hiroPosition = markerHiro.getScreenPosition();
 
    image(img, hiroPosition.x, hiroPosition.y, 100, 100 );

  }

  if (hiroPosition.x>= 100&&hiroPosition.x<=150&&hiroPosition.y>=200&&hiroPosition.y<=250){
    img=loadImage('images/youdied.jpg');
  }

  if (hiroPosition.x>= 550&&hiroPosition.x<=600&&hiroPosition.y>=350&&hiroPosition.y<=400){
    img=loadImage('images/shinyplayer.png');
  }

  if (hiroPosition.x>= 650&&hiroPosition.x<=700&&hiroPosition.y>=250&&hiroPosition.y<=300){
    img=loadImage('images/player.png');
  }

}