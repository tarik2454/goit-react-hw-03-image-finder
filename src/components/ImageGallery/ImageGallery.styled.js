import { styled } from 'styled-components';

export const StyledImageGallery = styled.ul`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(275px, 4fr));
  /* grid-template-columns: ${props =>
    !props.loading ? 'repeat(auto-fill, minmax(275px, 4fr))' : 'auto'}; */
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 16px;
  padding: 0;
`;
