class LaserGameObject extends GameObject{
  constructor(){
        super()
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle:"lightgreen", points:[new Vector2(-1, -1), new Vector2(1, -1), new Vector2(1, 1), new Vector2(-1, 1)]})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(2, 5)
    }
}
