import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;

class Middle11 extends React.Component {
  render() {
    return (
      <div
        className="col"
        style={{
          marginRight: "4%"
        }}
      >
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
          collect foreign intelligence, not available by other means, which may
          impact on Australia's interests;
        </p>
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
          distribute that intelligence to the Government, including key policy
          departments and agencies;
        </p>
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
          undertake counter-intelligence activities which protect Australia's
          interests and initiatives; and,
        </p>
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
          engage other intelligence and security services overseas in
          Australia's national interests.
        </p>
      </div>
    );
  }
}

export default Middle11;
