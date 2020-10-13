import React, { useEffect } from 'react'
import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/core'

import { useAuth } from '@/lib/auth'

const DashboardContainer = ({children}) => {
  const auth = useAuth()
  useEffect(() => {
    console.log(auth)
  }, [auth])
  return (
  <Flex flexDirection="column">
    <Flex
      justifyContent="space-between"
      backgroundColor="whiteAlpha.500"
      p={4}
    >
      <Stack isInline spacing={4} alignItems="center">
        <Icon name="logo" color="black" />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" src={auth?.user?.photoUrl}/>
      </Flex>
    </Flex>
    <Flex
      color="black"
      backgroundColor="blackAlpha.50"
      alignItems="center"
      justifyContent="flex-start"
      p={8}
      height="100%"
    >
      <Flex
        ml="auto"
        mr="auto"
        maxWidth="800px"
        alignItems="center"
        width="100%"
        justifyContent="center"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites </BreadcrumbLink>
          </BreadcrumbItem>
          <Heading>Sites</Heading>
        </Breadcrumb>
        {children}
      </Flex>
    </Flex>
  </Flex>
)}
export default DashboardContainer
