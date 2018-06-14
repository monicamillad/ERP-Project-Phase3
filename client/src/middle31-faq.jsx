import React , { Component } from 'react' ;
import "./style.css" ;

import redarrow from './images/red arrow.png'

class Middle31 extends Component {
  render() {
    return (
      <div
        className="col"
        style={{
          background: "#ffffff",
          padding: "4%",
          marginRight: "1%",
          textAlign: "left"
        }}
      >
        <div className="title">
          We strive for excellence in all that we do ?
        </div>
        <img
          src={redarrow}
          style={{
            position: "absolute",
            marginTop: "5%",
            marginLeft: "15%"
          }}
        />
      </div>
    );
  }
}

export default Middle31;
