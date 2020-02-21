import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import '../../styles/tailwind.css'
import MovieTag from './movie-tags'
import MovieScore from '../../utils/movieScores'

const MovieByID = () => {
    let { id } = useParams()
    const [movieDetail, setMovieDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const originResult = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=850c683da4d46367b8a14773ea9219a0&language=en-US`)
                const release_year = originResult.data.release_date.substring(0, 4)
                originResult.data['year_release'] = release_year
                setMovieDetail(originResult.data)
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        fetchData()
    }, [id])

    return (
        <div>
            <div className="container8 p-8">
                <div className="box-border border-4 rounded-lg">
                    <div className="h-full w-full">
                        <div className="pt-4 pr-8 pl-8 text-4xl">{movieDetail.title}</div>
                        <div className="flex">
                            <div className="flex-2 pl-8 pb-8">
                                <div className="box-content h-custom w-custom bg-gray-200 rounded-lg shadow-lg">
                                    <img className="overflow-hidden rounded-lg object-fill h-full w-full" src={(`https://image.tmdb.org/t/p/w400${movieDetail.poster_path}`)} alt={(`${movieDetail.title} poster`)} key={movieDetail.id} />
                                </div>
                            </div>
                            <div className="flex-1 pl-8 pr-8">
                                <div className="inline-flex">
                                    <MovieTag {...movieDetail.genres} />
                                </div>
                                <p className="w-auto">{movieDetail.overview}</p>
                                <p className="pt-4 font-bold text-sm text-gray-400 text-transform: uppercase">{movieDetail.status} / {movieDetail.year_release} / {movieDetail.runtime} Min.</p>
                                <MovieScore score={movieDetail.vote_average} />
                                <div className="pt-4">
                                    <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Watch Now
                                    </button>
                                    <span className="text-black font-bold py-2 px-4 rounded">+ Wishlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieByID