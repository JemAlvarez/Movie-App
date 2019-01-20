import React from 'react'
import { connect } from 'react-redux'
import { startGetShowById, startGetShowCast, startGetShowRecommendation } from '../actions/shows'
import PersonCard from './PersonCard'
import RecommendationCard from './RecommendationCard';

class ShowPage extends React.Component {
    state = {
        mins: 0,
        genres: '',
        lastSeason: {}
    }
    componentWillMount() {
        this.props.dispatch(startGetShowById(this.props.match.params.id))
        this.props.dispatch(startGetShowCast(this.props.match.params.id))
        this.props.dispatch(startGetShowRecommendation(this.props.match.params.id))
    }
    ifNull = (show) => {
        return !show ? '-' : show
    }
    renderJSX = () => {
        if (!!this.props.show) {
            const show = this.props.show
            setTimeout(() => {
                this.setState((state, props) => ({
                    mins: props.show.episode_run_time[0],
                    genres: props.show.genres.map(item => ` ${item.name}`).toString(),
                    lastSeason: props.show.seasons.length === 0 ? {} : props.show.seasons[props.show.seasons.length - 1]
                }))
            }, 500);
            return (
                <div className="movie-show">
                    <div className="movie-show__main-container">
                        <div
                            style={!!show.backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/w1280${show.backdrop_path})` } : { backgroundImage: `url(/images/placeholder.jpg)` }}
                            className="movie-show__backdrop"
                        ></div>
                        <div className="content-container movie-show__main">
                            <img
                                className="movie-show__image"
                                src={!!show.poster_path ? `https://image.tmdb.org/t/p/w300${show.poster_path}` : '/images/placeholder.jpg'}
                            />
                            <div className="moive-show__description">
                                <h2 className="movie-show__title">{show.name}</h2>
                                <h3 className="movie-show__genres">Genres: {this.state.genres}</h3>
                                <div className="movie-show__subcontainer">
                                    <h4>{this.ifNull(show.number_of_seasons)} seasons</h4>
                                    <h4>{!!show.first_air_date ? show.first_air_date.substring(0, 4) : '-'}</h4>
                                    <h4>{show.vote_average * 10}%</h4>
                                </div>
                                <h4>Episode average: {this.state.mins} mins</h4>
                                <h4>Still in production: <span className="movie-show__prod">{`${show.in_production}`}</span></h4>
                                <h3 className="movie-show__heading">Overview</h3>
                                <p className="movie-show__overview">{this.ifNull(show.overview)}</p>
                                <div className="movie-show__links">
                                    {!!show.homepage && <a className="movie-show__movie-page" href={show.homepage} target="_blank">Shows's page</a>}
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
                        <h2 className="movie-show__heading movie-show__heading--top">latest season</h2>
                        <div className="movie-show__last-season">
                            <img
                                className="last-season__image"
                                src={!this.state.lastSeason.poster_path ? '/images/placeholder.jpg' : `https://image.tmdb.org/t/p/w154${this.state.lastSeason.poster_path}`}
                            />
                            <div className="last-season__content">
                                <h2>{this.ifNull(this.state.lastSeason.name)}</h2>
                                <h3>{`${this.ifNull(this.state.lastSeason.air_date)} | ${this.ifNull(this.state.lastSeason.episode_count)} episodes`}</h3>
                                <p>{this.state.lastSeason.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <h2 className="movie-show__heading movie-show__heading--top">recommendations</h2>
                        {this.props.rec.length === 0 ? (
                            <p>No items</p>) : (
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
    show: state.shows[0],
    cast: state.showCast,
    rec: state.showRecommendations
})

export default connect(mapStateToProps)(ShowPage)