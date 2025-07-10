import Layout from '../components/Layout';
import styled from '@emotion/styled';
import Link from 'next/link';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ff0000;
`;

const SocialLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 0, 0, 0.2);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
`;

const LinkText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export default function About() {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@thenightshiftreport', // Fixed YouTube URL format
      icon: '📺'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thenightshiftreport',
      icon: '📸'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@thenightshiftreport?_t=ZP-8xuiUapnJTb&_r=1',
      icon: '🎵'
    },
    // Add more social links here as needed
  ];

  return (
    <Layout>
      <AboutContainer>
        <Title>Connect With Us</Title>
        <p>Follow us on our social media channels for the latest updates, behind-the-scenes content, and more!</p>
        
        <SocialLinksContainer>
          {socialLinks.map((link, index) => (
            <SocialCard 
              key={index} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>{link.icon}</IconWrapper>
              <LinkText>{link.name}</LinkText>
            </SocialCard>
          ))}
        </SocialLinksContainer>
      </AboutContainer>
    </Layout>
  );
} 