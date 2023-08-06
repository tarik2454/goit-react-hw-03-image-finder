import React from 'react';
import { StyledGalleryItem, StyledImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images = [] }) => {
  return (
    <>
      {images.map(({ id, webformatURL, type }, index) => (
        <StyledGalleryItem key={index}>
          <StyledImageItem
            id={id}
            src={webformatURL}
            alt={type}
            loading="lazy"
          />
        </StyledGalleryItem>
      ))}
    </>
  );
};
