import * as React from "react";
import styled from "./upcomingCard.module.scss";
import { getMovieUpcoming } from "../../../services/product.services";
import { Link } from "react-router-dom";
export default function UpComingCard() {
	const [upComingMovie, setUpComingMovie] = React.useState([]);

	React.useEffect(() => {
		getMovieUpcoming().then((results) => {
			setUpComingMovie(results);
		});
	}, []);
	return upComingMovie.slice(0, 10).map((movie, i) => {
		return (
			<Link to={`/detailspage/${movie.id}`}>
				<div className={styled.movieCard} key={i}>
					<img
						className={styled.cardImage}
						src={`${process.env.REACT_APP_BASE_IMGURL}/${movie.poster_path}`}
						alt="john wick"
					/>
					<div className={styled.movieTittle}>
						<h1 className={styled.movieTittleKet}>{movie.title}</h1>
						<h5 className={styled.movieTittleDur}>{movie.vote_average}</h5>
					</div>
				</div>
			</Link>
		);
	});
}
