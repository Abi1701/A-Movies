import * as React from "react";
import styled from "./descMovie.module.scss";
import { getMovieNowPlaying } from "../../../services/product.services";

export default function DescMovie() {
	const [popularMovies, setPopularMovies] = React.useState([]);
	React.useEffect(() => {
		getMovieNowPlaying().then((results) => {
			setPopularMovies(results);
		});
	}, []);
	console.log({ query: popularMovies });
	return popularMovies.slice(0, 3).map((movie, i) => {
		return (
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
					<h5 className={styled.movieTittleDur}>{movie.overview}</h5>
				</div>
			</div>
		);
	});
}
