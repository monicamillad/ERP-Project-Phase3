import React from "react";
import "./style.css" ;
import bkgheader from './images/header backgroung.png' ;
import logo from './images/logo.png' ;
import message from './images/message.png' ;
import search from './images/search.png' ;
import enarrow from './images/EN+arrow.png' ;
import menue from './images/menu.png' ;
import PublicInterestDisclosures from './images/Public Interest Disclosures.png' ;
class Header extends React.Component {
    
  render() {
      var s={
          backgroundImage: "url("+bkgheader+")",
      };
    return (<header style={s}>
  <div className="container">
    <div className="row justify-content-between" style={{
          paddingRight: '0%'
        }}>
      <div className="col-2" style={{
            marginTop: '2%',
            marginLeft: '5%'
          }}>
        <img src={logo} />
      </div>
      <div className="col-3 " style={{
            marginTop: '5%',
            marginRight: '0%',
            paddingRight: '0%',
            paddingLeft: '5%'
          }}>
        <img src={message} style={{
              margin: '4%'
            }} />
        <img src={search} style={{
              margin: '4%'
            }} />
        <img src={enarrow} style={{
              margin: '4%'
            }} />
        <img src={menue} style={{
              margin: '4%'
            }} />
      </div>
    </div>
    <div className="row justify-content-center " style={{
          marginTop: '5%',
          marginLeft: '2%'
        }}>
      <div className="col-10">
        <img src={PublicInterestDisclosures} />
      </div>
    </div>
  </div>
    </header>);
  }

}

export default Header;
