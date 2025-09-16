class LaserGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Polygon(), {fillStyle: "red"})
        this.addComponent(new LaserController())
    }
}