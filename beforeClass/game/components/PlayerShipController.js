class PlayerShipController extends Component{
    start() {
        // this.vertex = new Vector2(100, 100)
        // this.transform.position = new Vector2(100, 100)

        // this.velocity = new Vector2(1, 1)

        this.nextLaserTick = 0
        this.ticks = 0
        this.nextSideRight = true
        this.nextLaserSpeed = 20
        this.speed = 2

    }
    update() {
        this.ticks++

        // console.log(Input.keysDown)

        let proposedChange = Vector2.zero

        //Left
        if(Input.keysDown.includes("ArrowLeft")){
            proposedChange.plusEquals(Vector2.left)
        }
        if(Input.keysDown.includes("ArrowRight")){
            proposedChange.plusEquals(Vector2.right)
        }
        if(Input.keysDown.includes("ArrowUp")){
            proposedChange.plusEquals(Vector2.up)
        }
        if(Input.keysDown.includes("ArrowDown")){
            proposedChange.plusEquals(Vector2.down)
        }

        this.transform.position.plusEquals(proposedChange.times(this.speed))

        if(this.ticks >= this.nextLaserTick){
            let dx
            if(this.nextSideRight){
                dx = 5
                this.nextSideRight = false
            }
            else{
                dx = -5
                this.nextSideRight = true
            }
            Engine.currentScene.instantiate(new LaserGameObject, new Vector2(
                this.transform.position.x + dx, 
                this.transform.position.y+5)
            )
            this.nextLaserTick += this.nextLaserSpeed
        }
    }
}