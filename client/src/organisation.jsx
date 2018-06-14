import React , { Component } from 'react' ;
import Header from './header-org' ;
import Bar from './bar-org' ;
import Middle from './middle-org' ;
import Footer from './footer' ;
import "./style.css" ;

class Organisation extends Component {

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

export default Organisation;
