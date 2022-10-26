import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-flow: 260px;
  grid-gap: 15px;
  list-style: none;
`;

export const Item = styled.li`
  text-align: center;
  line-height: 1.3;
`;

export const LinkStyled = styled(Link)`
transition: color var(animation);
  
  &:hover,
  &:focus {
    color: #8000ff;
 }
`;

export const Wrap = styled.div`
  background-color: #b197ea;
  transition: box-shadow var(animation);

  &:hover,
  &:focus {
    box-shadow: 0 5px 5px 5px #c7a6db,
     -5px 0 5px 5px #c7a6db,
     -5px 0 5px 5px #c7a6db,
     0 -5px 5px 5px #c7a6db
 }
`;

