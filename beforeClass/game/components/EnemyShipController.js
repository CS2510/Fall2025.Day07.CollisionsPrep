class EnemyShipController extends Component {
    start() {
        // this.transform.position = new Vector2(0, 0)
        this.velocity = new Vector2(1, 1)

    }
    update() {
        this.transform.position.plusEquals(this.velocity)

        if (this.transform.position.x > Engine.canvas.width || this.transform.position.x < 0) {
            this.velocity.x *= -1
        }
        if (this.transform.position.y > Engine.canvas.height || this.transform.position.y < 0) {
            this.velocity.y *= -1
        }
    }
    onCollision(otherGameObject){
        if(otherGameObject.constructor.name == "LaserGameObject"){
            // console.log("Hit by laser")
            this.gameObject.destroy()
        }
    }
}

