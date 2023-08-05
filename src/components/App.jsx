import React, { Component } from 'react';
// import { styled } from 'styled-components';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../utills/images-api-sevice';
import {
  StyledMain,
  StyledSection,
  StyledContainer,
} from '../styles/GlobalStyle';

export class App extends Component {
  state = {};

  async componentDidMount() {
    fetchImages();
  }

  render() {
    return (
      <>
        <StyledMain>
          <Searchbar></Searchbar>

          <StyledSection>
            <StyledContainer>
              <ImageGallery>
                <ImageGalleryItem />
              </ImageGallery>

              <Button></Button>
              <Loader></Loader>
            </StyledContainer>
          </StyledSection>

          {/* <Modal></Modal> */}
        </StyledMain>
      </>
    );
  }
}
