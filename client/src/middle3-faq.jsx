import React , { Component } from 'react' ;
import Middle31 from "./middle31-faq";
import Middle32 from "./middle32-faq";
import Middle33 from "./middle33-faq";
import "./style.css" ;

class Middle3 extends React.Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "3%"
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
