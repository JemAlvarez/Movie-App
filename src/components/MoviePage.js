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
    renderJSX = () => {
        if (!!this.props.movie) {
            const mov = this.props.movie
            setTimeout(() => {
                this.setState((state, props) => ({
                    genres: props.movie.genres.map(item => ` ${item.name}`).toString()
                }))
            }, 500);
            return (
                <div>
                    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${mov.backdrop_path})` }} className="backdrop">
                        <div className="layer">
                            <img src={`https://image.tmdb.org/t/p/w300${mov.poster_path}`} />
                            <div>
                                <h2>{mov.title}</h2>
                                <h3>Genres: {this.state.genres}</h3>
                                <h5>{mov.runtime} mins</h5>
                                <h5>{mov.tagline}</h5>
                                <h4>{mov.release_date.substring(0, 4)}</h4>
                                <h3>{mov.vote_average * 10}%</h3>
                                <h3>Overview</h3>
                                <p>{mov.overview}</p>
                                {!!mov.homepage && <a href={mov.homepage} target="_blank">Movie's page</a>}
                                <a href={`https://www.imdb.com/title/${mov.imdb_id}`} target="_blank">See in imdb</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>cast</h2>
                        {this.props.cast.map(person => <PersonCard person={person} size={92} />)}
                    </div>
                    <div>
                        <h2>recommendations</h2>
                        {this.props.rec.map(rec => <RecommendationCard item={rec} />)}
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