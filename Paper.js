class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,this.r-20,options);
        World.add(world,this.body)
    }
    display(){
        var pause=this.body.position
        push();
        translate(pause.x,pause.y)
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}