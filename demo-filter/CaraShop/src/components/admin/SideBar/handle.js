import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: var(--title-collor--);

  &:hover,
  &.active {
    color: var(--icon-collor--);
    font-weight: bold;
  }
`;
