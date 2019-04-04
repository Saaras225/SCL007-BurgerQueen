
class Menu extends Component{
  constructor(){
      super();
      this.state={
          plates:plates,
          toShow:[],
          }
      this.showMe= this.showMe.bind(this);
      }

  showMe(e){   
      this.setState({
      ...this.state,
      toShow: this.state.plates.filter((plates,i)=>{return plates.type==e.currentTarget.id}).map((plates, i)=>{
          return(
          <button type="button" id={plates.id} className="btn btn-success active" onClick={this.getdata}>{plates.name}<br/>{plates.cost}</button>
          )
      })
      })
  }

  getdata(e){
      let plate_id = e.target.id;
      let selectedPlate = plates.find((plate)=>{return plate.id == plate_id;});
      console.log(selectedPlate);
  }


  render() {
      return (
      <div className="burguerqueen">
          <div ClassName="Menu">
              <button id="desayuno" type="button" className="btn btn-success active" onClick={this.showMe}>Desayuno</button>
              <button id= "restodia" type="button" className="btn btn-success active" onClick={this.showMe}>Resto del Día</button>
                  <br/>{this.state.toShow}
              </div>
          <div className="Formulario">
          <div className="col-md-12">
          <div className="row">
              <div className="jumbotron">
                  <input type="name" className="form-control" id="name" placeholder="Ingresa tu nombre"/>
                      <div className="list-group">
                          <ul>
                          <li><div className="alert alert-dismissible alert-secondary">
                          <button type="button" class="close"><strong>{this.getdata}</strong></button>
                          </div></li>
                          </ul>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
      )
  }
}

export default Menu;