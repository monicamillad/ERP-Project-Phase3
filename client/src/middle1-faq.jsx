import React , { Component } from 'react' ;
import "./style.css" ;

class Middle1 extends Component {
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
          FAQ
        </div>
        <p
          className="content"
          style={{
            marginTop: "2%"
          }}
        >
          We are responsive and dedicated to achieving results that make a
          difference to Australia and its people.We are forward thinkers,
          optimistic about the future and undaunted by change.
        </p>
      </div>
    );
  }
}

export default Middle1;
