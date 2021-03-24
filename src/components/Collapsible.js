import React, { Component } from "react";
import M from "materialize-css";
import "./Collapsible.css";

class Collapsible extends Component {
  componentDidMount() {
    const options1 = {
      onOpenStart: () => {
        console.log("onOpenStart");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd");
      },
      onCloseStart: () => {
        console.log("onCloseStart");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd");
      },
      inDuration: 300,
      outDuration: 200
    };
    M.Collapsible.init(this.Collapsible1, options1);
  }
  render() {

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
    return (
        <>         
          <ul
            ref={Collapsible => {
              this.Collapsible1 = Collapsible;
            }}
            className="collapsible"
          >
            <li>
              <div className="collapsible-header">
              <i className="material-icons">add_box</i> Version 1.0 
  
              </div>
              <div className="collapsible-body">
              <p className="flow-text">This is the original web page version maked for web design course at Trybe as finish project
               of block 3
              </p>
          <h6>Technology used </h6>
          <p>HTML5, CSS3, JAVASCRIPT</p>
          <a className="flow-text" href="https://claytonpereira.com/Proj_bloco3_vigilante_page/version-1.0/homePage.html">Acess Site <i className="small material-icons">open_in_new</i> </a>
              </div>
            </li>
          </ul>
        </>
    );
  }
}



export default Collapsible;