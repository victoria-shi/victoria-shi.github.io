import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageLayout>
        <div className="aboutMe">About me</div>
      </PageLayout>
    )
  }
}

export default AboutMePage;