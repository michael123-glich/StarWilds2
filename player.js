class player{
    constructor(x,y,s){
        this.x = x;
        this.y = y;
        this.s = s;
        //this.a = atan2(playerY-this.x, playerX-this.x);
        this.w = 0;
        this.reload = 0;
        this.e = false;
    }

    display(){
        rectMode(CENTER);
        this.a = atan2(mouseY-this.y, mouseX-this.x);
        {
            push();
            translate(this.x,this.y);
            if(mouseX < this.x){
                scale(1,-1);
                rotate(-this.a);
            }else{
                rotate(this.a);
            }
           
            scale(0.5);
            image(ArmImg2,100,50);
            pop();
            }
         {
        push();
        translate(this.x-20,this.y+70);
        if(mouseX < this.x){
            scale(-1,1);
        }
        scale(0.6);
        image(armour2,0,0);
        pop();
        }
        { 
        push();
        translate(this.x-this.mmmm,this.y-75);
        scale(0.7,0.7);
        //translate(this.x,this.y);
        if(mouseX < this.x){
            scale(1,-1);
            rotate(-this.a);
            this.mmmm = 25;
        }else{
            rotate(this.a);
            this.mmmm = 0;
        }
        image(head2,0,0);
        pop();
        }
        {
        push();
        translate(this.x,this.y);
        if(mouseX < this.x){
            scale(1,-1);
            rotate(-this.a);
        }else{
            rotate(this.a);
        }
       
        image(BlasterImg,100,0);
        scale(0.5);
        image(ArmImg2,100,30);
        pop();
        }
        //console.log(playerX+", "+this.x)
    }
    fire(){
        if(this.reload > 50 && MC){
            this.blast = createSprite(this.x,this.y,10,10); 
            this.blast.addImage(BlastImg);
            this.blast.lifetime = 100;
            this.blast.setSpeedAndDirection(8,this.a);
            this.blast.rotation = this.a;
           this.reload = 0;
           this.e = true;
        }
        this.reload++;
        for(var i = 0; i < enemys.length; i++){
            if(this.e === true && dist(this.blast.x,this.blast.y,enemys[i].x,enemys[i].y)<50){
                console.log('ooo');
                enemys.splice(i,1);
                this.blast.destroy();
                this.e = false;
            }
        }
    }
    walk(){
   
        push();
        translate(this.x,this.y+160);
        scale(0.3);
        if(mouseX < this.x){
            scale(-1,1);
            translate(60,0);
        }
        rotate(this.w);
        image(leg,0,0);
        pop();
        push();
        translate(this.x,this.y+160);
        scale(0.3);
        if(mouseX < this.x){
            scale(-1,1);
            translate(60,0);
        }
        rotate(-this.w);
        image(leg,0,0);
        pop();
        this.w = sin(frameCount *2)*10;
    }
}