import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Components/Template.jsx';
import Main from './Components/Main.jsx';
import Education from './Components/Education.jsx';
import Experience from './Components/Experience.jsx';
import Skills from './Components/Skills.jsx';
import Contact from './Components/Contact.jsx';
import AdditionalInfo from './Components/AdditionalInfo.jsx';

import { Router, Route, IndexRoute, hashHistory} from 'react-router';

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render (
    <Router history={hashHistory}>
        <Route path='/' component={Template}>
            <IndexRoute component={Main} />
            <Route path='/education' component={Education} />
            <Route path='/experience' component={Experience} />
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
            <Route path='/additional-info' component={AdditionalInfo} />
        </Route>
    </Router>,
        document.getElementById('app')
      )
  });
