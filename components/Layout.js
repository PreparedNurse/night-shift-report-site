import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Header = styled.header`
  background-color: #000000;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: block;
  width: 200px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      color: #ff0000;
    }
  }
`;

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Header>
        <Nav>
          <Logo>
            <Link href="/" style={{ display: 'block', height: '100%' }}>
              <img src="/logo.png" alt="The Night Shift Report Logo" />
            </Link>
          </Logo>
          <MenuItems>
            <Link href="/about">About Us</Link>
            <Link href="/episodes">Episodes</Link>
            <Link href="/contact">Contact Us</Link>
          </MenuItems>
        </Nav>
      </Header>
      <main style={{ marginTop: '80px' }}>{children}</main>
    </div>
  );
};

export default Layout; 