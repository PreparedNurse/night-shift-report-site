import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

const Header = styled.header`
  background-color: #000000;
  padding: 1rem 2rem;
  width: 100%;
  position: relative;
  min-height: 80px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/ekg-background.png');
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;
    opacity: 0.2;
    z-index: 0;
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
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
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

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
`;

const SignInButtonStyled = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;

const Layout = ({ children }) => {
  const { isSignedIn, user } = useUser();
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
            {isSignedIn && <Link href="/after-hours">After Hours</Link>}
            <AuthContainer>
              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <SignInButtonStyled>Sign In</SignInButtonStyled>
                </SignInButton>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
            </AuthContainer>
          </MenuItems>
        </Nav>
      </Header>
      <main style={{ marginTop: '80px' }}>{children}</main>
    </div>
  );
};

export default Layout;