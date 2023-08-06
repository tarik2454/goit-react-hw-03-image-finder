import React from 'react';
import { StyledGalleryItem, StyledImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images = [], toggleModal }) => {
  const handleImageClick = (webformatURL, alt) => {
    toggleModal(webformatURL, alt);
  };

  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <StyledGalleryItem
          key={id}
          onClick={() => handleImageClick(webformatURL, tags)}
        >
          <StyledImageItem
            id={id}
            src={webformatURL}
            alt={tags}
            loading="lazy"
          />
        </StyledGalleryItem>
      ))}
    </>
  );
};
