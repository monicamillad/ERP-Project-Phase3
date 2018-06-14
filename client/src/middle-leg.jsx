import React , { Component } from 'react' ;
import Middle1 from "./middle1-leg";
import Middle2 from "./middle2-leg";
import "./style.css" ;

class Middle extends React.Component {
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
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Middle;
