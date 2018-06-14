import React , { Component } from 'react' ;
import "./style.css" ;

class Middle12 extends Component {
  render() {
    return (
      <div
        className="col"
        style={{
          background: "#ffffff",
          padding: "4%",
          marginLeft: "1%"
        }}
      >
        <div className="title">Organisation</div>
        <br />
        <p className="content">
          The Australian Government expects us to be adaptable and to respond
          effectively to the growing number and diverse nature of threats facing
          Australia and its citizens. Our work can involve collecting
          intelligence relating to national defence, international relations and
          economic issues. We also contribute to Australia's coordinated
          national efforts against terrorism, proliferation of weapons of mass
          destruction, and trans-national issues such as people smuggling.
        </p>
      </div>
    );
  }
}

export default Middle12;
