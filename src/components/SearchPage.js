import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { startGetAllBySearch } from '../actions/multi'
import MovieShowCard from './MovieShowCard'
import PersonCard from './PersonCard'

// Search Page
class SearchPage extends React.Component {
    renderAll = () => {
        return this.props.all.map(item => {
            if (item.media_type === 'tv' || item.media_type === 'movie') {
                return <MovieShowCard item={item} />
            } else if (item.media_type === 'person') {
                return <PersonCard person={item} size={154} />
            }
        })
    }
    handlePageClick = ({ selected }) => {
        this.props.dispatch(startGetAllBySearch(this.props.keyword, selected + 1))
    }
    render() {
        return (
            <div>
                {
                    this.props.all.length === 0 ? (
                        <p>Nothing found, try searching for something else.</p>
                    ) : (
                            <div>
                                {this.renderAll()}
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
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    all: state.all,
    page: state.pageNum,
    keyword: state.keyword,
    pageCount: state.allPage
})

export default connect(mapStateToProps)(SearchPage)