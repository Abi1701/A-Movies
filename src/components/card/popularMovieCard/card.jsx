import * as React from "react";
import styled from "./card.module.scss";
import { getMovieNowPlaying } from "../../../services/product.services";
import { Link } from "react-router-dom";

export default function CardNowPlayingMovie() {
	const [nowPlayingMovie, setNowPlayingMovie] = React.useState([]);
	React.useEffect(() => {
		getMovieNowPlaying().then((results) => {
			setNowPlayingMovie(results);
		});
	}, []);
	return nowPlayingMovie.slice(0, 10).map((movie, i) => {
		return (
			<Link to={`/detailspage/${movie.id}`}>
				{" "}
				<div className={styled.movieCard} key={i}>
					<img
						className={styled.cardImage}
						src={`${process.env.REACT_APP_BASE_IMGURL}/${movie.poster_path}`}
						alt="john wick"
					/>
					<div className={styled.movieTittle}>
						<h1 className={styled.movieTittleKet}>
							{movie.title.substring(0, 20)} ...
						</h1>
						<h5 className={styled.movieTittleDur}>{movie.vote_average}</h5>
					</div>
				</div>
			</Link>
		);
	});
}
