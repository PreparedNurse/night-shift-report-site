import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your user verification logic here
        // For now, we'll use a mock user
        const mockUser = {
          id: 1,
          email: 'admin@example.com',
          password: await bcrypt.hash('password123', 10),
          name: 'Admin User'
        };

        if (credentials.email === mockUser.email &&
            await bcrypt.compare(credentials.password, mockUser.password)) {
          return {
            id: mockUser.id,
            email: mockUser.email,
            name: mockUser.name
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    }
  }
};

export default NextAuth(authOptions); 