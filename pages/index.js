import { Button, Heading, Text, useColorMode, Icon, Code, Flex } from "@chakra-ui/core";
import Head from 'next/head'

import { useAuth } from '@/lib/auth'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const auth = useAuth()
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Icon name="logo" size="64px" />
      <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
      {!auth?.user && <Button size="sm" mt={4} onClick={e => auth.signinWithGitHub()}>Sign In</Button>}

      {auth?.user && <Button size="sm" mt={4} onClick={e => auth.signout()}>Sign out</Button>}
    </Flex>
  )
}
