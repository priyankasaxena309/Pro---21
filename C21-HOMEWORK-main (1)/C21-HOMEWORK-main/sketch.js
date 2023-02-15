const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var left
var right


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		restitution : 0.95
	}
	//Create the Bodies Here.
	ground = new Ground(800, 690, 1600, 20);
	left = new Ground(750, 690, 20, 150)
	right = new Ground(1100, 690, 20, 150)
	ball = Bodies.circle(400, 650, 40, ball_options);
	Engine.run(engine);
  
	rectMode(CENTER)
	ellipseMode(RADIUS)
}


function draw() {
	
	rectMode(CENTER);
	background(0);
  
	Engine.update(engine)
	ground.show();
	left.show();
	right.show();

	ellipse (this.ball.position.x, this.ball.position.y, 40)
	drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}

