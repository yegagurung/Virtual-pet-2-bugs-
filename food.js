class Food{
    constructor() {
        this.foodstock=0
        this.lastfed
        this.image=loadImage("Milk.png")

    }

 Updatefoodstock(foodstock){
this.foodstock=foodstock
 }
Getfedtime(lastfed){

    this.lastfed=lastfed
}
Deductfood(){
    if(this.foodstock>0){
        this.foodstock=this.foodstock-1
    }
}
Getfoodstock(){
 return this.foodstock
}
display(){
    var x=80,y=100
imageMode(CENTER)
if(this.foodstock!=0){
    for(var i=0;i<this.foodstock;i++){
        if(i%10==0){
            x=80;y=y+50
        }
        image(this.image,x,y,50,50);
        x=x+30
         
    }
}

}
}