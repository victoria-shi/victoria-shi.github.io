import React from 'react';
import PropTypes from 'prop-types';

function ResumeSection(props) {
  return (
    <div className={`resumeSection ${props.class || ''}`}>
      <div className="index">{`.${props.index.toString().padStart(2, '0')}`}</div>
      <div className="title">{props.title}</div>
      <div className="content">{props.children}</div>
    </div>
  );
}

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  class: PropTypes.string
}

export default ResumeSection;