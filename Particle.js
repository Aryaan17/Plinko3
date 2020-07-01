class Particle {
    constructor(x,y,diameter) {
      var options={
        isStatic: false,
        restitution: 0.4
      }
      this.body = Bodies.circle(x, y, diameter, options);
      this.color = color(random(0, 255), random(0,255), random(0, 255));
      this.diameter = diameter;
      World.add(world, this.body);
      }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, this.diameter + 10);
    }
  }