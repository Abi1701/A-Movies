import axios from "axios";

const APIKEY = process.env.REACT_APP_APIKEY;
const BASEURL = process.env.REACT_APP_BASE_URL;

export const getMovieNowPlaying = async () => {
	const movie = await axios.get(
		`${BASEURL}/movie/now_playing?api_key=${APIKEY}`
	);
	return movie.data.results;
};

export const getMovieUpcoming = async () => {
	const upcomingMovie = await axios.get(
		`${BASEURL}/movie/upcoming?api_key=${APIKEY}`
	);
	return upcomingMovie.data.results;
};

// export const getSearch = async (q) => {
// 	const search = await axios.get(q);
// 	return;
// };
