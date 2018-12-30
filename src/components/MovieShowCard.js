import React from 'react'
import { Link } from 'react-router-dom'

const MovieShowCard = ({ item }) => (
    <div>
        <Link to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}><img src={`https://image.tmdb.org/t/p/w154${item.poster_path}`} /></Link>
        <div>
            <h1><Link to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}>{item.title || item.name}</Link></h1>
            <h3>{item.vote_average}</h3>
            <h4>{item.tagline}</h4>
            <h4>{item.release_date}</h4>
            <h4>{item.overview}</h4>
            <Link to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}>More Info</Link>
        </div>
    </div>
)

export default MovieShowCard