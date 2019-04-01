import React, {Component} from 'react';
import Formulario, from './Formulario';




class Container extends Component{
    render() {
        return (
            <div className="jumbotron">
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge badge-primary badge-pill"></span>
                </li>
                </ul>
             </div>
            );
        }
}

export default Container;