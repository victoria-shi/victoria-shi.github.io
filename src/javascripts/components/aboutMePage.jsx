import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageLayout>
        <div className="aboutMe">
          <iframe src="https://player.vimeo.com/video/216193075" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <p>Hi! I'm Victoria Shi.</p>
        </div>
      </PageLayout>
    )
  }
}

export default AboutMePage;