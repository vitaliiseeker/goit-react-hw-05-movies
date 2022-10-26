import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  border-bottom: 3px solid #c0c0c0;
`
export const List = styled.ul`
  display: flex;
  
  @media screen and (max-width: 450px) {
  flex-direction: column;
  gap: 15px;
  padding: 8px 15px;
}

@media screen and (min-width: 450.02px) {
  flex-direction: row;
  gap: 25px;
  padding: 12px 25px;
}
`
export const Item = styled.li`
  position: relative;
  list-style: none;
`

export const LinkNav = styled(NavLink)`
  font-size: 34px;
  font-weight: 700;
  text-decoration: none;
  
  transition: color var(--animation);
  
@media screen and (min-width: 450.02px) {
  
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
  }

  &.active,
  :hover  {
    color: #0000ff;

    &::after {
      transform: scaleX(1);
    }
}
`;
