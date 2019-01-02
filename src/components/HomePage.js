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
                className="home__item"
                to={!!item.name ? `/tv/${item.id}` : `/movie/${item.id}`}
                key={item.id}
            >
                <div>
                    <img
                        className="home__item-img"
                        src={`https://image.tmdb.org/t/p/w342${item.backdrop_path}`}
                    />
                    <p className="home__item-name">{item.title || item.name}</p>
                </div>
            </Link>
        )
    }
    render() {
        return (
            <div className="home content-container">
                <div className="home__section">
                    <div>
                        <h3 className="home__subheading">In Theaters</h3>
                        <div className="home__subsection">
                            {this.props.movs.map(mov => this.renderItems(mov))}
                        </div>
                    </div>
                    <div>
                        <h3 className="home__subheading">On TV</h3>
                        <div className="home__subsection">
                            {this.props.shows.map(show => this.renderItems(show))}
                        </div>
                    </div>
                </div>
                <h2 className="home__heading">Trending</h2>
                <div className="home__section">
                    <div>
                        <h3 className="home__subheading">Movies</h3>
                        <div className="home__subsection">
                            {this.props.trendingMovies.map(mov => this.renderItems(mov))}
                        </div>
                    </div>
                    <div>
                        <h3 className="home__subheading">Shows</h3>
                        <div className="home__subsection">
                            {this.props.trendingShows.map(show => this.renderItems(show))}
                        </div>
                    </div>
                </div>
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