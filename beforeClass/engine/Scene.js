/**
 * Base class for all scenes
 * 
 */

class Scene {
    gameObjects = []
    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
        }
    }
    update() {

        //Look for collidable objects
        const collidable = Engine.currentScene.gameObjects.filter(go=>go.getComponent(Collider))
        for(let i = 0; i < collidable.length; i++){
            for(let j = i+1; j < collidable.length; j++){
                if(Collisions.inCollision(collidable[i], collidable[j])){
                    collidable[i].sendMessage("onCollision", [collidable[j]])
                    collidable[j].sendMessage("onCollision", [collidable[i]])
                }
            }
        }




        for (const gameObject of this.gameObjects) {
            gameObject.update()
        }
        //Remove game objects that have been marked for delete
        this.gameObjects = this.gameObjects.filter(go=>!go.markForDelete)
    }
    draw(ctx) {
        for (const gameObject of this.gameObjects) {
            gameObject.draw(ctx)
        }
    }
    instantiate(gameObject, position){
        this.gameObjects.push(gameObject)
        if(position)
            gameObject.transform.position = position
    }

}