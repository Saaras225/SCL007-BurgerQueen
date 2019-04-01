import React, { Component } from 'react'; 
import ReactDOM from "react-dom";
import './App.css';

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Formulario from "./components/Formulario";

class App extends Component {
  render(){
    return(
          <div className="Navegacion">
          <NavBar />
          <div className="row">
          <div className="col-md-6">
          <Menu /> 
          </div>
          <div className="col-md-3">
          <Formulario />
          </div>        
        </div>
        </div>
      );
  }
}


export default App;
