class Engine {
  static canvas = document.querySelector("#canv")
  static ctx = Engine.canvas.getContext("2d")

  //Engine-specific
  static start() {
    //Engine-specific
    addEventListener("keydown", Input.keydown)
    addEventListener("keyup", Input.keyup)
    //Game-specific
    Engine.currentScene.start()
    Engine.gameLoop()
  }

  //Engine-specific code
  static gameLoop() {
    Engine.update()
    Engine.draw()
    requestAnimationFrame(Engine.gameLoop)
  }



  //Engine-specific
  static update() {
    Engine.currentScene.update()
  }

  //Engine-specific
  static draw() {

    Engine.canvas.width = window.innerWidth
    Engine.canvas.height = window.innerHeight

    //Game-specific
    Engine.ctx.fillStyle = "black"
    Engine.ctx.beginPath()
    Engine.ctx.rect(0, 0, Engine.canvas.width, Engine.canvas.height)
    Engine.ctx.fill()

    Engine.currentScene.draw(Engine.ctx)

  }
}