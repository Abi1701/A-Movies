import React from "react";
import { Navigate } from "react-router-dom";
import MainPage from "../page/mainPage/mainPage";
import Layout from "../page/layout/layout";
import LayoutOther from "../page/layout/layoutOther";

const Router = (loggedIn) => {
	return [
		{
			path: "/",
			element: <MainPage />,
		},
	];
};
export default Router;
