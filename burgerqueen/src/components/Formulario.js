import React, {Component} from 'react';
import db from '../Firebase';



class Formulario extends Component{
    searchRef=React.createRef();
    constructor(props){
        super(props);
        this.state={
            order:[{
            name:'',
            item:'',
            price:'',
            total:'',
            }]
        };

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
            name:this.state.name}+{item:this.product.name}+{price:this.product.cost}+{total:this.product.total}).then(()=>{
            console.log("enviado");
            })
        .catch (()=>{
            console.log("error");
        })
            
    }

    renderProduct = (product = {}) => {
        return (
            <li>
            <div className="alert alert-dismissible alert-secondary">
                <button
                    id={`button-${product.id}`}
                    key={`button-${product.id}`}
                    onClick={this.props.onProductDeleted}
                    type="button"
                    class="close">
                    &times;
                </button>
                <strong>{product.name}</strong><br />
                <strong>{product.cost}</strong>
            </div>
        </li>
        );
    }

    renderTotal = () => {
        let counter = 0;
        this.props.productList.map(product => counter += product.cost);
        return <strong>Total es: {counter}</strong>;
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="jumbotron">
                        <input type="name" className="form-control" id="name" placeholder="Ingresa tu nombre"/>
                        <div className="list-group">
                            <ul>
                                {this.props.productList.map(product => this.renderProduct(product))}
                            </ul>
                        </div>
                        <div className="total">
                            {this.props.productList.length > 0 ? this.renderTotal() : null}
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            );
        }
}

export default Formulario;