import React from 'react';
import $ from 'jquery';

import PageLayout from 'javascripts/components/pageLayout.jsx';
import GithubContributionsGraph from 'javascripts/components/code/githubContributionsGraph.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.elements = {};
  }

  render() {
    return (
      <PageLayout>
        <div className="homePage">
          Home
        </div>
      </PageLayout>
    )
  }
}

export default HomePage;