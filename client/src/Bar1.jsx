import React from "react";
import uparrow from './images/up arrow.png' ;

class Bar1 extends React.Component {
  render() {
    return (<div style={{
      height: 100,
      background: '#ffffff'
    }}>
  <div className="container" style={{
        padding: '0%'
      }}>
    <div className="row align-items-end txt2">
      <div className="col-4">
        Mission, Values and Ethics
        <br />
        <img src={uparrow} style={{
              position: 'absolute',
              marginTop: '-73px'
            }} />
      </div>
      <div className="col-2">
        History
      </div>
      <div className="col-3">
        Director’s speech
      </div>
      <div className="col-2 red-txt">
        FAQ
      </div>
    </div>
  </div>
  <div className="container" style={{
        padding: '0%'
      }}>
    <div className="nav">
      <div className="row align-items-center " style={{
            width: '100%',
            margin: '0%'
          }}>
        <div className="col-4 txt red-txt">
          WHO WE ARE
        </div>
        <div className="col-4 txt">
          WHAT WE DO
        </div>
        <div className="col-4 txt">
          NEWS
        </div>
      </div>
    </div>
  </div>
    </div>);
  }

}

export default Bar1;
