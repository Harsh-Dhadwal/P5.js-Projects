sliderTmin = 2;
sliderTmax = 300;

sliderPmin = 2;
sliderPmax = 300;

pointsNum = 200;
timesTable = 2;

function getDim() {
	winW = windowWidth;
	winH = windowHeight;
	if (winW >= winH) {
		winW = winH;
	} else {
		winH = winW;
	}
	radius = (winH - 100) / 2;
	createCanvas(winW, winH);
}

function windowResized() {
	getDim();
}

function setup() {
	getDim();
	frameRate(5);
	sliderT = createSlider(sliderTmin, sliderTmax, timesTable);
	sliderP = createSlider(sliderPmin, sliderPmax, pointsNum);
}

function draw() {
	clear();

	x = windowWidth / 2;
	sliderP.position(x - width / 2.1, winH - 80);
	sliderT.position(x - width / 2.1, winH - 35);
	sliderT.size(winW - 40, 20);
	sliderP.size(winW - 40, 20);

	noStroke();
	fill(255);
	textSize(15);
	text('Points: ' + pointsNum, 30, winH - 80);
	text('TimesTable: ' + timesTable, 30, winH - 35);

	//timesTable+=1; //To play animation, uncomment this & comment next line.
	timesTable = sliderT.value();
	pointsNum = sliderP.value();

	translate(winW / 2, (winH - 80) / 2);

	points = [];
	for (var i = 0; i < TWO_PI; i += TWO_PI / pointsNum) {
		var x = -radius * sin(i);
		var y = radius * cos(i);
		points.push(new cord(x, y));
	}

	for (var j = 0; j < points.length; j++) {
		points[j].show();
		// points[j].annotate(j);

		var multiple = j * timesTable;
		while (multiple >= pointsNum) {
			multiple -= pointsNum;
		}
		points[j].connect(points[multiple].x, points[multiple].y);
	}
}

class cord {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.show = function () {
			strokeWeight(2);
			stroke(255, 0, 0);
			point(this.x, this.y);
		};
		this.annotate = function (num) {
			noStroke();
			fill(255, 0, 0);
			textSize(8);
			textAlign(CENTER, CENTER);
			text(num, x * 1.1, y * 1.1);
		};
		this.connect = function (Cordx, Cordy) {
			stroke(255, 0, 0, 120);
			strokeWeight(1);
			line(this.x, this.y, Cordx, Cordy);
		};
	}
}