import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import HomePage from './javascripts/components/homePage.jsx';
import ResumePage from './javascripts/components/resumePage.jsx';
import AboutMePage from './javascripts/components/aboutMePage.jsx';

import 'css/global.scss';

const routes = [
  (<Route exact path="/" key="home" component={HomePage} />),
  (<Route path="/resume" key="resume" component={ResumePage} />),
  (<Route path="/about" key="aboutMe" component={AboutMePage} />)
];


ReactDOM.render((
  <Router baseName="/">
    <div>
      {routes}
    </div>
  </Router>
), document.getElementById('root'));
