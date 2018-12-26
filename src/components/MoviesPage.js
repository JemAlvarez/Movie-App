import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetPopularMovies } from '../actions/movies'
import { setPageNum } from '../actions/page'

// Popular Movies Page
class MoviesPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularMovies(1))
        this.props.dispatch(setPageNum(1))
    }
    renderMovs = () => {
        return this.props.movies.map(mov => {
            return (
                <Link
                    to={`/movie/${mov.id}`}
                    key={mov.id}
                >
                    <p>{mov.title}</p>
                </Link>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderMovs()}
                <input
                    type="number"
                    value={this.props.page}
                    min={1}
                    onKeyDown={(e) => {
                        e.preventDefault()
                    }}
                    onChange={(e) => {
                        this.props.dispatch(setPageNum(Number(e.target.value)))
                        this.props.dispatch(startGetPopularMovies(Number(e.target.value)))
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.pageNum,
    movies: state.popularMovies
})

export default connect(mapStateToProps)(MoviesPage)