import React from 'react';

import 'css/components/navBar.scss';

function NavBar(props) {
  return (
    <div id="navBar">
      <a href="/">Home</a>	
      <a href="/resume">Code</a>
      <a href="/art">Design + Art</a>
      <a href="/resume">Resume</a>
      <a href="/about">About Me</a>
    </div>
  );
}

export default NavBar;