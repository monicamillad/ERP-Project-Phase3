import React , { Component } from 'react' ;
import Middle41 from "./middle41-acc";
import Middle42 from "./middle42-acc";
import "./style.css" ;

class Middle4 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <Middle41 />
        <Middle42 />
      </div>
    );
  }
}

export default Middle4;
