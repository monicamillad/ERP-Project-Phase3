import React , { Component } from 'react' ;
import Middle31 from "./middle31-lan";
import Middle32 from "./middle32-lan";
import Middle33 from "./middle33-lan";
import "./style.css" ;

class Middle3 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "10%"
        }}
      >
        <Middle31 />
        <Middle32 />
        <Middle33 />
      </div>
    );
  }
}

export default Middle3;
