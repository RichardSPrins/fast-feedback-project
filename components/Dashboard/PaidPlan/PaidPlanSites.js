import React from 'react'
import {
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/core'

import DashboardContainer from '@components/Dashboard/DashboardContainer.js'


const PaidPlanSites = (props) => {
  return props.sites.length < 0 ? (
    <DashboardContainer>
      <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
        <Heading>You haven't added any sites.</Heading>
        <Text>Welcome 👋 Let's get started.</Text>
        <Button>Add your first site</Button>
      </Box>
    </DashboardContainer>
  ) : (<DashboardContainer>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading>Here are your sites</Heading>
      <Text>Welcome 👋 Let's get started.</Text>
      <Button>Add your first site</Button>
    </Box>
  </DashboardContainer>)
}
export default PaidPlanSites
