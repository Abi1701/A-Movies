import React from "react";
import MainPage from "../page/mainPage/mainPage";
import DetailPage from "../page/detailPage/detailPage";
import MoviePage from "../page/moviePage/moviePage";

const Router = () => {
	return [
		{
			path: "/",
			element: <MainPage />,
		},
		{
			path: "/detailspage/:id",
			element: <DetailPage />,
		},
		{
			path: "/movie",
			element: <MoviePage />,
		},
	];
};
export default Router;
