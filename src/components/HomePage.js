import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetMoviesPlaying, startGetTrendingMovies } from '../actions/movies'
import { startGetShowsAiring, startGetTrendingShows } from '../actions/shows'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(startGetMoviesPlaying())
        this.props.dispatch(startGetShowsAiring())
        this.props.dispatch(startGetTrendingMovies())
        this.props.dispatch(startGetTrendingShows())
    }
    renderItems = (item) => {
        return (
            <Link
                to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}
                key={item.id}
            >
                <div>
                    <img src={`https://image.tmdb.org/t/p/w342${item.backdrop_path}`} />
                    <p>{item.title || item.name}</p>
                </div>
            </Link>
        )
    }
    render() {
        return (
            <div>
                <h3>In Theaters</h3>
                {this.props.movs.map(mov => this.renderItems(mov))}
                <h3>On TV</h3>
                {this.props.shows.map(show => this.renderItems(show))}
                <h3>Trending</h3>
                <h6>Movies</h6>
                {this.props.trendingMovies.map(mov => this.renderItems(mov))}
                <h6>Shows</h6>
                {this.props.trendingShows.map(show => this.renderItems(show))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movs: state.movies,
    shows: state.shows,
    trendingMovies: state.trendingMovies,
    trendingShows: state.trendingShows
})

export default connect(mapStateToProps)(HomePage)