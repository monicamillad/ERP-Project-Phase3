import React , { Component } from 'react' ;
import Header from './header-leg' ;
import Bar from './bar-leg' ;
import Middle from './middle-leg' ;
import Footer from './footer' ;
import "./style.css" ;

class Legislations extends Component {

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

export default Legislations;
