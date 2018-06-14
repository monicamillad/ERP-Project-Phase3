import React , { Component } from 'react' ;
import Header from './header-ch' ;
import Bar from './bar-ch' ;
import Middle from './middle-ch' ;
import Footer from './footer' ;
import "./style.css" ;

class Challenges extends Component {

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

export default Challenges;
