import React from 'react';
import PropTypes from 'prop-types';

function ArtSection(props) {
  return (
    <div className={`artSection ${props.class || ''}`}>
      <div className="content">{props.children}</div>
      <div className="info">
        <div className="index">{`.${props.index.toString().padStart(2, '0')}`}</div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
}

ArtSection.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  class: PropTypes.string
}

export default ArtSection;