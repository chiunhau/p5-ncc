function setup() {
	createCanvas(800, 600);
	translate(100, 100);
	background(255);
	frameRate(60);
}

function draw() {
	background(255);
	var sinSeed = sin(frameCount * 0.05) + 1;
	ellipse(400, 200 * sinSeed, 100, 100);
}