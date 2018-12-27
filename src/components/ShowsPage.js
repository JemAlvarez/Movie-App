import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { startGetPopularShows } from '../actions/shows'

// Popular Shows Page
class ShowsPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularShows(1))
    }
    renderShows = () => {
        return this.props.shows.map(show => {
            return (
                <Link
                    to={`/tv/${show.id}`}
                    key={show.id}
                >
                    <p>{show.name}</p>
                </Link>
            )
        })
    }
    handlePageClick = ({ selected }) => {
        this.props.dispatch(startGetPopularShows(selected + 1))
    }
    render() {
        return (
            <div>
                {this.renderShows()}
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
    shows: state.popularShows,
    pageCount: state.popularShowsPage
})

export default connect(mapStateToProps)(ShowsPage)