import React , { Component } from 'react' ;
import "./style.css" ;

import rightarrow from './images/right arrow.png' ;

class Middle222 extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "#ffffff",
          padding: "4%",
          marginTop: "4%",
          paddingTop: "auto",
          paddingBottom: "auto"
        }}
      >
        <div className="title">
          FAQs
          <img src={rightarrow} className="offset-md-8" />
        </div>
      </div>
    );
  }
}

export default Middle222;
