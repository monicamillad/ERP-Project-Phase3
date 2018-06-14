import Header from './Header' ;
import Bar from './Bar' ;
import PublicInterestDisclosures from './PublicInterestDisclosures' ;
import Footer from './footer' ;
import React , { Component } from 'react' ;

class Public_interest extends Component
{
    render()
    {
        return(
            <div>
              <Header/>
              <Bar/>
              <PublicInterestDisclosures/>
              <Footer/>
            </div>
        );
    }
}
export default Public_interest;
