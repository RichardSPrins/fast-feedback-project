import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/core'

import AddSiteModal from './AddSiteModal'

const SiteTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={4}>My Sites</Heading>
        <AddSiteModal>+ Add a Site</AddSiteModal>
      </Flex>
    </>
  )
}

export default SiteTableHeader