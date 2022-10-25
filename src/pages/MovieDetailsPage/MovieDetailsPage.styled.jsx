import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Text = styled.p`
padding: 10px 20px;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 40px;
  border-bottom: 2px solid #c0c0c0;

`
export const Item = styled.li`
  position: relative;
  /* list-style: none; */
`

export const LinkNav = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: #004080;
  
  transition: color var(--animation);

  &.active,
  &:hover ,
  &:focus {
    color: #ffff00;
}
`;
