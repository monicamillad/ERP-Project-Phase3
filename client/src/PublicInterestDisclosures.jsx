import React from "react";
import "./style.css" ;

class PublicInterestDisclosures extends React.Component {
  render() {
    return (<div style={{
      background: '#ececed',
      width: '100%',
      maxWidth: 1920,
      margin: 'auto'
    }}>
  <div className="container">
    <div className="row" />
    <div className="row " style={{
          background: '#ffffff',
          padding: '4%',
          paddingLeft: '7%',
          paddingRight: '7%',
          marginTop: '5%',
          marginBottom: '5%'
        }}>
      <div className="title" style={{
            marginLeft: '-1%'
          }}>
        Public Interest Disclosures
      </div>
      <p className="content" style={{
            marginTop: '2%'
          }}>
        The Public Interest Disclosure Act 2013 (Cth) promotes integrity and accountability in the Commonwealth public sector by encouraging the disclosure of information about suspected wrongdoing, protecting people who make disclosures from adverse consequences relating to the making of a disclosure, and requiring agencies to take action to ensure that disclosures are properly investigated and dealt with. ASIS is prescribed in the PID Act as being an agency to which the scheme applies.
      </p>
      <p className="content">
        Further information regarding the PID scheme can be found on the website of the Inspector-General of Intelligence and Security (www.igis.gov.au) and the Commonwealth Ombudsman has produced guides and information sheets (www.ombudsman.gov.au/pages/pid)
        Public interest disclosures can be made to the ASIS Authorised Officer via the following address. Individuals are encouraged to use registered post.
      </p>
    </div>
    <div className="row" />
  </div>
    </div>);
  }

}

export default PublicInterestDisclosures;
