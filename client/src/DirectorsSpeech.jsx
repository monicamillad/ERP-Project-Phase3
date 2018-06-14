import Header2 from './Header2' ;
import Bar1 from './Bar1' ;
import Content2 from './Content2' ;
import Footer from './footer' ;
import React , { Component } from 'react' ;

class DirectorsSpeech extends Component
{
    render()
    {
        return(
            <div>
              <Header2/>
              <Bar1/>
              <Content2/>
              <Footer/>
            </div>
        );
    }
}
export default DirectorsSpeech;
