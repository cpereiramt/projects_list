import React from 'react';
import Collapsible from "./Collapsible";
import "./Card.css";

function Card() {
    return (
        <div className="container">
        <div className="card-panel hoverable col s10" >
        <div className="row">
        <h5 className="col s12" >Vigilante 8 2 Offense Page Tribute Release notes</h5>
        </div>        
        <Collapsible />        
        </div>
        </div>
    )
}

export default Card
