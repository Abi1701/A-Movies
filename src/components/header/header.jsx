import React from "react";
import styled from "./header.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<nav className={styled.navHeader}>
			<ul>
				<li>
					<Link to={"/"}>
						<img className={styled.imgLogo} src={Logo} alt="logo" />
					</Link>
				</li>
				<li>
					<Link to={"/movie"}>
						<p>Movies</p>
					</Link>
				</li>
				<li>
					<Link>
						<p>TV Series</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
