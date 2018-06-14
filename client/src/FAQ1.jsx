import React from "react";
import dash from './images/dash.png' ;

class FAQ1 extends React.Component {
  render() {
    return (<div className="row " style={{
      background: '#ffffff',
      padding: '4%',
      marginTop: '5%',
      marginBottom: '5%'
    }}>
  <div className="title-small">
    <img src={dash} style={{
          marginRight: '2%'
        }} />
    We strive for excellence in all that we do ?
  </div>
  <br />
  <p className="content" style={{
        marginLeft: '7%',
        paddingRight: '4%'
      }}>
    The Central Intelligence Agency's primary mission is to collect, evaluate, and disseminate foreign intelligence to assist the president and senior US government policymakers in making decisions relating to the national security. The CIA does not make policy; it is an independent source of foreign intelligence information for those who do. The CIA may also engage in covert action at the president's direction in accordance with applicable law.
  </p>
    </div>);
  }

}

export default FAQ1;
