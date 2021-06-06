class MainClass1{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(a,b,c){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(188,67,67);
        rect(0,0,this.width, this.height);
        pop();
    }
}