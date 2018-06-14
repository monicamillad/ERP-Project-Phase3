import React , { Component } from 'react' ;
import Middle21 from "./middle21-lan";
import Middle22 from "./middle22-lan";
import "./style.css" ;

class Middle2 extends React.Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <Middle21 />
        <Middle22 />
      </div>
    );
  }
}

export default Middle2;
