class Stone {
    constructor(x, y,radius) {
      var options = {
        'restitution': 0.8,
        'friction': 2.0,
        'density': 12
      };
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('orange')
      fill('red')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius);
      pop();
    };
  };
  