import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { useUser } from '@clerk/nextjs';

const AfterHoursContainer = styled.div`
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

const ContentSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 10px;
  border: 2px solid #ff0000;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContentTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ff0000;
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default function AfterHours() {
  const { user } = useUser();

  return (
    <Layout>
      <AfterHoursContainer>
        <Title>After Hours Content</Title>
        
        <ContentSection>
          <ContentTitle>Welcome to the Dark Side</ContentTitle>
          <ContentText>
            Welcome {user?.firstName || 'Night Shifter'}! This is where we share the uncensored, raw stories from the night shift that don't make it to the main show.
          </ContentText>
        </ContentSection>

        <ContentSection>
          <ContentTitle>Exclusive Episodes</ContentTitle>
          <ContentText>
            Access our premium after-hours episodes, featuring extended conversations, bonus content, and stories too wild for the main show.
          </ContentText>
        </ContentSection>

        <ContentSection>
          <ContentTitle>Member Benefits</ContentTitle>
          <ContentText>
            • Uncensored night shift stories
            • Extended episode content
            • Behind-the-scenes footage
            • Private discussion forum
            • Early access to merchandise
            • Exclusive member events
          </ContentText>
        </ContentSection>
      </AfterHoursContainer>
    </Layout>
  );
}
