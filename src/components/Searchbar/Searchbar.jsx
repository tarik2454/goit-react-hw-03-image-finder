import React from 'react';
import {
  ButtonLabel,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  StyledSearchbar,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <StyledSearchbar>
      <SearchForm>
        <SearchFormButton type="submit">
          +<ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </StyledSearchbar>
  );
};
