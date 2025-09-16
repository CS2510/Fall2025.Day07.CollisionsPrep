class TriangleGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new TriangleController())
        this.addComponent(new Polygon(), {fillStyle: "blue"})
        this.transform.scale = new Vector2(15, 15)
    }
}