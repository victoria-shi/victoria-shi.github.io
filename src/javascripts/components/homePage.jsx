import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageLayout>
        <div className="homePage">Home</div>
      </PageLayout>
    )
  }
}

export default HomePage;