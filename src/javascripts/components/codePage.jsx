import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';
import GithubContributionsGraph from 'javascripts/components/code/githubContributionsGraph.jsx';

class CodePage extends React.Component {
  constructor(props) {
    super(props);
    this.elements = {};
  }

  render() {
    return (
      <PageLayout>
        <div className="codePage">
          <GithubContributionsGraph />
        </div>
      </PageLayout>
    )
  }
}

export default CodePage;