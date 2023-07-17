import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Router from "./routes/index";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		const token = localStorage.getItem("_q");
		if (token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, []);
	const routing = useRoutes(Router(isAuth));
	return (
		<>
			<div>{routing}</div>
		</>
	);
}

export default App;
