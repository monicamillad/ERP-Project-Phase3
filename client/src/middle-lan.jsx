import React , { Component } from 'react' ;
import Middle1 from "./middle1-lan";
import Middle2 from "./middle2-lan";
import Middle3 from "./middle3-lan";
import "./style.css" ;

class Middle extends Component {
  render() {
    return (
      <div
        style={{
          background: "#ececed",
          width: "100%",
          maxWidth: "1920px",
          margin: "auto"
        }}
      >
        <div className="container">
          <div className="row" />
          <Middle1 />
          <Middle2 />
          <Middle3 />
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Middle;
