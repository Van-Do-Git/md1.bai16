class Rat{
    constructor(name, weight, speed) {
        this.name=name;
        this.weight=weight;
        this.speed=speed;
        this.status=true;
    }
    Sound(text){
        alert(this.name + ""+text);
    }
    Status(){
        console.log(this.status);
    }
}