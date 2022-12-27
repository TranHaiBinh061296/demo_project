import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// set style for NavLink in header component
export const NavLink = styled(Link)`
  color: #1a1a1a;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover,
  &.active {
    color: var(--color-text--);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const CloseBtn = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem;
  display: block;
  background-color: #c8cff3;
  border: none;
`;

export const ToggleBtn = styled.button`
  display: block;
  background-color: #e3e6f3;
  border: none;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export function showNav() {
  let mynav = document.querySelector('.navLinkGroup');
  let cartIcon = document.querySelector('.cart-icon');
  mynav.classList.remove('hide');
  cartIcon.classList.add('d-none');

}

export function hideNav() {
  let mynav = document.querySelector('.navLinkGroup');
  let cartIcon = document.querySelector('.cart-icon');
  mynav.classList.add('hide');
  cartIcon.classList.remove('d-none');

}
