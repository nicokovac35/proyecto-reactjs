import React, {Component} from 'react';
class  NavBar extends Component {
    render (){
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                    <div class="container-fluid">
                         <a class="navbar-brand" href="#">ZicoVerse</a>


                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                            
                            <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Inicio</a>
                            </li>
                            
                            <li class="nav-item">
                            <a class="nav-link" href="#">Tienda</a>
                            </li>
                            
                            <li class="nav-item">
                            <a class="nav-link" href="#">Contactos</a>
                            </li>
      
                            </ul>


                </div>
                <div classname="shop-box">
                    <span></span>
                </div>
             </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;