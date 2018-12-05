let angle = 0;
let w = 30;
let ma;
let maxD;

function setup() {
	createCanvas(400, 400, WEBGL);
	ma = atan(1);
	maxD = dist(0,0,200,200);
}
  
function draw() {
	background(255);
	noStroke();
	ortho(-350, 350, -350, 350, 0, 1000);
	ambientLight(200, 200, 200);
	pointLight(255, 255, 255, 350, 0,0);
	rotateX(-QUARTER_PI);
	rotateY(ma);

	let offset = 0;
	for (let z = 0; z < height; z+= w){
		for (let x = 0; x < width; x+= w){
			push();
			let d = dist(x,z,width/2,height/2);
			let offset = map(d, 0, maxD, -PI, PI);
			let a = angle + offset;
			let h = map(sin(a), -1, 1, 70, 400);
			translate(x-width/2, 0, z-height/2);
			ambientMaterial(228, 218, 165);
			// rect(x-width/2+w/2, 0, w-2, h);
			box(w, h, w);
			
			pop();
		}
		offset+=0.1;
	}

	angle-=0.05;
}
