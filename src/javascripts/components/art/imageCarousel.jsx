import React from 'react';
import PropTypes from 'prop-types';

import 'css/components/art/imageCarousel.scss';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.index
    };

    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      currentIndex: props.index
    });
  }

  onPrev() {
    let prevIndex = this.state.currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.props.images.length - 1;
    }
    this.setState({
      currentIndex: prevIndex
    });
  }

  onNext() {
    let nextIndex = this.state.currentIndex + 1;
    if (nextIndex >= this.props.images.length) {
      nextIndex = 0;
    }
    this.setState({
      currentIndex: nextIndex
    });
  }

  render() {
    return (
      <div className="imageCarousel">
        <div className="image" style={{'backgroundImage': `url(${this.props.images[this.state.currentIndex]})`}} onClick={this.onNext}/>
        <div className="nav">
          <span className='prev' onClick={this.onPrev}>{'<'}</span>
          <div className="label">
            <span className="currentIndex">{this.state.currentIndex + 1}</span>
            <span>/</span>
            <span className="total">{this.props.images.length}</span>
          </div>
          <span className='next' onClick={this.onNext}>{'>'}</span>
        </div>
      </div>
    );
  }
}

ImageCarousel.defaultProps = {
  index: 0
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number
};

export default ImageCarousel;