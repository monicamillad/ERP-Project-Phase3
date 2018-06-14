import React , { Component } from 'react' ;
import "./style.css" ;

import uparrow from './images/up arrow.png' ;

class Bar extends Component {
  render() {
    return (
      <div
        style={{
          height: "100px",
          background: "#ffffff"
        }}
      >
        <div
          className="container"
          style={{
            padding: "0%"
          }}
        >
          <div className="row align-items-end txt2">
            <div
              style={{
                width: "14%"
              }}
            >
              Legislations
            </div>
            <div
              style={{
                width: "30%"
              }}
            >
              Public Interest Disclosures
            </div>
            <div
              style={{
                width: "14%"
              }}
            >
              Organisation
              <br />
              <img
                src={uparrow}
                style={{
                  position: "absolute",
                  marginTop: "-73px",
                  marginLeft: "-2%"
                }}
              />
            </div>
            <div
              style={{
                width: "14%"
              }}
            >
              Challenges
            </div>
            <div
              style={{
                width: "14%"
              }}
            >
              Accountability
            </div>
            <div
              className="red-txt"
              style={{
                width: "14%"
              }}
            >
              FAQS
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            padding: "0%"
          }}
        >
          <div className="nav justify-content-md-center">
            <div
              className="row align-items-center "
              style={{
                width: "100%",
                margin: "0%"
              }}
            >
              <div className="col-4 txt">WHO WE ARE</div>
              <div className="col-4 txt red-txt">WHAT WE DO</div>
              <div className="col-4 txt">NEWS</div>
            </div>
            {}
            {}
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
