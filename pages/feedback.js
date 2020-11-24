import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

import FreePlan from '@/components/Dashboard/FreePlan/FreePlan'
import PaidPlanEmpty from '@/components/Dashboard/PaidPlan/PaidPlanEmpty.js'
import FeedbackTableSkeleton from '@/components/Dashboard/PaidPlan/FeedbackTableSkeleton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer.js'
import fetcher from '@/utils/fetcher'
import FeedbackTable from '@/components/Dashboard/PaidPlan/FeedbackTable'
import FeedbackTableHeader from '@/components/Dashboard/PaidPlan/FeedbackTableHeader';



const Feedback = () => {
  const auth = useAuth()
  const { data, error } = useSWR(auth?.user ? ['/api/feedback', auth.user.xa || auth.user.token] : null, fetcher)

  console.log('here')
  if (!data) {
    return (
      <DashboardContainer>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardContainer>
    )
  }

  return (
    <DashboardContainer>
      <FeedbackTableHeader />
      {data.feedback.length > 0 ? <FeedbackTable allFeedback={data.feedback} /> : <PaidPlanEmpty />}
    </DashboardContainer>
  )
}

export default Feedback