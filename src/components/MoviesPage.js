import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { startGetPopularMovies } from '../actions/movies'
import MovieShowCard from './MovieShowCard'

// Popular Movies Page
class MoviesPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularMovies(1))
    }
    renderMovs = () => {
        return this.props.movies.map(mov => {
            return (
                <MovieShowCard item={mov} />
            )
        })
    }
    handlePageClick = ({ selected }) => {
        this.props.dispatch(startGetPopularMovies(selected + 1))
    }
    render() {
        return (
            <div>
                {this.renderMovs()}
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    initialPage={0}
                    pageCount={this.props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    activeClassName={"active"}
                // breakClassName={"break-me"}
                // containerClassName={"pagination"}
                // subContainerClassName={"pages pagination"}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.pageNum,
    movies: state.popularMovies,
    pageCount: state.popularMoviesPage
})

export default connect(mapStateToProps)(MoviesPage)