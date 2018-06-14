import React , { Component } from 'react' ;
import Header from './header-lan' ;
import Bar from './bar-lan' ;
import Middle from './middle-lan' ;
import Footer from './footer' ;
import "./style.css" ;

class Landing extends Component {

    render(){

      return(

        <div>
          <Header></Header>
          <Bar></Bar>
          <Middle></Middle>
          <Footer></Footer>
        </div>
      ) ;
    }
}

export default Landing;
