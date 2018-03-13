import React from 'react';

import PageLayout from 'javascripts/components/pageLayout.jsx';
import ArtSection from 'javascripts/components/art/artSection.jsx';
import LetterWorld from 'javascripts/components/art/letterWorld.jsx';

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
        </div>
      </PageLayout>
    )
  }
}

export default ArtPage