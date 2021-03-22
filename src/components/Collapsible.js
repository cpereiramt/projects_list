import React, { Component } from "react";
import M from "materialize-css";

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
    const { headingText, subHeading } = styles;

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
      <div className="container">
        <div className="row">
          <h3 style={headingText}>1. Collapsible with Preselected Section</h3>
          <ul
            ref={Collapsible => {
              this.Collapsible1 = Collapsible;
            }}
            className="collapsible"
          >
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">place</i>Second
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>Third
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  headingText: {
    fontSize: 30,
    fontWeight: 300
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 300
  }
};

export default Collapsible;