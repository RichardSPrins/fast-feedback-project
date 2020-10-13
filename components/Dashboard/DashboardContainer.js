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

const DashboardContainer = ({ children }) => {
  const auth = useAuth()
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
          <Icon name="logo" color="black" size="24px"/>
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth?.user?.photoUrl || auth?.user?.photoURL} />
        </Flex>
      </Flex>
      <Flex
        color="black"
        backgroundColor="blackAlpha.50"
        // alignItems="center"
        justifyContent="flex-start"
        p={8}
        height="100vh"
      >
        <Flex
          direction="column"
          ml="auto"
          mr="auto"
          maxWidth="800px"
          // alignItems="center"
          width="100%"
          // justifyContent="center"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>My Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
export default DashboardContainer
