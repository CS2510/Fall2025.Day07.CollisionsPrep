/**
 * Base class for all objects in a scene.
 * 
 * See: https://docs.unity3d.com/ScriptReference/GameObject.html
 */

class GameObject {
    components = []
    markForDelete = false
    constructor(){
        this.addComponent(new Transform())
    }
    start() {
        for (const component of this.components) {
            component.start()
        }
    }
    update() {
        for (const component of this.components) {
            component.update()
        }
    }
    draw(ctx) {
        for (const component of this.components) {
            component.draw(ctx)
        }
    }
    addComponent(component, values){
        this.components.push(component)
        component.gameObject = this
        Object.assign(component, values)
    }
    destroy(){
        this.markForDelete = true
    }
    getComponent(type){
        return this.components.find(c=>c instanceof type)
    }
    sendMessage(string, args){
        for(const component of this.components){
            if(component[string]){
                component[string](...args)
            }
        }
    }
    get transform(){
        return this.components[0]
    }
}