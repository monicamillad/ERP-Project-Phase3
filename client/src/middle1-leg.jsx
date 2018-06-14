import React , { Component } from 'react' ;
import "./style.css" ;

class Middle1 extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
  .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/middle1-content');
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
        <div className="title">Legislation and Privacy</div>
        <br />
        <p className="content">{this.state.response}</p>
      </div>
    );
  }
}

export default Middle1;
