import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Flex,
  Icon,
  Link,
  Button,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/core'

import { useAuth } from '@/lib/auth'
import AddSiteModal from './PaidPlan/AddSiteModal'

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
          <Link>Feedback</Link>
          <Link>Sites</Link>
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
        height="100vh"
      >
        <Flex
          direction="column"
          ml="auto"
          mr="auto"
          maxWidth="800px"
          width="100%"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={4}>My Sites</Heading>
            <AddSiteModal>+ Add a Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
export default DashboardContainer
