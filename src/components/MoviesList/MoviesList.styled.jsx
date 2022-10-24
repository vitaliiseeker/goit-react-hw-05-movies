import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
 padding: 20px;
`;

export const Item = styled.li`
  line-height: 1.3;
`;

export const LinkStyled = styled(Link)`
  transition: color var(animation);
  
  &:hover,
  &:focus {
    color: #8000ff;
 }
`;

