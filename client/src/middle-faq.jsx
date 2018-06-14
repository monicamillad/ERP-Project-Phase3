import React , { Component } from 'react' ;
import Middle1 from "./middle1-faq";
import Middle2 from "./middle2-faq";
import Middle3 from "./middle3-faq";
import Middle4 from "./middle4-faq";
import Middle5 from "./middle5-faq";
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
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Middle;
