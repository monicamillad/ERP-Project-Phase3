import React , { Component } from 'react' ;
import Middle1 from "./middle1-org";
import Middle2 from "./middle2-org";
import "./style.css" ;

class Middle extends Component {
  render() {
    return (
      <div
        style={{
          background: "#ececed",
          width: "100%",
          maxWidth: "1920px",
          margin: "auto"
        }}
      >
        <div className="container">
          <div className="row" />
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
              Organisation
            </div>
            <p
              className="content"
              style={{
                marginTop: "2%"
              }}
            >
              The Public Interest Disclosure Act 2013 (Cth) promotes integrity
              and accountability in the Commonwealth public sector by
              encouraging the disclosure of information about suspected
              wrongdoing, protecting people who make disclosures from adverse
              consequences relating to the making of a disclosure, and requiring
              agencies to take action to ensure that disclosures are properly
              investigated and dealt with.  ASIS is prescribed in the PID Act as
              being an agency to which the scheme applies.
            </p>
            <Middle1 />
            <Middle2 />
          </div>
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Middle;
