import React , { Component } from 'react' ;
import "./style.css" ;

import wdash from './images/white dash.png' ;

class Middle4 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          background: "#e6001f",
          padding: "4%",
          paddingLeft: "7%",
          paddingRight: "7%",
          marginTop: "3%",
          marginBottom: "5%"
        }}
      >
        <div
          className="title-small"
          style={{
            marginLeft: "-1%",
            color: "white"
          }}
        >
          <img
            src={wdash}
            style={{
              marginRight: "3%"
            }}
          />
          We strive for excellence in all that we do ?
        </div>
        <p
          className="content"
          style={{
            width: "100%",
            marginTop: "2%",
            color: "white"
          }}
        >
          The Central Intelligence Agency's primary mission is to collect,
          evaluate, and disseminate foreign intelligence to assist the president
          and senior US government policymakers in making decisions relating to
          the national security. The CIA does not make policy; it is an
          independent source of foreign intelligence information for those who
          do. The CIA may also engage in covert action at the president's
          direction in accordance with applicable law.
        </p>
      </div>
    );
  }
}

export default Middle4;
