import Header1 from './Header1' ;
import Bar1 from './Bar1' ;
import Content from './Content' ;
import Footer from './footer' ;
import React , { Component } from 'react' ;

class Faq extends Component
{
    render()
    {
        return(
            <div>
              <Header1/>
              <Bar1/>
              <Content/>
              <Footer/>
            </div>
        );
    }
}
export default Faq;
