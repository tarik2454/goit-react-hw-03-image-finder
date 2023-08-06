import React from 'react';
import { StyledButtonWrapper, StyledButton } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </StyledButtonWrapper>
  );
};
