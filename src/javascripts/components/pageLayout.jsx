import React from 'react';
import PropTypes from 'prop-types';

import NavBar from 'javascripts/components/navBar.jsx';

import 'css/components/pageLayout.scss';

function PageLayout(props) {
  let navBar = (<NavBar />);
  if (props.hideNav === true) {
    navBar = false;
  }
  return (
    <div id="pageLayout">
      {navBar}
      <div id="content">{props.children}</div>
    </div>
  );
}

PageLayout.defaultProps = {
  hideNav: false
};

PageLayout.propTypes = {
  hideNav: PropTypes.bool
};

export default PageLayout;