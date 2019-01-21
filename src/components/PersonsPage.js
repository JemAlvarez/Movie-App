import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { startGetPopularPersons } from '../actions/persons'
import PersonCard from './PersonCard'
import { IoIosArrowBack, IoIosArrowForward, IoIosMore } from 'react-icons/io'

// Popular Persons Page
class PersonsPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularPersons(1))
    }
    renderPersons = () => {
        return this.props.persons.map(ppl => {
            return (
                <PersonCard person={ppl} size={300} />
            )
        })
    }
    handlePageClick = ({ selected }) => {
        this.props.dispatch(startGetPopularPersons(selected + 1))
    }
    render() {
        return (
            <div>
                <div className="content-container persons-page">
                    {this.renderPersons()}
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
    persons: state.popularPersons,
    pageCount: state.popularPersonsPage
})

export default connect(mapStateToProps)(PersonsPage)