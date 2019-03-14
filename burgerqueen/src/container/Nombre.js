import React, {Component} from 'react'

class Nombre extends Component{

    busquedaRef= React.createRef();  
    obtenerDatos=(e)=>{
        e.preventDefault();

        //tomamos el valor del input (lo que ingresa el usuario)
        const termino=this.busquedaRef.current.value;
    }


    render(){
        return ( 
            <form onSubmit= {this.obtenerDatos}>
                <div className="nameInsert">
                    <h1>Bienvenido</h1>
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Enviar" />
                    </div>
                </div>
            </form>
        );
    }

}


export default Nombre;