import React from 'react';

import NavBar from 'javascripts/components/navBar.jsx';

import 'css/components/pageLayout.scss';

function PageLayout(props) {
  return (
    <div id="pageLayout">
      <NavBar />
      <div id="content">{props.children}</div>
    </div>
  );
}

export default PageLayout;