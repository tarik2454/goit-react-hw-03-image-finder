import React from 'react';
import { StyledGalleryItem, StyledImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images = [], toggleModal }) => {
  const onImageClick = (webformatURL, alt) => {
    toggleModal(webformatURL, alt);
  };

  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <StyledGalleryItem
          key={id}
          onClick={() => onImageClick(largeImageURL, tags)}
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
