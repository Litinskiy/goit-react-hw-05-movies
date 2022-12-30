import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 20px;
`;
export const Link = styled(NavLink)`
  padding: 19px;

  &.active {
    color: white;
    background-color: blueviolet;
  }
`;
export const Header = styled.header`
  border-bottom: 1px solid blueviolet;
`;
export const Container = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  max-width: 1200px;
`;
