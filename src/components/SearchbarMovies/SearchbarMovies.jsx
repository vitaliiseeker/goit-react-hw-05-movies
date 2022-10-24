import { useState } from "react";
import PropTypes from 'prop-types';
import { SearchMoviesContainer, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from './SearchbarMovies.styled';
import { ReactComponent as IconBtn } from "../icons/search.svg";

export const SearchbarMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  return (
    <SearchMoviesContainer>
      <SearchForm
        onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormBtn
          type="submit">
          <IconBtn width="33" height="33" />
          <SearchFormBtnLabel>
            Search
          </SearchFormBtnLabel>
        </SearchFormBtn>
      </SearchForm>
    </SearchMoviesContainer>
  )
}

SearchbarMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
