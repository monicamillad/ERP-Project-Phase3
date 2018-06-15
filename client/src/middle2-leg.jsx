import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;

class Middle2 extends Component {

  state = {
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: ''
  };

  componentDidMount() {
    this.callApi()
  .then(res => this.setState({ c2: res.c2 , c3: res.c3 , c4: res.c4 , c5: res.c5 , c6: res.c6 , c7: res.c7 , c8: res.c8 }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/middle2-content');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
            {this.state.c2}
          </h>{" "}
          {this.state.c3}
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
            {this.state.c4}
          </h>{" "}
          {this.state.c5}
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
          {this.state.c6}
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
            {this.state.c7}
          </h>{" "}
          {this.state.c8}
        </p>
      </div>
    );
  }
}

export default Middle2;
