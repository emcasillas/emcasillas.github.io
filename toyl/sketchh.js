function preload() {
  //https://www.spriters-resource.com/pc_computer/coolrun2/sheet/102127/
  img = loadImage('background.png');
  imgg= loadImage('fastwalkright.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0, windowWidth, windowHeight);
}

var theThing = document.querySelector("#character");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	theThing.style.left = xPosition + "px";
	theThing.style.top = yPosition + "px";
	}
);





