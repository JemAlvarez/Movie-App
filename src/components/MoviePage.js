import React from 'react'
import { connect } from 'react-redux'
import { startGetMovieById, startGetMovieCast, startGetMovieRecommendation } from '../actions/movies'
import PersonCard from './PersonCard'
import RecommendationCard from './RecommendationCard'

class MoviePage extends React.Component {
    state = {
        genres: ''
    }
    componentWillMount() {
        this.props.dispatch(startGetMovieById(this.props.match.params.id))
        this.props.dispatch(startGetMovieCast(this.props.match.params.id))
        this.props.dispatch(startGetMovieRecommendation(this.props.match.params.id))
    }
    ifNull = (mov) => {
        return !mov ? '-' : mov
    }
    renderJSX = () => {
        if (!!this.props.movie) {
            const mov = this.props.movie
            setTimeout(() => {
                this.setState((state, props) => ({
                    genres: props.movie.genres.map(item => ` ${item.name}`).toString()
                }))
            }, 500);
            return (
                <div className="movie-show">
                    <div className="movie-show__main-container">
                        <div
                            style={!!mov.backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/w1280${mov.backdrop_path})` } : { backgroundImage: `url(/images/placeholder.jpg)` }}
                            className="movie-show__backdrop"
                        ></div>
                        <div className="content-container movie-show__main">
                            <img
                                className="movie-show__image"
                                src={!!mov.poster_path ? `https://image.tmdb.org/t/p/w300${mov.poster_path}` : '/images/placeholder.jpg'}
                            />
                            <div className="moive-show__description">
                                <h2 className="movie-show__title">{mov.title} <spam> ({this.ifNull(mov.tagline)})</spam></h2>
                                <h3 className="movie-show__genres">Genres: {this.ifNull(this.state.genres)}</h3>
                                <div className="movie-show__subcontainer">
                                    <h4 className="movie-show__time">{this.ifNull(mov.runtime)} mins</h4>
                                    <h4 className="movie-show__date">{!!mov.release_date ? mov.release_date.substring(0, 4) : '-'}</h4>
                                    <h4 className="movie-show__vote">{mov.vote_average * 10}%</h4>
                                </div>
                                <h3 className="movie-show__heading">Overview</h3>
                                <p className="movie-show__overview">{this.ifNull(mov.overview)}</p>
                                <div className="movie-show__links">
                                    {!!mov.homepage && <a className="movie-show__movie-page" href={mov.homepage} target="_blank">Movie's page</a>}
                                    <a className="movie-show__imdb" href={`https://www.imdb.com/title/${mov.imdb_id}`} target="_blank">See in imdb</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <h2 className="movie-show__heading movie-show__heading--top">cast</h2>
                        {this.props.cast.length === 0 ? (
                            <p>No cast</p>
                        ) : (
                                <div className="cast-container">
                                    {this.props.cast.map(person => <PersonCard person={person} size={185} />)}
                                </div>
                            )}
                    </div>
                    <div className="content-container">
                        <h2 className="movie-show__heading movie-show__heading--top">recommendations</h2>
                        {this.props.rec.length === 0 ? (
                            <p>No items</p>
                        ) : (
                                <div className="recommendation-container">
                                    {this.props.rec.map(rec => <RecommendationCard item={rec} />)}
                                </div>
                            )}
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderJSX()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movies[0],
    cast: state.movieCast,
    rec: state.movieRecommendations
})

export default connect(mapStateToProps)(MoviePage)