class enemy{
    constructor(x,y,t){
        this.x = x;
        this.y = y;
        this.a = atan2(playerY-this.x, playerX-this.x);
        this.w = 0;
        this.target = t;
        this.e = false;
    }
    display(){
        rectMode(CENTER);
        this.a = atan2(playerY-this.y, playerX-this.x);
        {
            push();
            translate(this.x,this.y);
            if(playerX < this.x){
                scale(1,-1);
                rotate(-this.a);
            }else{
                rotate(this.a);
            }
           
            scale(0.5);
            image(ArmImg,100,50);
            pop();
            }
         {
        push();
        translate(this.x-20,this.y+70);
        if(playerX < this.x){
            scale(-1,1);
        }
        scale(0.6);
        image(armour,0,0);
        pop();
        }
        { 
        push();
        translate(this.x-this.mmmm,this.y-75);
        scale(-0.1,0.1);
        //translate(this.x,this.y);
        if(playerX < this.x){
            scale(1,-1);
            rotate(this.a);
            this.mmmm = 25;
        }else{
            rotate(-this.a);
            this.mmmm = 0;
        }
        image(head,0,0);
        pop();
        }
        {
        push();
        translate(this.x,this.y);
        if(playerX < this.x){
            scale(1,-1);
            rotate(-this.a);
        }else{
            rotate(this.a);
        }
       
        image(BlasterImg,100,0);
        scale(0.5);
        image(ArmImg,100,30);
        pop();
        }
        if(dist(this.x,this.x,playerX,playerX)>400){
            this.x = lerp(this.x, playerX, 0.01);
        }
        //console.log(playerX+", "+this.x)
    }
    fire(){
        if(frameCount%100 === 0){
            this.blast = createSprite(this.x,this.y,10,10); 
            this.blast.addImage(BlastImg);
            this.blast.lifetime = 100;
            this.blast.setSpeedAndDirection(8,this.a);
            this.blast.rotation = this.a;
           this.e = true;
        }
        if(this.e === true && dist(this.blast.x,this.blast.y,width/2,height-height/3)<50  ){
            console.log('ooo');
            hp2 -= 0.5;
        }
    }
    walk(){
   
        push();
        translate(this.x,this.y+160);
        scale(0.3);
        if(playerX < this.x){
            scale(-1,1);
            translate(60,0);
        }
        rotate(this.w);
        image(leg,0,0);
        pop();
        push();
        translate(this.x,this.y+160);
        scale(0.3);
        if(playerX < this.x){
            scale(-1,1);
            translate(60,0);
        }
        rotate(-this.w);
        image(leg,0,0);
        pop();
        this.w = sin(frameCount *2)*10;
    }
}