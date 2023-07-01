import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #1976d2;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
