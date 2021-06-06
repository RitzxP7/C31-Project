var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 80; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 35; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  
  //create particle objects
  ball1 = new Particle(0, 20);
  ball2 = new Particle(50, 20);
  ball3 = new Particle(100, 20);
  ball4 = new Particle(150, 20);
  ball5 = new Particle(200, 20);
  ball6 = new Particle(250, 20);
  ball7 = new Particle(300, 20);
  ball8 = new Particle(450, 20);
  ball9 = new Particle(600, 20);
  ball10 = new Particle(650, 20);
  ball11 = new Particle(700, 20);
  ball12 = new Particle(750, 20);
  ball13 = new Particle(800, 20);




    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()
ball6.display()
ball7.display()
ball8.display()
ball9.display()
ball10.display()
ball11.display()
ball12.display()
ball13.display()

}