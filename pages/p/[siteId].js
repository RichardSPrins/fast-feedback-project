import * as React from 'react'
import { getAllFeedback, getAllSites } from "@/lib/db-admin"
import Feedback from '@/components/Dashboard/PaidPlan/Feedback'
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/core'
import { useAuth } from "@/lib/auth"
import { useRouter } from 'next/router'
import { createFeedback } from '../../lib/firestoreDb'

export async function getStaticProps(ctx) {
  const siteId = ctx.params.siteId
  const { feedback } = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback,
      unstable_revalidate: 1
    }
  }
}

export async function getStaticPaths() {
  const { sites } = await getAllSites()
  console.log('sites', sites)
  const paths = sites && sites.map(site => ({
    params: {
      siteId: site.id.toString()
    }
  }))
  return {
    paths,
    fallback: false
  }
}

const SiteFeedback = ({ initialFeedback }) => {
  const [allFeedback, setAllFeedback] = React.useState(initialFeedback)
  const inputEl = React.useRef(null);
  const auth = useAuth();
  const router = useRouter();

  const onFormSubmit = (event) => {
    event.preventDefault()

    const { siteId } = router.query
    const newFeedback = {
      author: auth.user.name || auth.user.displayName,
      authorId: auth.user.uid,
      siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider || auth.user.providerData[0].providerId,
      status: 'pending'
    };

    setAllFeedback([newFeedback, ...allFeedback])
    createFeedback(newFeedback);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box
        as="form"
        onSubmit={onFormSubmit}
      >
        <FormControl my={8}>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input ref={inputEl} type="comment" id="comment" />
          <Button mt={2} type="submit" fontWeight="medium">Add a comment</Button>
        </FormControl>
      </Box>
      {
        allFeedback.map(feedback => {
          return (
            <Feedback key={feedback.id} {...feedback} />
          )
        })
      }
    </Box>
  )
}

export default SiteFeedback