import React , { Component } from 'react' ;
import Middle11 from "./middle11-lan";
import Middle12 from "./middle12-lan";
import "./style.css" ;

class Middle1 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <Middle11 />
        <Middle12 />
      </div>
    );
  }
}

export default Middle1;
