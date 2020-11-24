import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Flex,
  Icon,
  Link,
  Button,
  Stack,
  Avatar
} from '@chakra-ui/core'

import NextLink from 'next/link'

import { useAuth } from '@/lib/auth'

const DashboardContainer = ({ children }) => {
  const router = useRouter()
  const auth = useAuth()
  const handleLogout = (e) => {
    e.preventDefault()
    auth.signout()
    router.push('/')
  }


  useEffect(() => {
    console.log(auth?.user)
  }, [])
  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="whiteAlpha.500"
        py={4}
        px={8}
      >
        <Stack isInline spacing={4} alignItems="center">
          <Icon name="logo" color="black" size="24px" />
          <NextLink href="/feedback" passHref><Link style={{ marginRight: '1rem' }}>Feedback</Link></NextLink>
          <NextLink href="/sites" passHref><Link style={{ marginRight: '1rem' }}>Sites</Link></NextLink>
        </Stack>
        <Flex alignItems="center">
          {auth?.user && <Button variant="ghost" onClick={handleLogout} mr={4}>Log Out</Button>}
          <Avatar size="sm" src={auth?.user?.photoUrl || auth?.user?.photoURL} />
        </Flex>
      </Flex>
      <Flex
        color="black"
        backgroundColor="blackAlpha.50"
        justifyContent="flex-start"
        p={8}
        height="100%"
        minHeight="100vh"
      >
        <Flex
          direction="column"
          ml="auto"
          mr="auto"
          maxWidth="800px"
          width="100%"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
export default DashboardContainer
