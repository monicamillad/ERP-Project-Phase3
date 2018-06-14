import React , { Component } from 'react' ;
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Public_interest from './public_interest' ;
import Faq from './faq (2)' ;
import DirectorsSpeech from './DirectorsSpeech' ;
import Accountability from './accountability' ;
import Challenges from './challenges' ;
import FAQ from './faq' ;
import Landing from './landing' ;
import Legislations from './legislations' ;
import Organisation from './organisation' ;

class App extends Component
{

    render()
    {
        return (
            <Router>
            <div className="App">
                <Route path="/WWD/public_interest" exact strict component={Public_interest} />
                <Route path="/WWA/faq" exact strict component={Faq} />
                <Route path="/WWA/Directors Speech" exact strict component={DirectorsSpeech} />
                <Route path="/WWD/accountability" exact strict component={Accountability} />
                <Route path="/WWA/challenges" exact strict component={Challenges} />
                <Route path="/WWA/FAQs" exact strict component={FAQ} />
                <Route path="/WWD/landing" exact strict component={Landing} />
                <Route path="/WWA/legislations" exact strict component={Legislations} />
                <Route path="/WWA/organisation" exact strict component={Organisation} />
            </div>
            </Router>
        );
    }
}
export default App;
