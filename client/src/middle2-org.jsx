import React , { Component } from 'react' ;
import "./style.css" ;

import chart from './images/chart.jpg' ;

class Middle2 extends Component {
  render() {
    return (
      <div
        className="row"
        style={{
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
          Organisation Chart
        </div>
        <div
          className="row justify-content-md-center"
          style={{
            margin: "5%",
            marginTop: "10%"
          }}
        >
          <img src={chart} />
        </div>
        <p
          className="content"
          style={{
            marginTop: "2%"
          }}
        >
          The Public Interest Disclosure Act 2013 (Cth) promotes integrity and
          accountability in the Commonwealth public sector by encouraging the
          disclosure of information about suspected wrongdoing,
        </p>
        <p
          className="content"
          style={{
            marginTop: "2%"
          }}
        >
          protecting people who make disclosures from adverse consequences
          relating to the making of a disclosure, and requiring agencies to take
          action to ensure that disclosures are properly investigated and dealt
          with.  ASIS is prescribed in the PID Act as being an agency to which
          the scheme applies.
        </p>
      </div>
    );
  }
}

export default Middle2;
