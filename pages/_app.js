import { Global, css } from '@emotion/react';
import { ClerkProvider } from '@clerk/nextjs';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #000000;
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return <div>Missing Publishable Key</div>;
  }
  
  return (
    <ClerkProvider {...pageProps}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
