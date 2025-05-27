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
  img {
    height: 50px;
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
            {/* Replace with your logo */}
            <Link href="/">
              <img src="/logo.png" alt="Logo" />
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