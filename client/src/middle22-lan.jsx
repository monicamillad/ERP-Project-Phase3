import React , { Component } from 'react' ;
import Middle221 from "./middle221-lan";
import Middle222 from "./middle222-lan";
import "./style.css" ;

class Middle22 extends React.Component {
  render() {
    return (
      <div
        className="col "
        style={{
          minWidth: "49%",
          padding: "0%",
          marginLeft: "1%"
        }}
      >
        <Middle221 />
        <Middle222 />
      </div>
    );
  }
}

export default Middle22;
