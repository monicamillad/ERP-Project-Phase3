import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;

class Middle5 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          background: "#ffffff",
          padding: "4%",
          paddingLeft: "7%",
          paddingRight: "7%",
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <div
          className="title"
          style={{
            marginLeft: "-1%"
          }}
        >
          Excellence in Service
        </div>
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
              marginRight: "3%"
            }}
          />
          The challenge represented by the fight against terrorism, considered
          to be a real strategic threat, leads the DGSE to constantly adapt its
          capabilities to keep up with the ever-changing diversity of terrorist
          operating methods, the extension of Jihad networks, a complex and
          evolving phenomenon and the extent and multiplication of terrorist
          actions.
        </p>
        <p
          className="content"
          style={{
            marginTop: "2%"
          }}
        >
          The challenge represented by the fight against terrorism, considered
          to be a real strategic threat, leads the DGSE to constantly adapt its
          capabilities to keep up with the ever-changing diversity of terrorist
          operating methods, the extension of Jihad networks, a complex and
          evolving phenomenon and the extent and multiplication of terrorist
          actions.
        </p>
      </div>
    );
  }
}

export default Middle5;
