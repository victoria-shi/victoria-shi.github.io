import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import ImageCarousel from 'javascripts/components/art/imageCarousel.jsx';

import 'css/components/art/letterWorld.scss';

class LetterWorld extends React.Component {
  constructor(props) {
    super(props);
    this.model = {
      validLetters: 'abcdefghijklmnopqrstuvwxyz',
      defaultLetter: 'm',
      images: []
    };
    this.model.images = this.model.validLetters.split('').map((letter) => `/images/letterWorld/${letter}.png`);
    this.state = {
      currentLetter: this.model.defaultLetter
    };

    this.nextLetter = this.nextLetter.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  nextLetter() {
    const curLetter = this.state.currentLetter;
    let index = this.model.validLetters.indexOf(curLetter);
    if (index === this.model.validLetters.length - 1) {
      index = -1;
    }
    const nextLetter = this.model.validLetters[index + 1];
    this.setState({
      currentLetter: nextLetter
    });
  }

  onInput(e) {
    const $target = $(e.currentTarget);
    const curChar = $target.val().slice(-1).toLowerCase().trim();
    if (!curChar) {
      this.setState({
        currentLetter: this.model.defaultLetter
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
        <ImageCarousel images={this.model.images} index={this.model.validLetters.indexOf(this.state.currentLetter)}/>
        <input type="text" name="letter" placeholder="Type to navigate" onInput={this.onInput}/>
      </div>
    );
  }
}

LetterWorld.propTypes = {
}

export default LetterWorld;