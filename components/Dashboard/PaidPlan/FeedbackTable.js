import React from 'react';
import { Box, Code, Skeleton, Switch } from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
// import NextLink from 'next/link';
// import { format, parseISO } from 'date-fns';
import DeleteFeedbackAlertModal from '@/components/Dashboard/PaidPlan/DeleteFeedbackAlertModal'

const FeedbackTable = ({ allFeedback }) => {
  console.log(allFeedback)
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map(feedback => {
          return (
            <Box as="tr" key={feedback.id}>
              <Td fontWeight="medium">
                <p>{feedback.author}</p>
              </Td>
              <Td>
                <p>{feedback.text}</p>
              </Td>
              <Td>
                <Code>{'/'}</Code>
              </Td>
              <Td>
                <Switch defaultIsChecked={feedback.status === 'active'} color="green" />
              </Td>
              <Td>
                <DeleteFeedbackAlertModal id={feedback.id} />
              </Td>
            </Box>
          )
        })}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;