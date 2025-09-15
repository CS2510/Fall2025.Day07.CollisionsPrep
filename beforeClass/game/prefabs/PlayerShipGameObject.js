class PlayerShipGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerShipController())
        this.addComponent(new Polygon(), {fillStyle:"red", points: [new Vector2(0, -1), new Vector2(-1, 1), new Vector2(1, 1)]})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(10, 10)
    }
}