import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar() {
	const [genres, setGenres] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const results = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US')
				setGenres(results.data.genres)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [genres])

	return (
		genres.map(item => (
			<div>
				<div className="transform mb-2 hover:text-red-600 hover:translate-x-4 ease-out font font-sans transition duration-300 " key={item.id}>{item.name}</div>
			</div>
		))
	);
}


export default Navbar