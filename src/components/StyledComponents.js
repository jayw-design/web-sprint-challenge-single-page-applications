import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background : red;
`;

export const Logo = styled.h2`
  color: white;
  font-size: 3rem;
`;

export const NavLinks = styled.ul`
  display: flex;
    align-items: center;

`;

export const NavItems = styled.ul`
  list-style: none;
    align-items: center;

`;
export const NavAnchor = styled.ul`
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

export const OrderButton = styled.button`
  padding: 1rem 1.5rem;
`;