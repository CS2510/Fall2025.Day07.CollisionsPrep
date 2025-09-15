class LaserController extends Component{
  start(){

  }
  update(){
    this.transform.position.y -= 10

    if(this.transform.position.y < -10){
      this.gameObject.destroy()
    }

  }
}