import React from "react";
import styled from "./header.module.scss";
import Logo from "../../assets/logo.png";

export default function Header() {
	return (
		<nav className={styled.navHeader}>
			<ul>
				<li>
					<img className={styled.imgLogo} src={Logo} alt="logo" />
				</li>
				<li>
					<a href="">Movies</a>
				</li>
				<li>
					<a href="">TV Show</a>
				</li>
				<li>
					<a href="">Series</a>
				</li>
			</ul>
		</nav>
	);
}
