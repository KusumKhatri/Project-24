const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone1;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(700,500,20,20);
    stone1 = new Stone(450,300,7);
    stone2 = new Stone(450,302,7);
    stone3 = new Stone(450,304,7);
    stone4 = new Stone(450,306,7);
    stone5 = new Stone(450,308,7);
    stone6 = new Stone(450,310,7);
    stone7 = new Stone(450,320,7);
    iron1 = new Iron(900,500,100,150);
    iron2 = new Iron(200,500,50,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    iron1.display();
    iron2.display();
    plane.display();
    hammer.display();
    rubber.display();
    
 
}