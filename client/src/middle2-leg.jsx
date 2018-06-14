import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;

class Middle2 extends Component {
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
        <p
          className="content"
          style={{
            width: "100%"
          }}
        >
          <img
            src={dash}
            style={{
              marginRight: "3%"
            }}
          />
          <h className="red-txt">
            The Intelligence Services Act 2001 ('the Act')
          </h>{" "}
          provides the legislative basis for the work of ASIS, DIGO and ASD. The
          legislation stipulates the functions of the agencies, including what
          the agencies may, and may not, do.
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
              marginRight: "3%"
            }}
          />
          Under{" "}
          <h className="red-txt">
            the Act, the Parliamentary Joint Committee on Intelligence and
            Security (PJCIS)
          </h>{" "}
          has responsibility for the review of ASIS’s expenditure and
          administration.
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
              marginRight: "3%"
            }}
          />
          The Act also specifies rules to protect the privacy of Australian
          citizens. These Rules were made in accordance with the Act and
          regulate ASIS handling of intelligence information concerning
          Australian persons.
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
              marginRight: "3%"
            }}
          />
          Additionally,{" "}
          <h className="red-txt">
            the Inspector-General of Intelligence and Security Act 1996 created
            the role of the Inspector-General of Intelligence and Security
            (IGIS).
          </h>{" "}
          The IGIS is an independent statutory office-holder who is empowered to
          investigate complaints made against ASIS, to review the compliance of
          ASIS with the laws of the Commonwealth, States and Territories, and
          conduct inquiries into matters which fall within the prescribed
          functions of that office.
        </p>
      </div>
    );
  }
}

export default Middle2;
