import React from 'react';
import {
  ButtonLabel,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  StyledSearchbar,
} from './Searchbar.styled';
import { ReactComponent as Icon } from '../../images/search.svg';

export const Searchbar = ({ setQuery }) => {
  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.query.value;
    setQuery(query);
  };

  return (
    <StyledSearchbar>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <ButtonLabel>
            <Icon />
          </ButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </StyledSearchbar>
  );
};
