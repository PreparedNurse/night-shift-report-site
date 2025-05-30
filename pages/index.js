import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

// Forcing new deployment - May 29, 2024
const HeroSection = styled.div`
  background-color: #000000;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: radial-gradient(circle at center, #ff0000 0%, transparent 70%);
    opacity: 0.3;
    transform: translate(20%, -30%);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
  color: white;
  
  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    
    span {
      color: #ff0000;
    }
  }
  
  p {
    font-size: 1.5rem;
    max-width: 600px;
    margin-bottom: 2rem;
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
