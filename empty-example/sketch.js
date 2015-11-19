var e1, e2, e3, e4, e5, e6, e7;

var targetX, targetY,
	ballX = 50,
	ballY = 50,
	ballXDirection = 1,
	ballYDirection = -1;


function setup() {
  createCanvas(720, 400);
  noStroke();
  e1 = new Eye(150, 16, 120);
  e2 = new Eye(64, 185, 80);
  e3 = new Eye(320, 230, 220);
  e4 = new Eye(200, 100, 30);
  e5 = new Eye(460, 80, 100);
  e6 = new Eye(580, 350, 200);
  e7 = new Eye(660, 30, 80);

}

function draw() {
	background(255,204,0);
	e1.update(ballX, ballY);
	e2.update(ballX, ballY);
	e3.update(ballX, ballY);
	e4.update(ballX, ballY);
	e5.update(ballX, ballY);
	e6.update(ballX, ballY);
	e7.update(ballX, ballY);
	e1.display();
	e2.display();
	e3.display();
	e4.display();
	e5.display();
	e6.display();
	e7.display();

	strokeWeight(20);
	ballX = ballX + 1.0 * ballXDirection;
	ballY = ballY + 0.8 * ballYDirection;

	if(ballX > width-30 || ballX < 30) {
		ballXDirection *= -1;
	}
	if(ballY > height-30 || ballY < 30) {
		ballYDirection *= -1;
	}
	fill(111);
	ellipse(ballX, ballY, 30, 30);
}


function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;
 this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(51);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}

