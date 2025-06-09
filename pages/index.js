import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

// Force Vercel deployment - timestamp: May 29, 2024 - 20:45
// Forcing new deployment - May 29, 2024
const HeroSection = styled.div`
  background-color: transparent;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/hospital-hallway.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
  color: white;
  
  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    
    span {
      color: #ff0000;
    }
  }
  
  p {
    font-size: 1.5rem;
    max-width: 600px;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
`;

const Button = styled.button`
  background-color: #ff0000;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #cc0000;
  }
`;

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <Layout>
      <HeroSection>
        <HeroContent>
          <h1>Welcome to <span>The Night Shift Report</span></h1>
          <p>Real talk from the other side of the clock. Stories, rants, & chaos from healthcare's night crew.</p>
          <Button onClick={handleClick}>Where To Find Us</Button>
        </HeroContent>
      </HeroSection>
    </Layout>
  );
}
