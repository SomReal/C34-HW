class Tree{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var options = {
            restitution:0.8,
            fricton:1.0,
            density:1.0,
            isStatic:true
        }
        this.image = loadImage("tree_new.png")
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        image (this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}   

    