import React , { Component } from 'react' ;
import Header from './header-faq' ;
import Bar from './bar-faq' ;
import Middle from './middle-faq' ;
import Footer from './footer' ;
import "./style.css" ;

class FAQ extends Component {

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

export default FAQ;
