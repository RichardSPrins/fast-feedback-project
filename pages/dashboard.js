import { useAuth } from '@/lib/auth'

import FreePlan from '@/components/Dashboard/FreePlan/FreePlan'

const Dashboard = () => {
  const auth = useAuth()
  if(!auth.user){
    return <>Loading...</>
  } 
  return (
    <>
      {auth?.user && <FreePlan />}
    </>
  )
}

export default Dashboard