import React from "react";
import styled from "./mainPage.module.scss";
import Header from "../../components/header/header";
import Border from "../../assets/border.svg";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import CardNowPlayingMovie from "../../components/card/popularMovieCard/card";
import UpComingCard from "../../components/card/upcomingMovieCard/upcomingCard";
import DescMovie from "../../components/card/descMovie/descMovie";

export default function MainPage() {
	return (
		<>
			<section className={styled.mainPage}>
				<Header />
				<div className={styled.mainPageContainer}>
					<div className={styled.mainPageContent}>
						<h1 className={styled.tittle}>THE</h1>
						<h2 className={styled.subTittle}>BATMAN</h2>
						<p className={styled.paragraf}>
							On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by a
							serial killer calling himself the Riddler. Billionaire Bruce
							Wayne, who has operated for two years as the vigilante Batman,
							investigates alongside the Gotham City Police Department (GCPD).
							Lieutenant James Gordon discovers that the Riddler left a message
							for Batman, but commissioner Pete Savage berates him for allowing
							a vigilante to enter the crime scene and forces Batman to leave.
							The Riddler kills Savage and leaves another message for Batman.
						</p>
					</div>
					<div className={styled.mainPageVideo}></div>
				</div>
			</section>
			<section className={styled.subMainPage}>
				<div className={styled.subMainPageContainer}>
					<h1 className={styled.tittlePage}>New this week!</h1>
					<div className={styled.categoryContainer}>
						<button className={styled.buttonCat}>All Films</button>
						<button className={styled.buttonCat}>Series</button>
						<button className={styled.buttonCat}>Movies</button>
						<button className={styled.buttonCat}>TV Shows</button>
					</div>
					<img className={styled.borderPage} src={Border} alt="border" />
					<div className={styled.movieList}>
						<CardNowPlayingMovie />
					</div>
				</div>
			</section>
			<section className={styled.thirdMainPage}>
				<div className={styled.thirdPageContainer}>
					<h1 className={styled.tittlePage}>Coming Soon!</h1>
					<img className={styled.borderPage} src={Border} alt="border" />
					<div className={styled.movieList}>
						<UpComingCard />
					</div>
					<div className={styled.newsContainer}>
						<h1>What's New?</h1>
						<div className={styled.newsCardContainer}>
							<DescMovie />
						</div>
					</div>
				</div>
			</section>
			<footer className={styled.footer}>
				<div className={styled.footerContainer}>
					<div className={styled.footerContentIndex}>
						<h1 className={styled.footerIndex}>
							MNA <br /> Cinema
						</h1>
					</div>
					<div className={styled.footerContentSocial}>
						<div className={styled.footerOption}>
							<a href="/">HOME</a>
							<a href="/">MOVIES</a>
							<a href="/">TV SHOWS</a>
							<a href="/">TV SERIES</a>
						</div>
					</div>
					<div className={styled.footerContentIcon}>
						<Twitter sx={{ color: "#E4DCCF" }} />
						<Facebook sx={{ color: "#E4DCCF" }} />
						<LinkedIn sx={{ color: "#E4DCCF" }} />
					</div>
				</div>
			</footer>
		</>
	);
}
