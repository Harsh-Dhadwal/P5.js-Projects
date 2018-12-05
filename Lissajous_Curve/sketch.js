function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	penSize = 80;
	gap = 20;
	numRows = floor(height / (penSize + gap))-1;
	numCols = floor(width / (penSize + gap))-1;
	rows = [];
	cols = [];
	drawPoints = [];

	let pX = gap + penSize/2;
	let pY = (gap + penSize)*1.7;

	angle = 0;

	for(i=0; i<numRows; i++){
		p = new Pendulum(pX, pY, penSize, penSize, angle, 'r');
		rows.push(p);
		pY = pY + gap + penSize;
	}

	pX = (gap + penSize)*1.7;
	pY = gap + penSize/2;
	for(i=0; i<numCols; i++){
		p = new Pendulum(pX, pY, penSize, penSize, angle, 'c');
		cols.push(p);
		pX = pX + gap + penSize;
	}
	
}

function draw() {
	background(0);
	for (r=0; r<numRows; r++){
		rows[r].show();
		rows[r].update(angle*(r+1));
	}

	for (c=0; c<numCols; c++){
		cols[c].show();
		cols[c].update(angle*(c+1));
	}
	
	angle -= 0.01;

	for (a=0; a<numRows; a++){
		for(b=0; b<numCols; b++){
			ellipse(cols[b].dotX, rows[a].dotY,	8);
			drawPoints.push(createVector(cols[b].dotX, rows[a].dotY));
		}
	}

	drawPoints.forEach(function(point) {
		ellipse(point.x,point.y,3);
	  });

	if(angle<-6.5){
		noLoop();
	}
	// text(angle, 50, 50);
}
