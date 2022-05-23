class Mango{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var options = {
            restitution:1,
            friction:1,
            density:1,
            isStatic:true
        }
        this.image = loadImage("mango_new.png")
        this.body = Bodies.rectangle(x,y,w,h,options)
        imageMode(CENTER)
        World.add(world,this.body)
    }
    display(){
        image (this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}