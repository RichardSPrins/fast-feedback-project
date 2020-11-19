import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
  useDisclosure
} from '@chakra-ui/core';

import { createSite } from '@/lib/firestoreDb';
import { useAuth } from '@/lib/auth';
import fetcher from 'utils/fetcher';

const AddSiteModal = ({ children }) => {
  const { data, error } = useSWR('/api/sites', fetcher)

  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onCreateSite = ({ name, url }) => {
    try {
      const newSite = {
        authorId: auth.user.uid,
        createdAt: new Date().toISOString(),
        name,
        url,
        settings: {
          icons: true,
          timestamp: true,
          ratings: false
        }
      };

      createSite(newSite);
      toast({
        position: 'top-right',
        title: 'Success!',
        description: "We've added your site.",
        status: 'success',
        duration: 2000,
        isClosable: true
      });
      mutate(['/api/sites', auth.user.xa || auth.user.token],
        async (data) => {
          return { sites: [newSite, ...data.sites] }
        },
        false
      );
      onClose();
    } catch (error) {
      toast({
        position: 'top-right',
        title: 'Uh Oh!',
        description: "Something went wrong...",
        status: 'error',
        duration: 2000,
        isClosable: true
      })
      onClose();
    }
  };

  return (
    <>
      <Button
        id="add-site-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                id="site-input"
                placeholder="My site"
                name="name"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                id="link-input"
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              id="create-site-button"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;