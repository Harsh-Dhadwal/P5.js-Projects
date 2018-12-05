initial_x = [];
initial_y = [];
vertices = 3;
fraction = 0.5;
conSize = 80;

function getDim() {
  winW = windowWidth;
  winH = windowHeight;
  if (winW >= winH){
    winW = winH - conSize;
  } else {
    winH = winW;
    winW = winH - conSize;
  }
}

function windowResized(){
  removeElements();
  setup();
}

function setup() {
  getDim();
	createCanvas(winW, winH);
  
  x = windowWidth/2;
	pVert_Slide = createSlider(3, 20, vertices, 1);
	pVert_Slide.size(width-50, 3);
	pVert_Slide.position(x-width/2.2, height-70);
	pVert_Slide.changed(updateValues);

	frac_Slide = createSlider(0.2, 0.9, fraction, 0.005);
	frac_Slide.size(width-50, 3);
	frac_Slide.position(x-width/2.2, height-20);
	frac_Slide.changed(updateValues);
	
	updateValues();
}

function updateValues() {
	clear();
	vertices = pVert_Slide.value();
	fraction = frac_Slide.value();
	initial_x = [];
	initial_y = [];
	let radius = width/2 - 30;
	for(i=0; i<vertices; i++){
		initial_x.push(width/2 + radius * sin(-(i+vertices/2) * TWO_PI/vertices));
		initial_y.push(width/2 + radius * cos(-(i+vertices/2) * TWO_PI/vertices));

		point(initial_x[i], initial_y[i]);
	}

	x=random(width);
	y=random(width);

	noStroke();
	fill(255);
	textSize(15);
	text('Vertices: '+vertices, 20, height-80);
	text('Fraction: '+fraction, 20, height-30);
	strokeWeight(2);
	stroke(255,0,0);
}

function draw() {

	for (j=0; j<10; j++){
		point(x,y);
		let randVertex = floor(random(vertices));

		x = lerp(x, initial_x[randVertex], fraction);
		y = lerp(y, initial_y[randVertex], fraction);
	}
}