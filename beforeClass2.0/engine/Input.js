class Input {
    static keysDown = []

    static mouseDown = []

    static mousePosition

    static keydown(event) {
        if (!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)

    }
    static keyup(event) {
        Input.keysDown = Input.keysDown.filter(k => k != event.code)
    }

    static mousemove(event){
        Input.mousePosition = new Vector2(event.clientX, event.clientY)

    }
    static mousedown(event){
        if(!Input.mouseDown.includes(event.button))
            Input.mouseDown.push(event.button)

    }
    static mouseup(event){
        Input.mouseDown = Input.mouseDown.filter(md => md != event.button)

    }
}