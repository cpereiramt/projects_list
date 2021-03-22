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