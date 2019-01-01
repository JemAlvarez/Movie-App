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
                <div>
                    <div
                        style={!!show.backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/w1280${show.backdrop_path})` } : { backgroundImage: `url(/images/placeholder.jpg)` }}
                        className="backdrop"
                    >
                        <div className="layer">
                            <img
                                style={{ width: 300 }}
                                src={!!show.poster_path ? `https://image.tmdb.org/t/p/w300${show.poster_path}` : '/images/placeholder.jpg'}
                            />
                            <div>
                                <h2>{show.name}</h2>
                                <h3>Genres: {this.state.genres}</h3>
                                <h5>{this.ifNull(show.number_of_seasons)} seasons</h5>
                                <h4>Episode average: {this.state.mins} mins</h4>
                                <h4>{!!show.first_air_date ? show.first_air_date.substring(0, 4) : '-'}</h4>
                                <h3>{show.vote_average * 10}%</h3>
                                <h3>Still in production : {`${show.in_production}`}</h3>
                                <h3>Overview</h3>
                                <p>{this.ifNull(show.overview)}</p>
                                {!!show.homepage && <a href={show.homepage} target="_blank">Movie's page</a>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>cast</h2>
                        {this.props.cast.length === 0 ? (
                            <p>No cast</p>
                        ) : (
                                this.props.cast.map(person => <PersonCard person={person} size={92} />)
                            )}
                    </div>
                    <div>
                        <h2>latest season</h2>
                        <div>
                            <img
                                style={{ width: 154 }}
                                src={!this.state.lastSeason.poster_path ? '/images/placeholder.jpg' : `https://image.tmdb.org/t/p/w154${this.state.lastSeason.poster_path}`}
                            />
                            <div>
                                <h2>{this.ifNull(this.state.lastSeason.name)}</h2>
                                <h3>{`${this.ifNull(this.state.lastSeason.air_date)} | ${this.ifNull(this.state.lastSeason.episode_count)} episodes`}</h3>
                                <p>{this.state.lastSeason.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>recommendations</h2>
                        {this.props.rec.length === 0 ? (
                            <p>No items</p>) : (
                                this.props.rec.map(rec => <RecommendationCard item={rec} />)
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