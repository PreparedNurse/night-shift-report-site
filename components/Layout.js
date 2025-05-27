import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const Header = styled.header`
  background-color: #000000;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/ekg-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: repeat-x;
    opacity: 0.2;
    z-index: -1;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    
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
          <LogoContainer>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="The Night Shift Report Logo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
              />
            </Link>
          </LogoContainer>
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