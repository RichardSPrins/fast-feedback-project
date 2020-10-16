import { useEffect } from 'react'
import { Button, Heading, Text, useColorMode, Icon, Code, Flex } from "@chakra-ui/core";
import Head from 'next/head'
import { Link } from 'next/link'


import { useAuth } from '@/lib/auth'
import FreePlan from '@/components/Dashboard/FreePlan/FreePlan';

export default function Home() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const auth = useAuth()
  useEffect(() => {
    console.log(auth)
  }, [auth])

  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Icon name="logo" size="64px" />
      {/* <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button> */}
      {!auth?.user && <Button size="sm" mt={4} onClick={e => auth.signinWithGitHub()}><Icon  name="github" /> {' '} Continue with GitHub</Button>}

      {auth?.user && <Button size="sm" mt={4} onClick={e => auth.signout()}>Sign out</Button>}
      {auth?.user && <Button as="a" href="/dashboard">Go to Dashboard</Button>}
    </Flex>
    
  )
}
