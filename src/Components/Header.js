import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #333;
  color: white;
  
  img {
    width: 50px;
    height: auto;
    margin-left: 30px;
    }
    `;
    
  const NavLinks = styled.div`
    margin-top: 20px;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <Nav>
      <img src="/images/logo.png" alt="HomeDecor Logo" />
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};export default Header;

