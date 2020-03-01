import React from 'react';
import '../../styles/tailwind.css'
import MovieTag from './show-tags'
import MovieScore from '../../utils/movieScores'

const MovieByID = (props) => {
    return (
        <div>
            <div className="container8 p-8">
                <div className="box-border border-4 rounded-lg">
                    <div className="h-full w-full">
                        <div className="pt-4 pr-8 pl-8 text-4xl">{props.title}</div>
                        <div className="flex">
                            <div className="flex-2 pl-8 pb-8">
                                <div className="box-content h-custom w-custom bg-gray-200 rounded-lg shadow-lg">
                                    <img className="overflow-hidden rounded-lg object-fill h-full w-full" src={(`https://image.tmdb.org/t/p/w400${props.poster_path}`)} alt={(`${props.title} poster`)} key={props.id} />
                                </div>
                            </div>
                            <div className="flex-1 pl-8 pr-8">
                                <div className="inline-flex">
                                    <MovieTag {...props.genres} />
                                </div>
                                <p className="w-auto">{props.overview}</p>
                                <p className="pt-4 font-bold text-sm text-gray-400 text-transform: uppercase">{props.status} / {props.year_release} / {props.runtime} Min.</p>
                                <MovieScore score={props.vote_average} />
                                <div className="pt-4">
                                    <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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