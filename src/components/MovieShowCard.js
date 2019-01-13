import React from 'react'
import { Link } from 'react-router-dom'

const MovieShowCard = ({ item }) => (
    <div className="movie-show-card">
        <div className="movie-show-card__image">
            <Link
                to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}
            >
                <img
                    src={!!item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` : '/images/placeholder.jpg'}
                />
            </Link>
        </div>
        <div className="movie-show-card__description">
            <h3 className="description__title"><Link to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}>{item.title || item.name}</Link></h3>
            <div className="description__subcontainer">
                <h4 className="description__date">{item.release_date}</h4>
                <h3 className="description__average">{Math.round(item.vote_average * 10)} %</h3>
            </div>
            <h4 className="description__overview">{item.overview}</h4>
            <h5 className="description__info">
                <Link
                    to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}
                >
                    More Info
            </Link>
            </h5>
        </div>
    </div>
)

export default MovieShowCard