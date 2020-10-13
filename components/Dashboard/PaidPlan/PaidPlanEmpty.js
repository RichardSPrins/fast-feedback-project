import React from 'react'
import {
  Heading,
  Flex,
  Text,
  Button
} from '@chakra-ui/core'

import DashboardContainer from '@/components/Dashboard/DashboardContainer.js'
import AddSiteModal from './AddSiteModal'


const PaidPlanSites = (props) => {
  return (
    <>
      <DashboardContainer>
        <Flex
          width="100%"
          backgroundColor="white"
          borderRadius="8px"
          p={16}
          justify="center"
          direction="column"
          align="center"
        >
          <Heading size="lg" mb={2}>Here are your sites</Heading>
          <Text mb={4}>Welcome 👋 Let's get started.</Text>
          {/* <Button fontWeight="medium" maxW="200px" bg="gray.900" color="white">Add your first site</Button> */}
          <AddSiteModal />
        </Flex>
      </DashboardContainer>
    </>
  )
}
export default PaidPlanSites
