import React, {Component} from 'react';
import {plates} from "../plates.json";


class Menu extends Component{
    constructor(){
        super();
        this.state={
            plates:plates,
            toShow:[],
            }
        this.showMe= this.showMe.bind(this);
        }
    
    getdata(e){
        let plate_id = e.target.id;
        let selectedPlate = plates.find((plate)=>{
            return plate.id == plate_id;
        });
        console.log(selectedPlate);

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
    render() {
        return (
            <div ClassName="Menu">
                <button id="desayuno" type="button" className="btn btn-success active" onClick={this.showMe}>Desayuno</button>
                <button id= "restodia" type="button" className="btn btn-success active" onClick={this.showMe}>Resto del Día</button>
                            <br/>{this.state.toShow}
                    </div>
            
        )
    }
}

export default Menu;