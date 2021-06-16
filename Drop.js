        class Drop{
        constructor(x,y){

        this.rain = Bodies.circle(x,y,5,) 

        World.add(World,this.rain)

        
    }
    update(){
        if(this.rain.position.y > height){
        
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

             
        }   
    }
}

