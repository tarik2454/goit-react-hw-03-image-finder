import React from 'react';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ children, loading }) => {
  return <StyledImageGallery loading={loading}>{children}</StyledImageGallery>;
};
