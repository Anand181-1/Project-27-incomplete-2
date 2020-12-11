class Bob {
    constructor(x,y,r) {
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.3
        }
        this.bob = Bodies.circle(x, y, r/2, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.bob);
    }
    display() {
        var pos = this.bob.position;
        
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        ellipse(0, 0, this.r,this.r);
        noFill();
        pop()
    }
}