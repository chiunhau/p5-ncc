function setup() {
	createCanvas(800, 600);
	translate(100, 100);
	background(0);
}

function draw() {
	noStroke();
	background(0);
	for (var i = 0; i < 9; i ++) {
		for (var j = 0; j < 9; j ++) {
		  var sinSeed = sin((frameCount + (i * j) * 5) * 0.05) + 1;
			if ( i <= 2 ) {
				fill(color("blue"));
			}
			else if ( i > 2 && i <= 5) {
				fill(color("white"));
			}
			else {
				fill(color("red"));
			}
			ellipse(i * 40, j * 40, sinSeed * 10 + 5, sinSeed * 10 + 5);
		}
	}
}
