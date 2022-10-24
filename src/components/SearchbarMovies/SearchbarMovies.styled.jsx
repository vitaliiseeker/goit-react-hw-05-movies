import styled from 'styled-components';

export const SearchMoviesContainer = styled.header`
  display: flex;
  padding: 10px 15px;
  color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 700px;

  background-color: #cecece;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  border: 0;
  opacity: 0.6;
  transition: opacity var(animation);
  cursor: pointer;
  outline: none;

&:hover {
  opacity: 1;
}
`;

export const SearchFormBtnLabel = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
clip-path: inset(50%);
border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0;
  font: inherit;

  color: #808080;
  background-color: #cecece;

  border: none;
  outline: none;

&::placeholder {
  font: inherit;
  background-color: #cecece;
}
`;
