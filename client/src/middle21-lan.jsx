import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;

class Middle21 extends Component {
  render() {
    return (
      <div
        className="col"
        style={{
          background: "#ffffff",
          padding: "4%",
          marginRight: "1%"
        }}
      >
        <div className="title">Public Interest Disclosures</div>
        <br />
        <p className="content">
          Our functions, as set out in the Intelligence Services Act 2001, are
          to:
        </p>
        <br />
        <p
          className="content"
          style={{
            width: "100%"
          }}
        >
          <img
            src={dash}
            style={{
              marginRight: "5%"
            }}
          />
          collect foreign intelligence, not available by other means, which may
          impact on Australia's interests;
        </p>
        <p
          className="content"
          style={{
            width: "100%"
          }}
        >
          <img
            src={dash}
            style={{
              marginRight: "5%"
            }}
          />
          distribute that intelligence to the Government, including key policy
          departments and agencies;
        </p>
        <p
          className="content"
          style={{
            width: "100%"
          }}
        >
          <img
            src={dash}
            style={{
              marginRight: "5%"
            }}
          />
          undertake counter-intelligence activities which protect Australia's
          interests and initiatives; and,
        </p>
        <p
          className="content"
          style={{
            width: "100%"
          }}
        >
          <img
            src={dash}
            style={{
              marginRight: "5%"
            }}
          />
          engage other intelligence and security services overseas in
          Australia's national interests.
        </p>
      </div>
    );
  }
}

export default Middle21;
