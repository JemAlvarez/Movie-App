import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { startGetPopularShows } from '../actions/shows'
import MovieShowCard from './MovieShowCard'
import { IoIosArrowBack, IoIosArrowForward, IoIosMore } from 'react-icons/io'

// Popular Shows Page
class ShowsPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularShows(1))
    }
    renderShows = () => {
        return this.props.shows.map(show => {
            return (
                <MovieShowCard item={show} />
            )
        })
    }
    handlePageClick = ({ selected }) => {
        this.props.dispatch(startGetPopularShows(selected + 1))
    }
    render() {
        return (
            <div>
                <div className="content-container movies-shows">
                    {this.renderShows()}
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
                        activeClassName={"active"}
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
    shows: state.popularShows,
    pageCount: state.popularShowsPage
})

export default connect(mapStateToProps)(ShowsPage)