import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';
import ArtSection from 'javascripts/components/art/artSection.jsx';
import LetterWorld from 'javascripts/components/art/letterWorld.jsx';
import ImageCarousel from 'javascripts/components/art/imageCarousel.jsx';

import 'css/components/art.scss';

class ArtPage extends React.Component {
  constructor(props) {
    super(props);
    this.model = {};
  }

  render() {
    return (
      <PageLayout>
        <div className="art">
          <ArtSection index={1} title='Letter World'>
            <LetterWorld />
          </ArtSection>
          <ArtSection index={2} title='Eyes on the Sky'>
            <ImageCarousel images={["/images/eyes_on_the_sky_1.jpg", "/images/eyes_on_the_sky_2.jpg"]}/>
          </ArtSection>
        </div>
      </PageLayout>
    )
  }
}

export default ArtPage