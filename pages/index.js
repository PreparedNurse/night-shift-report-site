import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Force Vercel deployment - timestamp: May 29, 2024 - 20:45
// Forcing new deployment - May 29, 2024
const HeroSection = styled.div`
  background-color: transparent;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1px;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 2rem 1rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
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
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  
  h1 {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    span {
      color: #ff0000;
    }
  }
  
  p {
    font-size: 1.5rem;
    max-width: 600px;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
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
  
  @media (max-width: 768px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    min-height: 48px;
  }
  
  &:hover {
    background-color: #cc0000;
  }
`;

const EpisodeThumbnailSection = styled.div`
  background-color: #000000;
  padding: 4rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const EpisodeThumbnailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const EpisodeTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  span {
    color: #ff0000;
  }
`;

const EpisodeDescription = styled.p`
  color: #cccccc;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  const handleEpisodeClick = () => {
    window.open('https://www.youtube.com/watch?v=snY5xHHen7I', '_blank');
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
      
      <EpisodeThumbnailSection>
        <EpisodeTitle>Latest <span>Episode</span></EpisodeTitle>
        <EpisodeDescription>
          Check out our first episode on youtube by clicking the video below. You can also find us on spotify podcast and apple podcast by searching The Night Shift Report.
        </EpisodeDescription>
        <EpisodeThumbnailContainer onClick={handleEpisodeClick}>
          <Image
            src="/episode-1-thumbnail.png"
            alt="Episode 1 Thumbnail - Click to watch on YouTube"
            width={800}
            height={450}
            style={{ 
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              width: '100%',
              height: 'auto',
              maxWidth: '800px'
            }}
            priority
          />
        </EpisodeThumbnailContainer>
      </EpisodeThumbnailSection>
    </Layout>
  );
}
