import React from 'react';
import PropTypes from 'prop-types';

function RoleSection(props) {
  const renderDate = function(date) {
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }
  return (
    <div className='roleSection'>
      <div className="title">{`${props.title}, ${props.company}`}</div>
      <div className="dates">{`${renderDate(props.dates[0])} - ${renderDate(props.dates[1])}`}</div>
      <div className="content">{props.children}</div>
    </div>
  );
}

RoleSection.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RoleSection;