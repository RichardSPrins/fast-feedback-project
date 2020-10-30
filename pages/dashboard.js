import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

import FreePlan from '@/components/Dashboard/FreePlan/FreePlan'
import PaidPlanEmpty from '@/components/Dashboard/PaidPlan/PaidPlanEmpty.js'
import SiteTableSkeleton from '@/components/Dashboard/PaidPlan/SiteTableSkeleton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer.js'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/Dashboard/PaidPlan/SiteTable'


const Dashboard = () => {
  const auth = useAuth()
  const { data, error } = useSWR(auth?.user ? ['/api/sites', auth.user.xa || auth.user.token] : null, fetcher)
  // console.log(auth.user)

  if (!data) {
    return (
      <DashboardContainer>
        <SiteTableSkeleton />
      </DashboardContainer>
    )
  }

  // if (!auth.user) {
  //   return (
  //     <DashboardContainer>
  //       <SiteTableSkeleton />
  //     </DashboardContainer>
  //   )
  // }
  return (
    <DashboardContainer>
      {data.sites.length > 0 ? <SiteTable sites={data.sites} /> : <PaidPlanEmpty />}
    </DashboardContainer>
  )
}

export default Dashboard