import React, {Component} from 'react';
import db from '../Firebase';

import {Menu} from './Menu';



class Formulario extends Component{
    searchRef=React.createRef();
    constructor(){
        super();
        this.state={
            name:'',
            item:'',
            price:'',
            total:'',
            }
        this.sendit= this.sendit.bind(this);
        this.send= this.send.bind(this);
        }

    sendit(){
        this.setState({
            name: this.searchRef.current.value,
            item: this.searchRef.current.value,
            price: this.searchRef.current.value,
            total: this.searchRef.current.value,
        })
    }

    send(){
        this.setState({
            name:'',
            item:'',
            price:'',
            total:'',
        })
        db.collection("order").add({
            name:this.state.name}+{item:this.state.item}+{price:this.state.price}+{total:this.state.total}).then(()=>{
            console.log("enviado");
            })
        .catch (()=>{
            console.log("error");
        })
            
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="jumbotron">
                    <input type="name" class="form-control" id="name" placeholder="Ingresa tu nombre"/>
                        <div className="list-group">
                            <ul>
                            <li><div class="alert alert-dismissible alert-secondary">
                            <button type="button" class="close">&times;</button>
                            <strong>{this.getdata}</strong>
                            </div></li>
                            <li><div class="alert alert-dismissible alert-secondary">
                            <button type="button" class="close">&times;</button>
                            <strong>PASTA CON CARNE</strong>
                            </div></li>
                            </ul>
                            </div>
            
                    </div>
                </div>
            );
        }
}

export default Formulario;