import React, { Component } from 'react'; 
import ReactDOM from "react-dom";
import './App.css';

import {plates} from "./plates.json";

class App extends Component {
  constructor(){
    super();
    this.state={
      plates:plates,
      toShow:[],
    }
    this.showMe= this.showMe.bind(this);
  }

  showMe(e){
    console.log(e.currentTarget);   
    this.setState({
      ...this.state,
      toShow: this.state.plates.filter((plates,i)=>{return plates.type==e.currentTarget.id}).map((plates, i)=>{
        return(
          <button type="button" className="btn btn-success active">{plates.name}<br/>{plates.cost}</button>
        )
      })
    })
  }

  render() {
    return (
      <div clasName="App">
            <nav className="navbar navbar-dark bg-dark">
              <a href=" " className="text-white">BURGERQUEEN</a>
            </nav>
              <div className="row">
                        <div className="col-md-6">
                          <button id="desayuno" type="button" className="btn btn-success active" onClick={this.showMe}>Desayuno</button>
                          <button id= "restodia" type="button" className="btn btn-success active" onClick={this.showMe}>Resto del Día</button>
                          <br/>{this.state.toShow}
                          </div>
                          <div className="col-md-6">
                            <h2>TU PEDIDO</h2>            
                              <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>Item</th>
                                      <th>Costo</th>
                                      </tr>
                                    </thead>
                                      <tbody>
                                        <tr>
                                          <td>John</td>
                                          <td>Doe</td>
                                          <td>john@example.com</td>
                                          </tr>
                                        </tbody>
                                </table>
                          </div>
                </div>      
        </div>
    );
  }
}



export default App;
