import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { startGetAllBySearch } from '../actions/multi'
import MovieShowCard from './MovieShowCard'
import { IoIosArrowBack, IoIosArrowForward, IoIosMore } from 'react-icons/io'

// Search Page
class SearchPage extends React.Component {
    renderAll = () => {
        return this.props.all.map(item => {
            if (item.media_type === 'tv' || item.media_type === 'movie') {
                return <MovieShowCard item={item} />
            } else if (item.media_type === 'person') {
                return (
                    <div className="movie-show-card">
                        <div className="movie-show-card__image">
                            <Link
                                to={`/person/${item.id}`}
                            >
                                <img
                                    src={!item.profile_path ? '/images/placeholder.jpg' : `https://image.tmdb.org/t/p/w300${item.profile_path}`}
                                />
                            </Link>
                        </div>
                        <div className="movie-show-card__description">
                            <h3 className="description__title"><Link to={`/person/${item.id}`}>{item.name}</Link></h3>
                            <div className="description__subcontainer">
                                <div></div>
                                <h3 className="description__average">{Math.floor(item.popularity * 10)} %</h3>
                            </div>
                            <h5 className="description__info">
                                <Link
                                    to={`/person/${item.id}`}
                                >
                                    More Info
                                </Link>
                            </h5>
                        </div>
                    </div>
                )
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
                        <div className="content-container search-page__error">
                            <p>Nothing found, try searching for something else.</p>
                        </div>
                    ) : (
                            <div>
                                <div className="content-container search-page">
                                    {this.renderAll()}
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