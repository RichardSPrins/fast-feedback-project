import React from 'react';
import { Box, Skeleton } from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

const SiteTable = ({ sites }) => {
  console.log(sites)
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map(site => {
          return (
            <Box as="tr" key={site.url}>
              <Td fontWeight="medium">
                <p>{site.name}</p>
              </Td>
              <Td>
                <p>{site.url}</p>
              </Td>
              <Td>
                <Link href="#"><a>View Feedback</a></Link>
              </Td>
              <Td>
                <p>{format(parseISO(site.createdAt), 'PPpp')}</p>
              </Td>
            </Box>
          )
        })}
      </tbody>
    </Table>
  );
};

export default SiteTable;