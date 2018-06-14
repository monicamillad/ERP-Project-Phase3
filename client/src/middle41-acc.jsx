import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;

class Middle41 extends Component {
  render() {
    return (
      <div
        className="col"
        style={{
          background: "#ffffff",
          padding: "4%",
          marginRight: "1%"
        }}
      >
        <div className="title">Excellence in Service</div>
        <p
          className="content"
          style={{
            width: "100%",
            marginTop: "2%"
          }}
        >
          <img
            src={dash}
            style={{
              marginRight: "5%"
            }}
          />
          The challenge represented by the fight against terrorism, considered
          to be a real strategic threat,
        </p>
      </div>
    );
  }
}

export default Middle41;
