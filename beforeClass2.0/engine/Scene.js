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
        for (const gameObject of this.gameObjects) {
            gameObject.update()
        }
        this.gameObjects = this.gameObjects.filter(go=>!go.markForDestroy)
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
    find(name){
        return this.gameObjects.find(go=>go.name == name)
    }
}