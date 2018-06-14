import React from "react";
import FAQ from "./FAQ_";
import FAQ1 from "./FAQ1";
import FAQ2 from "./FAQ2";

class Content extends React.Component {
  render() {
    return (<div style={{
      background: '#ececed',
      width: '100%',
      maxWidth: 1920,
      margin: 'auto'
    }}>
  <div className="container">
    <div className="row" />
    <FAQ></FAQ>
    <FAQ1></FAQ1>
    <FAQ2></FAQ2>
    <FAQ2></FAQ2>
    <FAQ2></FAQ2>
    <FAQ2></FAQ2>
    <FAQ2></FAQ2>
    <FAQ2></FAQ2>
    <FAQ2></FAQ2>
    <div className="row" />
  </div>
    </div>);
  }

}

export default Content;
