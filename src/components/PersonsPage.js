import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetPopularPersons } from '../actions/persons'
import { setPageNum } from '../actions/page'

// Popular Persons Page
class PersonsPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularPersons(1))
        this.props.dispatch(setPageNum(1))
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
    render() {
        return (
            <div>
                {this.renderPersons()}
                <input
                    type="number"
                    value={this.props.page}
                    min={1}
                    onKeyDown={(e) => {
                        e.preventDefault()
                    }}
                    onChange={(e) => {
                        this.props.dispatch(setPageNum(Number(e.target.value)))
                        this.props.dispatch(startGetPopularPersons(Number(e.target.value)))
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.pageNum,
    persons: state.popularPersons
})

export default connect(mapStateToProps)(PersonsPage)