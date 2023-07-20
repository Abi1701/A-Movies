import * as React from "react";
import styled from "./mainPageContent.module.scss";
import { getMovieNowPlaying } from "../../services/product.services";

export default function MainPageContent() {
	const [contentTitles, setContentTitles] = React.useState([]);
	React.useEffect(() => {
		getMovieNowPlaying().then((results) => {
			setContentTitles(results);
		});
	}, []);
	return contentTitles.slice(0, 1).map((content, i) => {
		return (
			<div key={i} className={styled.mainPageContent}>
				<div className={styled.contentLeft}>
					<h1 className={styled.tittle}>{content.title}</h1>
					<p className={styled.paragraf}>{content.overview}</p>
				</div>
				<img
					className={styled.cardImage}
					src={`${process.env.REACT_APP_BASE_IMGURL}/${content.poster_path}`}
					alt="poster"
				/>
			</div>
		);
	});
}
