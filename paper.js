class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      this.image = loadImage ("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      translate(pos.x,pos.y); 
      fill(255);
      image(this.image, 0, 0, 40, 40);
      pop();
    }
  }