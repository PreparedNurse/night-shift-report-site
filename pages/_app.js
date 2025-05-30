import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { Global, css } from "@emotion/react";

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

const publicPages = ["/", "/sign-in", "/sign-up"];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
