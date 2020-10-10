import Head from 'next/head'
import { useAuth } from '../lib/auth'
import { Button, Heading, Text } from "@chakra-ui/core";

export default function Home() {
  const auth = useAuth()
  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>
          Fast Feedback
        </Heading>
        <Text><pre>{JSON.stringify(auth?.user, null, 4)}</pre></Text>
        {!auth?.user && <Button onClick={e => auth.signinWithGitHub()}>Sign In</Button>}

        {auth?.user && <Button onClick={e => auth.signout()}>Sign out</Button>}

      </main>
    </div>
  )
}
