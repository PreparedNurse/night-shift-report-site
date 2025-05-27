import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from '@emotion/styled';

const MembersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const WelcomeText = styled.h1`
  color: #ff0000;
`;

const SignOutButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`;

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function MembersArea() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <MembersContainer>
      <Header>
        <WelcomeText>Welcome, {session.user.name}!</WelcomeText>
        <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton>
      </Header>
      <Content>
        <h2>Members Only Content</h2>
        <p>This is your exclusive members-only area. Here you can access special content and features.</p>
        {/* Add your members-only content here */}
      </Content>
    </MembersContainer>
  );
} 