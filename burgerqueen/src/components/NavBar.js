import React, {Component} from 'react';

class NavBar extends Component {
  render(){
      return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">BURGUER-QUEEN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

              <div class="collapse navbar-collapse" id="navbarColor01">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Menú <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Cocina</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Garzon</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pedidos</a>
                    </li>
                  </ul>
                </div>
          </nav>
        );
    }
}


export default NavBar;