import React , { Component } from 'react' ;
import "./style.css" ;

import sphere from './images/sphere.png' ;

class Middle32 extends Component {
  render() {
    return (
      <div
        className="col"
        style={{
          padding: "3%",
          marginRight: "1%"
        }}
      >
        <div className="row">
          <div className="col-3">
            <img
              src={sphere}
              style={{
                marginTop: "35%"
              }}
            />
          </div>
          <div
            className="col-9 title"
            style={{
              paddingRight: "0%"
            }}
          >
            CHALLENGE 2
          </div>
        </div>
        <br />
        <p
          className="content"
          style={{
            width: "100%"
          }}
        >
          Our mission is to protect and promote Australia's vital interests
          through the provision of unique foreign intelligence services as
          directed by Government.
        </p>
        <p className="more">More</p>
      </div>
    );
  }
}

export default Middle32;
