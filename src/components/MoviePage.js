import React from 'react'
import { connect } from 'react-redux'
import { startGetMovieById } from '../actions/movies'


class MoviePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(startGetMovieById(this.props.match.params.id))
    }
    renderJSX = () => {
        if (!!this.props.movie) {
            return (
                <p>{this.props.movie.title}</p>
            )
        }
    }
    render() {
        return (
            <div>
                movie
                {this.renderJSX()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movies[0]
})

export default connect(mapStateToProps)(MoviePage)