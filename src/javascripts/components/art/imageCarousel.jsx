import React from 'react';
import PropTypes from 'prop-types';

import 'css/components/art/imageCarousel.scss';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.index
    };

    this.onNext = this.onNext.bind(this);
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