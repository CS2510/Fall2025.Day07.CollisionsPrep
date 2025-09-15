class EnemyShipGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new EnemyShipController())
        this.addComponent(new Polygon(), {fillStyle: "blue", points:[new Vector2(0, 1), new Vector2(1, 0), new Vector2(0, -1), new Vector2(-1, 0)]})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(15, 15)
    }
}