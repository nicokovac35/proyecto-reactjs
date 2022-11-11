import React from "react";
  
// ver lo de la linea 3 si es conts o es classs
//props

const  CardItem = (props) => {
    return(
        <React.Fragment>
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
            <div className="card p-0 overflow-hidden h-100 shadow ">
                <img src={props.img} class="card-img-top" alt="img001"/>
                     <div class="card-body">
                     <h5 class="card-title">{ props.titulo }</h5>
                     <h5 class="card-title">{ props.precio }</h5>
                     <button class="btn btn-primary">Agregar ¨Producto</button>
                    </div>
            </div>
            </div>
        </React.Fragment>
    );
    };

export default CardItem;