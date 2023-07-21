import React from "react";
import styled from "./mainPage.module.scss";
import Header from "../../components/header/header";
import Border from "../../assets/border.svg";
import { LinkedIn } from "@mui/icons-material";
import CardNowPlayingMovie from "../../components/card/popularMovieCard/card";
import UpComingCard from "../../components/card/upcomingMovieCard/upcomingCard";
import DescMovie from "../../components/card/descMovie/descMovie";
import MainPageContent from "../../components/content/mainPageContent";
import { Link } from "react-router-dom";

export default function MainPage() {
	const [active, setActive] = React.useState("Movie");
	return (
		<>
			<section className={styled.mainPage}>
				<Header />
				<div className={styled.mainPageContainer}>
					<MainPageContent />
				</div>
			</section>
			<section className={styled.subMainPage}>
				<div className={styled.subMainPageContainer}>
					<h1 className={styled.tittlePage}>New this week!</h1>
					<div className={styled.categoryContainer}>
						<button
							onClick={() => setActive("Movie")}
							className={styled.buttonCat}>
							All Films
						</button>
						<button
							onClick={() => setActive("UpcomingMovies")}
							className={styled.buttonCat}>
							Upcoming Movies
						</button>
						<button
							onClick={() => setActive("Movie")}
							className={styled.buttonCat}>
							Now Playing Movies
						</button>
					</div>
					<img className={styled.borderPage} src={Border} alt="border" />
					<div className={styled.movieList}>
						{active === "Movie" && <CardNowPlayingMovie />}
						{active === "UpcomingMovies" && <UpComingCard />}
					</div>
				</div>
			</section>
			<section className={styled.thirdMainPage}>
				<div className={styled.thirdPageContainer}>
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
						<h1 className={styled.footerIndex}>MNA Cinema</h1>
					</div>
					<div className={styled.footerOption}>
						<Link to={"/"}>
							<p className={styled.footerItems}>HOME</p>
						</Link>
						<Link to={"/movie"}>
							<p className={styled.footerItems}>MOVIES</p>
						</Link>
						<Link
							to={
								"https://www.linkedin.com/in/muhammad-nabil-amran-2ab996225/"
							}>
							<LinkedIn
								className={styled.footerItems}
								sx={{
									color: "#E4DCCF",
								}}
							/>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
