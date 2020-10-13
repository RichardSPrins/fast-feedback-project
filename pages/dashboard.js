import { useAuth } from '@/lib/auth'

import FreePlan from '@/components/Dashboard/FreePlan/FreePlan'
import PaidPlanEmpty from '@/components/Dashboard/PaidPlan/PaidPlanEmpty.js'

const Dashboard = () => {
  const auth = useAuth()
  if(!auth.user){
    return <>Loading...</>
  } 
  return (
    <>
      {auth?.user && <PaidPlanEmpty />}
    </>
  )
}

export default Dashboard