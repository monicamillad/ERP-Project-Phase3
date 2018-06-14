import React , { Component } from 'react' ;
import Middle61 from "./middle61-ch";
import Middle62 from "./middle62-ch";
import "./style.css" ;

class Middle6 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <Middle61 />
        <Middle62 />
      </div>
    );
  }
}

export default Middle6;
