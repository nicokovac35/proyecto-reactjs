import React, { Component} from "react";
import NavBar from "./components/NavBar.js";
import MainContent from "./MainContent.js";
import CardItem from "./components/CardItem.js";
import Catalogo from "./components/Catalogo.js";


export default class App extends Component {
    render(){
        return (
            <React.Fragment>
            <NavBar/>
            <MainContent />
            <CardItem/>
            <Catalogo/>
            </React.Fragment>

        );
    }
}


