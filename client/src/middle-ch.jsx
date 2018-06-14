import React , { Component } from 'react' ;
import Middle1 from "./middle1-ch";
import Middle2 from "./middle2-ch";
import Middle3 from "./middle3-ch";
import Middle4 from "./middle4-ch";
import Middle5 from "./middle5-ch";
import Middle6 from "./middle6-ch";
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
          <Middle4 />
          <Middle5 />
          <Middle6 />
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Middle;
