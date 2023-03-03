import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashBoard from "../DashBoardFolder/DashBoard/DashBoard";
import Savings from "../Savings/Savings";
import DashBoardScreen from "../DashBoardScreen/DashBoardScreen";
import HomeScreen from "../HomeScreen/HomeScreen";


const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/dashboard",
			element: <DashBoardScreen/>
		},
        {
            path:"/savings",
            element:<Savings/>
        }
		
	]);
	return element;
};

export default AllRoutes;
	