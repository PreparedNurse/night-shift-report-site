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

const FormSection = styled.div`
  margin-top: 3rem;
  
  h2 {
    font-size: 2rem;
    color: #ff0000;
    margin-bottom: 1.5rem;
  }

  .form-container {
    background: rgba(255, 0, 0, 0.1);
    border: 2px solid #ff0000;
    border-radius: 10px;
    padding: 1rem;
    
    iframe {
      border-radius: 8px;
    }
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
          
          <FormSection>
            <h2>Update Your Information</h2>
            <div className="form-container">
              <iframe 
                className="airtable-embed" 
                src="https://airtable.com/embed/appf1jFZ5GRWbEm1Y/paghojN4mIW6hjCIY/form" 
                frameBorder="0" 
                width="100%" 
                height="533" 
                style={{ background: 'transparent', border: '1px solid #ccc' }}
              />
            </div>
          </FormSection>
        </AboutYouContainer>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 