class SquareGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new SquareController())
        this.addComponent(new Polygon(), {fillStyle:"red"})
        this.transform.scale = new Vector2(20, 20)
    }
}