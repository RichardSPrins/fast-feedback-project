import { useAuth } from '@/lib/auth'
import useSWR from 'swr'

import FreePlan from '@/components/Dashboard/FreePlan/FreePlan'
import PaidPlanEmpty from '@/components/Dashboard/PaidPlan/PaidPlanEmpty.js'
import SiteTableSkeleton from '@/components/Dashboard/PaidPlan/SiteTableSkeleton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer.js'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/Dashboard/PaidPlan/SiteTable'
import SiteTableHeader from '@/components/Dashboard/PaidPlan/SiteTableHeader'


const Sites = () => {
  const auth = useAuth()
  const { data, error } = useSWR(auth?.user ? ['/api/sites', auth.user.xa || auth.user.token] : null, fetcher)

  if (!data) {
    return (
      <DashboardContainer>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardContainer>
    )
  }

  return (
    <DashboardContainer>
      <SiteTableHeader />
      {data.sites.length > 0 ? <SiteTable sites={data.sites} /> : <PaidPlanEmpty />}
    </DashboardContainer>
  )
}

export default Sites