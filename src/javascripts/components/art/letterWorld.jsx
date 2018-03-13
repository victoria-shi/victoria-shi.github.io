import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'; 

import 'css/components/art/letterWorld.scss';

class LetterWorld extends React.Component {
  constructor(props) {
    super(props);
    this.model = {
      validLetters: 'abcdefghijklmnopqrstuvwxyz'
    };
    this.state = {
      currentLetter: 'f'
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    const $target = $(e.currentTarget);
    const curChar = $target.val().slice(-1).toLowerCase().trim();
    if (!curChar) {
      this.setState({
        currentLetter: 'f'
      });
    } else if (this.model.validLetters.indexOf(curChar) > -1) {
      this.setState({
        currentLetter: curChar
      });
    }
  }

  render() {
    return (
      <div className='letterWorld'>
        <input type="text" name="letter" placeholder="Type to navigate" onInput={this.onInput}/>
        <div className="image" style={{'backgroundImage': `url(images/letterWorld/${this.state.currentLetter}.png)`}} />
      </div>
    );
  }
}

LetterWorld.propTypes = {
}

export default LetterWorld;