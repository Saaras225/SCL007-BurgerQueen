import React, { Component } from 'react'; 
import ReactDOM from "react-dom";
import './App.css';
import {plates} from "./plates.json";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Formulario from './components/Formulario';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        plates,
        toShow:[],
        categories:[
          {
            name: 'desayuno',
            label: 'Desayuno',
          },
          {
            name: 'restodia',
            label: 'Resto del dia',
          },
        ],
        productsInCart:[],
        }
    this.onCategorySelected= this.onCategorySelected.bind(this);
    this.onProductSelected= this.onProductSelected.bind(this);
    this.onProductDeleted= this.onProductDeleted.bind(this);
    }
    onCategorySelected = (e) => {
      this.setState({
        toShow: this.state.plates.filter((st_plate,i)=>{return st_plate.type==e.currentTarget.id}).map((filteredPlate, i)=>{
            return(
            <button type="button" id={filteredPlate.id} className="btn btn-success active" onClick={this.onProductSelected}>{filteredPlate.name}<br/>{filteredPlate.cost}</button>
            )
        })
        })
    }

    onProductSelected = (e) => {
      let plate_id = e.target.id;
      let selectedPlate = this.state.plates.find((chosen)=>{return chosen.id == plate_id;});
      this.setState({
        productsInCart: [...this.state.productsInCart, selectedPlate],
      });
    }

    onProductDeleted = (e) => {
      let plate_id = e.target.id;
      let index = this.state.productsInCart.findIndex((chosen)=>{return `button-${chosen.id}` === plate_id;});
      this.setState({
        productsInCart: [...this.state.productsInCart.slice(0,index), ...this.state.productsInCart.slice(index + 1, this.state.productsInCart.length)]
      });
    }

//got to do a lift of the stage and callback to notify state changes from partent to children (Menu, formulario)

  render(){
    const {
      categories,
      toShow,
      productsInCart,
    } = this.state;
    return(
          <div className="Navegacion">
          <NavBar />
          <div className="row">
          <Menu 
            categoryList={categories}
            onCategorySelected={this.onCategorySelected}
            productList={toShow}
          />
          <Formulario
            productList={productsInCart}
            onProductDeleted={this.onProductDeleted}
          />
          </div>      
        </div>
      );
  }
}


export default App;
