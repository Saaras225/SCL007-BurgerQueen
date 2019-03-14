import React, { Component } from 'react'; 
import ReactDOM from "react-dom";
import './App.css';
import Nombre from './container/Nombre';
import {plates} from "./plates.json"

//import Desayuno from './components/Desayuno';
//import RestDay from './components/RestDay';



class App extends Component {
  constructor(){
    super();
    this.state={
      plates:plates
    }
  }
  


  render() {
    const plateDesayuno= this.state.plates.map((plates, i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{plates.name}</h3>
              <span className= "badge bagde-pill badge-danger ml-2">
              {plates.desayuno}
              </span>
            </div>
            <div className="card-body">
              <p>{plates.cost}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div clasName="App">
          <nav className="navbar navbar-dark bg-dark">
          <a href=" " className="text-white">BURGERQUEEN</a>
          </nav>
        
        
        <div className="container">
          <div className="row mt-4">
            {plateDesayuno}
          </div>
        </div>

          <button type="button" className="btn btn-success active">Desayuno</button>
          <button type="button" className="btn btn-success active">Resto del Día</button>
          
            <container className="Nombre">
            </container>
          
        </div>
    );
  }
}



export default App;