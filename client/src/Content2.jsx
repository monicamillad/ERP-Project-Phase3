import React from "react";
import pdf from './images/pdf.png' ;
import ellipse from './images/ellipse.png' ;
import line from './images/line.png' ;


class Content2 extends React.Component {
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
          padding: '5%',
          marginTop: '5%',
          marginBottom: '5%'
        }}>
      <div className="col-10" style={{
            margin: '0%',
            padding: '0%',
            paddingRight: '20%'
          }}>
        <div className="title">
          Directors SpeECH
        </div>
        <div className="title" style={{
              color: 'rgba(149, 149, 150, 255)'
            }}>
          60 ASIS at
        </div>
        <p className="content">
          Director-General Nick Warner gave the first ever public speech about ASIS on 19 July 2012 as part of the Lowy Institute’s Distinguished Speakers series.
        </p>
        <p className="content">
          <img src={pdf} style={{
                marginRight: '1%'
              }} />
          Download PDF
        </p>
      </div>
      <div className="col-2" style={{
            padding: '0%',
            textAlign: 'center'
          }}>
        <img src={ellipse}style={{
              marginTop: '4%',
              width: '100%'
            }} />
        NAME NAME
        <br />
        title tile title
      </div>
      <br />
      <div className="row" style={{
            width: '100%',
            margin: '0%'
          }}>
        <div className="col-2 align-self-center content" style={{
              padding: '0%'
            }}>
          19 July 2012
        </div>
        <div className="col-10 align-self-center" style={{
              padding: '0%'
            }}>
          <img src={line} style={{
                width: '100%'
              }} />
        </div>
      </div>
      <br />
      <br />
      <div>
        <p className="content">
          Conceived in secrecy, the Australian Secret Intelligence Service has, unsurprisingly, spent the past 60 years operating in carefully cultivated shadows.
          Over that time no Director-General of ASIS has, until today, made a public address concerning the role or nature of the organisation.
        </p>
        <p className="content">
          Some of you will know the story of our beginning. On a cold Canberra evening in mid-May 1950, Prime Minister Menzies, having served martinis to a select group of ministers and senior officials, including a colourful former army officer, Alfred Brookes, penned a letter to his British counterpart, Clement Attlee. A framed copy of the letter hangs outside my office door.
        </p>
        <p className="content">
          Menzies told Atlee that he had
          "…decided to establish a Secret Intelligence Service which, when organised in due course, will operate in South East Asia and the Pacific areas adjacent to Australia. Recent developments in Asia and our 'near north' make this both a prudent and an urgent measure".
        </p>
        <p className="content">
          Concerned that the idea might leak, Menzies told Atlee:
          "Knowledge regarding this scheme has been restricted to the fewest possible here, and for added security I have chosen to write in this way".
        </p>
        <p className="content">
          Atlee provided help with advice and training, and in May 1952 — just over 60 years ago — ASIS was formed. Alfred Brookes was appointed as the first head of the Service.
          Menzies desire for secrecy stuck. Stories about ASIS didn't start to appear in the press until 1972, and ASIS's existence wasn't formally acknowledged publicly for another five years.
          For the first couple of decades of its existence ASIS, small and Melbourne-based, was actually known to very few in the Canberra bureaucracy. In the 1960s some departments had only one or two officers briefed on the existence of ASIS.
        </p>
        <p className="content">
          Few people in government knew of ASIS's existence either. In 1960, almost a decade after the organisation's formation, Menzies, backed by his Defence Minister, decided that the then Minister for the Navy — John Gorton — had no need for a formal brief about ASIS, even though the Service was about to occupy a Navy facility.
        </p>
        <p className="content">
          Gorton eventually got his briefing when he became Prime Minister, but he in turn is said to have refused to allow the opposition leader, Gough Whitlam, to be briefed, as apparently did McMahon when he succeeded Gorton.
        </p>
        <p className="content">
          There have been a few times over the past 60 years when "knowledge regarding the scheme" — that is, of ASIS and its operations — has received widespread publicity in the Australian media.
          And mostly this has been when things have gone wrong for one reason or another, sometimes the fault of ASIS and sometimes not.
        </p>
        <p className="content">
          In 1972 Prime Minister McMahon somehow found himself referring to ASlS's old codename — M09 — in a TV interview; there was the sacking of one of my predecessors, Bill Robertson, in 1975; and publicity in 1977 about operations in Chile undertaken on behalf of our allies. And some of you may remember the ill-conceived and bungled training exercise at the Sheraton Hotel in 1983.
        </p>
      </div>
    </div>
    <div className="row" />
  </div>
    </div>);
  }

}

export default Content2;