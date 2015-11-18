function setup() {
	createCanvas(800, 600);
	translate(100, 100);
	background(0);
}

function draw() {
	noStroke();
	for (var i = 0; i < 9; i ++) {
		for (var j = 0; j < 9; j ++) {
			if ( i <= 2 ) {
				fill(color("blue"));
			}
			else if ( i > 2 && i <= 5) {
				fill(color("white"));
			}
			else {
				fill(color("red"));
			}
			ellipse(i * 40, j * 40, 30, 30);
		}
	}
}