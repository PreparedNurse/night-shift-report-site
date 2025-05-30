import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import styled from '@emotion/styled';

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
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export default function AfterHours() {
  return (
    <Layout>
      <SignedIn>
        <AfterHoursContainer>
          <Title>After Hours</Title>
          <ContentSection>
            <h2>Welcome to the Members-Only Area</h2>
            <p>This is where we share our uncensored stories and exclusive content.</p>
          </ContentSection>
        </AfterHoursContainer>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 