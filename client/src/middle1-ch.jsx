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
          Challenges
        </div>
        <p
          className="content"
          style={{
            marginTop: "2%"
          }}
        >
          Following reforms in recent years, the accountability framework for
          most intelligence agencies in Australia has been provided by
          legislation.
        </p>
      </div>
    );
  }
}

export default Middle1;
