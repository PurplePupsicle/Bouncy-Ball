const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,box,ball;










function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var options = {
  isStatic: true
}
box = Bodies.rectangle(200,300,450,50,options);

World.add(world,box) 
var ball_options = {
  restitution:1.0
}
ball = Bodies.circle(200,10,40,ball_options);
World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(box.position.x,box.position.y,450,50);
  ellipse(ball.position.x,ball.position.y,40,40);
}