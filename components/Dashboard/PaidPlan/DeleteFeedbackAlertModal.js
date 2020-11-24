import * as React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button
} from "@chakra-ui/core"

import { deleteFeedback } from '@/lib/firestoreDb'
import { useAuth } from '@/lib/auth'


import { mutate } from 'swr'

const DeleteFeedbackAlertModal = ({ id }) => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()
  const handleDeleteFeedback = () => {
    console.log(id)
    deleteFeedback(id)
    mutate(['/api/feedback', auth.user.xa || auth.user.token],
      async (data) => {
        const filteredFeedback = data.feedback.filter(el => el.id !== id)
        return { feedback: filteredFeedback }
      },
      false
    );
    onClose()
  }

  return (
    <>
      <IconButton
        aria-label="Delete Feedback"
        icon="delete"
        variant="ghost"
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button variantColor="red" onClick={handleDeleteFeedback} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteFeedbackAlertModal