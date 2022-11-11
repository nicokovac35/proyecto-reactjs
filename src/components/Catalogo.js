import React from "react";
import CardItem from "./components/CardItem.js";
import Productos from "./Productos.js";

const Catalogo = () => {
    
    return (
        <div>
        {Productos.infoProductos.map((id, index)=>{
            return (
                <CardItem img={id.img} title={id.nombre} precio={id.precio} key={index}/> 
            )
        })
        };
        </div>

    )
};
export default Catalogo;