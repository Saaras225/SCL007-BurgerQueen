import React, {Component} from 'react';


class Desayuno extends Component{

    function desplegate(){
        <button id="1">Café americano s/.500</button>
        <button id="2">Café con Leche s/.700</button>
        <button id="3">Sandwich de Jamón y Queso s/.1000</button>
        <button id="4">Jugo Natural s/.700</button>
    
    }


    render(){
        return(
            <div class="container">
                <div className="Desayuno">
                    <button id="desayuno" onClick="">Desayuno</button>
                   
                </div>
           </div>
        );
    }
    
}

export default Desayuno;