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
    render() {
        return (
            <div>
                <h3>In Theaters</h3>
                {this.props.movs.map(mov => <Link to={`/movie/${mov.id}`} key={mov.id}><p>{mov.title}</p></Link>)}
                <h3>On TV</h3>
                {this.props.shows.map(show => <Link to={`/tv/${show.id}`} key={show.id}><p>{show.name}</p></Link>)}
                <h3>Trending</h3>
                <h6>Movies</h6>
                {this.props.trendingMovies.map(mov => <Link to={`/movie/${mov.id}`} key={mov.id}><p>{mov.title}</p></Link>)}
                <h6>Shows</h6>
                {this.props.trendingShows.map(show => <Link to={`/tv/${show.id}`} key={show.id}><p>{show.name}</p></Link>)}
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