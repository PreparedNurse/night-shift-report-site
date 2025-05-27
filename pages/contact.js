import Layout from '../components/Layout';
import styled from '@emotion/styled';

const ContactContainer = styled.div`
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

const ContactSection = styled.div`
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

const ContactType = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ff0000;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;

  a {
    color: #ff0000;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s ease;

    &:hover {
      border-bottom-color: #ff0000;
    }
  }
`;

export default function Contact() {
  return (
    <Layout>
      <ContactContainer>
        <Title>Get in Touch</Title>
        
        <ContactSection>
          <ContactType>Business Inquiries</ContactType>
          <ContactInfo>
            For any business inquiries reach out to us at{' '}
            <a href="mailto:contact@thenightshiftreport.com">
              contact@thenightshiftreport.com
            </a>
          </ContactInfo>
        </ContactSection>

        <ContactSection>
          <ContactType>Share Your Stories</ContactType>
          <ContactInfo>
            If you have any stories or confessions send them in to us at{' '}
            <a href="mailto:stories@thenightshiftreport.com">
              stories@thenightshiftreport.com
            </a>
            {' '}and we may read and/or discuss them on the next episode!
          </ContactInfo>
        </ContactSection>
      </ContactContainer>
    </Layout>
  );
} 