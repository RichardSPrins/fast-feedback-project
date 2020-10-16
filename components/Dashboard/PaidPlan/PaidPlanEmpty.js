import React from 'react'
import {
  Heading,
  Flex,
  Text,
  Button
} from '@chakra-ui/core'

import AddSiteModal from './AddSiteModal'


const PaidPlanEmpty = (props) => {
  return (
    <>
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
          <AddSiteModal>Add your First Site</AddSiteModal>
        </Flex>
    </>
  )
}
export default PaidPlanEmpty
