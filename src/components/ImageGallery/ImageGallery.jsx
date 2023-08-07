import React from 'react';
import PropTypes from 'prop-types';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ children, loading }) => {
  return <StyledImageGallery loading={loading}>{children}</StyledImageGallery>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
};
