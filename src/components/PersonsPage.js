import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { startGetPopularPersons } from '../actions/persons'

// Popular Persons Page
class PersonsPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularPersons(1))
    }
    renderPersons = () => {
        return this.props.persons.map(ppl => {
            return (
                <Link
                    to={`/person/${ppl.id}`}
                    key={ppl.id}
                >
                    <p>{ppl.name}</p>
                </Link>
            )
        })
    }
    handlePageClick = ({ selected }) => {
        this.props.dispatch(startGetPopularPersons(selected + 1))
    }
    render() {
        return (
            <div>
                {this.renderPersons()}
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
    persons: state.popularPersons,
    pageCount: state.popularPersonsPage
})

export default connect(mapStateToProps)(PersonsPage)