import { getAllFeedback, getAllSites } from "@/lib/db-admin"
import Feedback from '@/components/Dashboard/PaidPlan/Feedback'

export async function getStaticProps(ctx) {
  const siteId = ctx.params.siteId
  const feedback = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback
    }
  }
}

export async function getStaticPaths() {
  const sites = await getAllSites()
  const paths = sites.map(site => ({
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
  return initialFeedback.map(feedback => {
    return (
      <Feedback key={feedback.id} {...feedback}/>
    )
  })
}

export default SiteFeedback