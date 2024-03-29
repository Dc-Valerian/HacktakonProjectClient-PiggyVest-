import React from 'react'
import { useRoutes } from 'react-router-dom'
import Account from '../DashBoard/Acount/Account'
import HomeDashBoard from '../DashBoard/Home/HomeDashBoard'
import Investify from '../DashBoard/Investify/Investify'
import Flex from '../DashBoard/Savings/Flex'
import Piggybank from '../DashBoard/Savings/Piggybank'
import SavingsDashboard from '../DashBoard/Savings/SavingsDashBoard'
import Target from '../DashBoard/Savings/Target'
import SaveLock from "../DashBoard/Savings/SaveLock"

const Dashboard = () => {

  const element = useRoutes([
    {
      path:"/",
      element:<HomeDashBoard/>
    },{
      path:"/account",
      element:<Account/>,
    },
    {
      path:"/invest",
      element:<Investify/>
    },
    {
      path:"/savings",
      children:[
        {
          index:true,
          element:<SavingsDashboard/>
        },
        {
          path:"/savings/piggybank",
          element:<Piggybank/>
        },
        {
          path:"/savings/flex",
          element:<Flex/>
        },
        {
          path:"/savings/target",
          element:<Target/>
        },
        {
          path:"/savings/safelock",
          element:<SaveLock/>
        }
      ]
    }
  ])

  return element
}

export default Dashboard