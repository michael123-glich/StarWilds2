/**Matter.js**/
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
/**Images**/
function preload () {
    BlastImg = loadImage('Blast.png');
    BlasterImg = loadImage('Blaster.png');
    SpaceShipIcon = loadImage('Rocket.png');
    StarText = loadImage('StarText.png');
    PlayText = loadImage('PlayText.png');
    Space = loadImage('Space.jpg');
    ArmImg = loadImage('Arm.png');
    ArmImg2 = loadImage('Arm2.png');
    head = loadImage('helmet.png');
    head2 = loadImage('Helmet2.png');
    armour = loadImage('Armour.png');
    armour2 = loadImage('Armour2.png');
    leg = loadImage('leg.png');
    space = loadImage('Back.jpg');
    hp = loadImage('hp.png');

}
function setup () {
    hp2 = 100;
    canvas = createCanvas(displayWidth,displayHeight);
    enemys = [];
   
    playerY = height-height/3;
    playerX = width/2; 
    player1 = new player(width/2,height-height/3);
   // thing = createSprite(player1.x,player1.y,40,100);
    for(var i = 0; i < 10; i++){
        enemys.push(new enemy(i*1000,height-height/3));
    }
    
    know = false;
    page = 'home';
    
    engine = Engine.create();
    world = engine.world;
    MC = false;
    EnemyT = new enemy(width/2,height-100);
    EnemyT2 = new enemy(width/3,height/2);
    thingX = 0;
}
function draw () {
    /**Setup**/
    background(255,255,255);
    imageMode(CENTER);
    textAlign(CENTER,CENTER);
    Engine.update(engine);
    /**Code**/
    switch(page){
    case 'home':
        home();
        reset();
    break;
    case 'how':
        how();
        reset();
    break;
    case 'play':
        push();
        translate(thingX-width*20,0);
        for(var i = 0; i < 100; i++){
            translate(width,0);
            image(space,0,height/2,width,height);
        }
        pop();
        drawSprites();
        for(var i = 0; i < enemys.length; i++){
            enemys[i].walk();
            enemys[i].fire();
            enemys[i].display();
            
        }
         if(keyDown("right")){
          thingX-=5;
          for(var i = 0; i < enemys.length; i++){
            enemys[i].x-=5;               
            }
         }
        if(keyDown("left")){
            thingX+=5;
            for(var i = 0; i < enemys.length; i++){
                enemys[i].x+=5;               
            }
        }
        player1.walk();
        player1.fire();
       player1.display();
       image(hp,width/10,height/10);
       fill(100,100,100);
       textSize(50);
       textAlign(LEFT,CENTER);
       text(floor(hp2),width/9,height/10);
       if(hp2 < 0){
           reset(true);
       }
       if(hp2 < 100){
        hp2+=0.1;
       }
       if(enemys.length === 0){
           reset();
           page = 'win';
           
       }
    break;
    case 'win': 
       back();
       textAlign(CENTER,CENTER);
       fill(100);
       textSize(width*height/10000);
       text("CONGRATS!\nYou Won",width/2,height/2);
       if(MC){
           page = 'home';
       }
    }
    MC = false;
    //debug();
}
function reset(ye) {
    hp2 = 100;
    if(ye){
    page = 'home';
    }
    enemys = [];
    for(var i = 0; i < 10; i++){
        enemys.push(new enemy(i*1000,height-height/3));
    }
    thingX = 0;
}
function debug() {
    playerX = mouseX;
    playerY = mouseY;
}
function back () {
    this.x = width/2;
    this.x = lerp(this.x, mouseX, 0.5);
    this.y = height/2;
    this.y = lerp(this.y, mouseY, 0.2);
    push();
    translate(this.x,this.y);
    scale(width/1000);
    image(Space,0,0)
    pop();
}
function home () {
    background(100);
    this.x = width/2;
    this.x = lerp(this.x, mouseX, 0.5);
    this.y = height/2;
    this.y = lerp(this.y, mouseY, 0.2);
    push();
    translate(this.x,this.y);
    scale(width/1000);
    image(Space,0,0)
    image(StarText,0,0,width/1.5,height/6);
    image(PlayText,0,150,width/3,height/8);
    pop();
    image(SpaceShipIcon,width-50,height-100,width/5,height/3);
    if(MC){
        page = "how";
        if(know){
            page = "play";
        }
    }
    console.log(width*height/2000);
}
function how () {
    back();
    textAlign(CENTER,CENTER);
    textSize(width*height/10000);
    strokeWeight(0);
    fill(100,100,100,100);
    rect(0,0,width,height);
    text("HOW\nTry to beat this\nimpposible game\nleft and right arrows\nto move and\nclick to fire",width/2,height/2);
    if(MC){
        page = 'play';
        know = true;
    }
}
function mouseClicked(){
    document.documentElement.requestFullscreen()
    MC = true;
}
