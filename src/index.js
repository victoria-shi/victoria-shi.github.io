import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import HomePage from './javascripts/components/homePage.jsx';
import AboutMePage from './javascripts/components/aboutMePage.jsx';

import 'css/global.scss';

const routes = [
  (<Route exact path="/" key="home" component={HomePage} />),
  (<Route path="/about" key="aboutMe" component={AboutMePage} />)
];


ReactDOM.render((
  <BrowserRouter>
    <div>
      {routes}
    </div>
  </BrowserRouter>
), document.getElementById('root'));
// registerServiceWorker();
