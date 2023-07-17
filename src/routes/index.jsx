import React from "react";
import MainPage from "../page/mainPage/mainPage";

const Router = () => {
	return [
		{
			path: "/",
			element: <MainPage />,
		},
	];
};
export default Router;
