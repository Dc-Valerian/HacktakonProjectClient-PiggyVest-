import React from "react";
import { useRoutes } from "react-router-dom";
import Account from "../Account/Account";
import Accountdashboard from "../DashBoard/Accountdashboard";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Dashboard from "../DashBoard/Dashboard";
// import SavingsDashboard from "../DashBoard/SavingsDashboard";
import HomeScreen from "../HomeScreen/HomeScreen";
import Invest from "../Invest/Invest";
import Investdashboard from "../DashBoard/Investdashboard";
import Savings from "../SavingsDashboard/Savings";
import Piggybank from "../SavingsDashboard/Piggybank";
import Flex from "../SavingsDashboard/Flex";
import Safelock from "../SavingsDashboard/Safelock";
import Target from "../SavingsDashboard/Target";


const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <HomeScreen/>
		},
		{
			path: "/register",
			element: <Register/>
		},
		{
			path:"/login",
			element:<Login/>
		},
		{
			path:"/dashboard",
			element: <Dashboard/>
		},
		{
			path:"/savings",
			children:[
				{
					index:true,
					element:<Savings/>
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
					path:"savings/safelock",
					element:<Safelock/>
				},
				{
					path:"/savings/target",
					element:<Target/>
				}

			]
		}
	]);
	return element;
};

export default AllRoutes;
	