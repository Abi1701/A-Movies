import * as React from "react";
import styled from "./moviePage.module.scss";
import { getMovieNowPlaying, getSearch } from "../../services/product.services";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

export default function MoviePage() {
	const [nowPlayingMovie, setNowPlayingMovie] = React.useState([]);
	React.useEffect(() => {
		getMovieNowPlaying().then((results) => {
			setNowPlayingMovie(results);
		});
	}, []);

	const search = async (q) => {
		if (q.length > 3) {
			const query = await getSearch(q);
			setNowPlayingMovie(query);
		}
	};
	return (
		<div className={styled.moviePage}>
			<Header />
			<div className={styled.navigationBar}>
				<input
					className={styled.input}
					type="text"
					name=""
					id=""
					placeholder="Search Movie Here"
					onChange={({ target }) => search(target.value)}
				/>
				<button className={styled.buttonCat}>All Films</button>
				<button className={styled.buttonCat}>Series</button>
				<button className={styled.buttonCat}>Movies</button>
				<button className={styled.buttonCat}>TV Shows</button>
			</div>
			<div className={styled.movieContainer}>
				{nowPlayingMovie.slice(0, 10).map((movie, i) => {
					return (
						<Link to={`/detailspage/${movie.id}`}>
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
									<h5 className={styled.movieTittleDur}>
										{movie.vote_average}
									</h5>
								</div>
							</div>
						</Link>
					);
				})}
				;
			</div>
		</div>
	);
}
