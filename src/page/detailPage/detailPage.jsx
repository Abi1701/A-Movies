import * as React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "./detailPage.module.scss";
import Header from "../../components/header/header";

const APIKEY = process.env.REACT_APP_APIKEY;
const BASEURL = process.env.REACT_APP_BASE_URL;

export default function DetailPage() {
	const [movie, setMovie] = React.useState({});
	const { id } = useParams();

	React.useEffect(() => {
		const getMovie = async () => {
			const result = await fetch(`${BASEURL}/movie/${id}?api_key=${APIKEY}`);
			const data = await result.json();
			setMovie(data);
			console.log(result);
		};
		getMovie();
	}, [id]);
	console.log(movie);

	return (
		<section className={styled.detailSection}>
			<div className={styled.headerContainer}>
				<Header />
			</div>
			<div className={styled.breadCrumbs}>
				<Link to={"/"}>
					<p className={styled.breadCrumbsContent}>Home</p>
				</Link>
				<p className={styled.breadCrumbsContent}>/</p>
				<Link to={"/movie"}>
					<p className={styled.breadCrumbsContent}>Movie</p>
				</Link>
				<p className={styled.breadCrumbsContent}>/</p>
				<p className={styled.breadCrumbsContent}>{movie.title}</p>
			</div>
			<div className={styled.detailContainer}>
				<div className={styled.imageContainer}>
					<img
						className={styled.imageMovie}
						src={`${process.env.REACT_APP_BASE_IMGURL}/${movie.poster_path}`}
						alt=""
					/>
				</div>
				<div className={styled.contentContainer}>
					<h1>{movie.original_title}</h1>
					<h3>Released Date : {movie.release_date}</h3>
					<h3>{movie.runtime} Minutes</h3>
					<h3>{movie.vote_average} / 10</h3>
					<p>
						Description: <br />
						{movie.overview}
					</p>
					<Link to={`${movie.homepage}`}>
						{" "}
						<button className={styled.buttonPage}>
							<span className={styled.buttonPageContent}>Film Page</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
