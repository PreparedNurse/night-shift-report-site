import Layout from '../components/Layout';
import styled from '@emotion/styled';

const EpisodesContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  text-align: center;
  color: white;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ff0000;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  animation: fadeIn 1s ease-in 0.3s forwards;
  opacity: 0;
`;

export default function Episodes() {
  return (
    <Layout>
      <EpisodesContainer>
        <Message>Launch Date Pending</Message>
        <Subtitle>After launch, come back for weekly episodes!</Subtitle>
      </EpisodesContainer>
    </Layout>
  );
} 