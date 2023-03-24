import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Login/Login'
import Create from '../Create/Create'
import Homescreen from '../Homescreen/Homescreen'


const Allroutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Homescreen />
        },
        {
            path: "/signup",
            element: <Create />
        },
        {
            path: "/login",
            element: <Login />
        },
          
        
        
    ])
  return element
}

export default Allroutes