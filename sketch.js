

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  
  mango1 = new Mango(325,250,35,40)
  mango2 = new Mango(150,260,35,40)
  mango3 = new Mango(200,220,35,40)
  mango4 = new Mango(275,230,35,40)
  mango5 = new Mango(250,175,35,40)
  stone1 = new Stone(25,375,75,50)
  treeobj = new Tree(240,270,275,300)
  
}


function draw() 
{
  background(100);
  treeobj.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  stone1.display()
  Engine.update(engine);
  
  
}
function shoot(){
  if (key) {
    
  }
}

