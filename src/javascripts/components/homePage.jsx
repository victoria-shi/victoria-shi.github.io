import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';

import 'css/components/home.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.elements = {};
  }

  render() {
    return (
      <PageLayout hideNav>
        <div className="homePage">
          <div className="logoContainer">
            <div className="logo"></div>
          </div>
          <div className="sectionContainer">
          <div className="section">
            <div class="fill dark">
              <img src="/images/octopus/octopus-1-mask.png" />
            </div>
            <div className="text">Code</div>
          </div>
          <div className="section">
            <div class="fill">
              <img src="/images/octopus/octopus-2-mask.png" />
            </div>
            <div className="text">Design + Art</div>
          </div>
          <div className="section">
            <div class="fill">
              <img src="/images/octopus/octopus-3-mask.png" />
            </div>
            <div className="text">Resume</div>
          </div>
          <div className="section">
            <div class="fill dark">
              <img src="/images/octopus/octopus-4-mask.png" />
            </div>
            <div className="text">About Me</div>
          </div>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default HomePage;