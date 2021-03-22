import React from 'react';
import Collapsible from "./Collapsible";

function Card() {
    return (
        <div className="card-panel hoverable" >
        <div className="row">
        <h4 className="col s12">Vigilante 8 2 Offense Page Tribute Release notes 2</h4>
        <Collapsible />

        {/* <ul class="collapsible">
        <li class="col s12">
        <div class="collapsible-header"> <i class="material-icons">add_box</i> Version 1.0 
          </div>
          <div class="collapsible-body"> 
              <p class="flow-text">This is the original web page version maked for web design course at Trybe as finish project
               of block 3
              </p>
          <h6>Technology used </h6>
          <p>HTML5, CSS3, JAVASCRIPT</p>
          <a class="flow-text" href="https://claytonpereira.com/Proj_bloco3_vigilante_page/version-1.0/homePage.html">Acess Site <i class="small material-icons">open_in_new</i> </a>
          </div> 
        </li>
        </ul> */}
        
        </div>
        </div>
    )
}

export default Card
