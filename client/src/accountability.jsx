import React , { Component } from 'react' ;
import Header from './header-acc' ;
import Bar from './bar-acc' ;
import Middle from './middle-acc' ;
import Footer from './footer' ;
import "./style.css" ;

class Accountability extends Component {

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

export default Accountability;
