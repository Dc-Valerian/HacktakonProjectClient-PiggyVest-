import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Dashboard from "../DashBoard/Dashboard";
import SavingsDashboard from "../DashBoard/SavingsDashboard";
import HomeScreen from "../HomeScreen/HomeScreen";


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
			element:<SavingsDashboard/>
		}
	]);
	return element;
};

export default AllRoutes;
	