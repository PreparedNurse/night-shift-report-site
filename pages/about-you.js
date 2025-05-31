import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import styled from '@emotion/styled';

const AboutYouContainer = styled.div`
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

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  span {
    color: #ff0000;
    font-weight: bold;
  }
`;

export default function AboutYou() {
  const { user } = useUser();

  return (
    <Layout>
      <SignedIn>
        <AboutYouContainer>
          <Title>About You</Title>
          <ContentSection>
            <UserInfo>
              <p>Welcome, <span>{user?.firstName || user?.username || user?.emailAddresses[0]?.emailAddress}</span>!</p>
              <p>Member since: <span>{new Date(user?.createdAt).toLocaleDateString()}</span></p>
              <p>Email: <span>{user?.emailAddresses[0]?.emailAddress}</span></p>
            </UserInfo>
          </ContentSection>
        </AboutYouContainer>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 