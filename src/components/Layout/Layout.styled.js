import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #c0c0c0;
`
export const List = styled.ul`
  display: flex;
  gap: 25px;
  padding: 12px 25px;
`
export const Item = styled.li`
  position: relative;
  list-style: none;
`

export const LinkNav = styled(NavLink)`
  font-size: 34px;
  font-weight: 700;
  text-decoration: none;
  /* color: #ff4040; */
  
  transition: color var(--animation);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 0;
    width: 100%;
    height: 3px;
    z-index: 1;

    background-color: #ffff00;
    border-radius: 2px;

    transform: scaleX(0);
    transition: transform var(--animation);
  }

  &.active,
  :hover  {
    color: #0000ff;

    &::after {
      transform: scaleX(1);
    }
}
`;
