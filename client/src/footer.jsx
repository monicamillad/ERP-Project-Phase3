import React , { Component } from 'react' ;
import "./style.css" ;

import logo from './images/logo.png' ;
import menue1 from './images/NS2-Detailed-menu2_43.jpg' ;
import menue2 from './images/NS2-Detailed-menu2_45.jpg' ;
import menue3 from './images/NS2-Detailed-menu2_46.jpg' ;
import menue4 from './images/NS2-Detailed-menu2_47.jpg' ;

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          background: "black",
          width: "100%",
          maxWidth: "1920px",
          margin: "auto"
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{
              paddingTop: "7%",
              paddingBottom: "7%"
            }}
          >
            <div
              className="col"
              style={{
                marginRight: "20%"
              }}
            >
              <img
                src={logo}
                style={{
                  marginLeft: "20%"
                }}
              />
            </div>
            <div className="col footer1">
              <ul>
                <li
                  style={{
                    marginBottom: "8%"
                  }}
                >
                  WHO WE ARE
                </li>
                <li className="footer2">Overview</li>
                <li className="footer2">Mission, Vales And Ethics</li>
                <li className="footer2">History</li>
                <li className="footer2">Director's Speech</li>
              </ul>
            </div>
            <div className="col footer1">
              <ul>
                <li
                  style={{
                    marginBottom: "8%"
                  }}
                >
                  WHAT WE DO
                </li>
                <li className="footer2">Legislation</li>
                <li className="footer2">Public Interest Disclosure</li>
                <li className="footer2">Counter Terrorism</li>
                <li className="footer2">Counter Proliferation</li>
              </ul>
            </div>
            <div className="col footer1">
              <ul>
                <li
                  style={{
                    marginBottom: "2%"
                  }}
                >
                  NEWS
                </li>
                <li
                  style={{
                    marginBottom: "2%"
                  }}
                >
                  FAQs
                </li>
                <li
                  style={{
                    marginBottom: "2%"
                  }}
                >
                  CONTACT US
                </li>
                <br />
                <li id="social-media">
                  <img src={menue1} />
                  <img src={menue2} />
                  <img src={menue3} />
                  <img src={menue4} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
