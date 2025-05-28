import { ClerkProvider } from '@clerk/nextjs';
import { Global, css } from '@emotion/react';

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
  return (
    <ClerkProvider {...pageProps}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp; 