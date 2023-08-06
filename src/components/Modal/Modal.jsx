import React, { Component } from 'react';
import { StyledOverlay, StyledModalWindow } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {
    currentImage: this.props.largeImageURL,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  getBigImage = () => {
    const { largeImageURL } = this.props;
    this.setState({ currentImage: largeImageURL });
  };

  render() {
    const { tags, currentImage } = this.props;

    return (
      <StyledOverlay onClick={this.onBackdropClick}>
        <StyledModalWindow>
          <img src={currentImage} alt={tags} onClick={this.getBigImage} />
        </StyledModalWindow>
      </StyledOverlay>
    );
  }
}
