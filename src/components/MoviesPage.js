import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { startGetPopularMovies } from '../actions/movies'
import MovieShowCard from './MovieShowCard'
import { IoIosArrowBack, IoIosArrowForward, IoIosMore } from 'react-icons/io'

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
                <div className="content-container movies-shows">
                    {this.renderMovs()}

                </div>
                <div className="paginator">
                    <ReactPaginate
                        previousLabel={<IoIosArrowBack />}
                        nextLabel={<IoIosArrowForward />}
                        breakLabel={<IoIosMore />}
                        initialPage={0}
                        pageCount={this.props.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        pageLinkClassName={"page"}
                        disabledClassName={"disabled-arrow"}
                        activeClassName={"active-page"}
                        breakClassName={"break"}
                    />
                </div>
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