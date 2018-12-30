import React from 'react'
import { Link } from 'react-router-dom'
import { startGetShowById } from '../actions/shows'
import { startGetMovieById } from '../actions/movies'

class RecommendationCard extends React.Component {
    state = {
        over: false
    }
    item = this.props.item
    type = !!this.item.name ? 'tv' : 'movie'
    render() {
        return (
            <div>
                <Link
                    to={`/${this.type}/${this.item.id}`}
                    onClick={() => {
                        if (this.type === 'tv') {
                            this.props.dispatch(startGetShowById(this.item.id))
                        } else if (this.type === 'movie') {
                            this.props.dispatch(startGetMovieById(this.item.id))
                        }
                    }}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w185${this.item.backdrop_path}`}
                        onMouseEnter={() => { this.setState(() => ({ over: true })) }}
                        onMouseLeave={() => { this.setState(() => ({ over: false })) }}
                    />
                    {this.state.over && <p>{this.item.first_air_date || this.item.release_date}</p>}
                </Link>
                <div>
                    <h1><Link
                        to={`/${this.type}/${this.item.id}`}
                        onClick={() => {
                            if (this.type === 'tv') {
                                this.props.dispatch(startGetShowById(this.item.id))
                            } else if (this.type === 'movie') {
                                this.props.dispatch(startGetMovieById(this.item.id))
                            }
                        }}
                    >
                        {this.item.title || this.item.name}
                    </Link></h1>
                    <h3>{this.item.vote_average}</h3>
                </div>
            </div>
        )
    }
}

export default RecommendationCard