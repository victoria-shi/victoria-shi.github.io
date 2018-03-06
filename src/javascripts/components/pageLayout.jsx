import React from 'react';

import NavBar from 'javascripts/components/navBar.jsx';

function PageLayout(props) {
  return (
    <div id="pageLayout">
      <NavBar />
      <div id="content">{props.children}</div>
    </div>
  );
}

export default PageLayout;