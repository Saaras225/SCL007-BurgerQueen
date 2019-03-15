import React, {Component} from 'react';
import db from '../Firebase';


class Formulario extends Component{
    searchRef=React.createRef();
    constructor(){
        super();
        this.state={
            name:'',

            }
        this.sendit= this.sendit.bind(this);
        this.send= this.send.bind(this);
        }

    sendit(){
        this.setState({
            name: this.searchRef.current.value
        })

    }

    send(){
        this.setState({
            name:'',
        })
        db.collection("order").add({
            cliente:this.state.name}).then(()=>{
            console.log("enviado");
            })
        .catch (()=>{
            console.log("error");
        })
            
    }

    render() {
        return (
                <div className="Formulario">
                <form onSubmit={this.send}>
                    <label for="Nombre">Nombre</label>
                        <input ref={this.searchRef} type="text" className="form-control" placeholder="Nombre" onChange={this.sendit}></input>
                        <input type="submit" className="btn btn-primary" value="submit" />
                    </form>
                    </div>
            );
        }
}

export default Formulario;