import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';

import 'css/components/aboutMe.scss';

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = (
      <iframe src="https://player.vimeo.com/video/216193075" width="480" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    );
    return (
      <PageLayout>
        <div className="aboutMe">
          <img src="/images/victoria.jpg" />
          <div class="bio">
            <h1>This is fine!<a href="http://gunshowcomic.com/648" target="_blank">*</a></h1>
            <p>Hey! I'm Victoria Shi. I'm a front end engineer. I graduated from UC Berkeley in 2016, and have been working in the Bay Area since.</p>
            <p>Let's make contact! Email me at <a href="mailto:victoria.shi@berkeley.edu">victoria.shi@berkeley.edu</a></p>
            <p>Or, find me on <a href="https://www.linkedin.com/in/vshiberkeley/" target="_blank">LinkedIn</a>, <a href="https://github.com/victoria-shi" target="_blank">Github</a>, or <a href="https://www.behance.net/vshi" target="_blank">Behance</a>.</p>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default AboutMePage;