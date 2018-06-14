import React , { Component } from 'react' ;
import Middle51 from "./middle51-faq";
import Middle52 from "./middle52-faq";
import Middle53 from "./middle53-faq";
import "./style.css" ;

class Middle5 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <Middle51 />
        <Middle52 />
        <Middle53 />
      </div>
    );
  }
}

export default Middle5;
