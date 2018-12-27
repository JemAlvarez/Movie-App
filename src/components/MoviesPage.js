import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { startGetPopularMovies } from '../actions/movies'

// Popular Movies Page
class MoviesPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularMovies(1))
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