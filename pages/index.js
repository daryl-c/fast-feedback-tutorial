import Head from 'next/head';
import { useAuth } from '@/lib/auth';

import { Heading, Button, Text, Code } from '@chakra-ui/core';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Create Next App | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current User: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={() => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
