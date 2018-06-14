import React from "react";
import dash from './images/dash.png' ;

class FAQ2 extends React.Component {
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
    </div>);
  }

}

export default FAQ2;