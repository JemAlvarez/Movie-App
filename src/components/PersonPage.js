import React from 'react'
import { connect } from 'react-redux'
import { startGetPersonById } from '../actions/persons'

class PersonPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(startGetPersonById(this.props.match.params.id))
    }
    renderJSX = () => {
        if (!!this.props.person) {
            return (
                <p>{this.props.person.name}</p>
            )
        }
    }
    render() {
        return (
            <div>
                person
                {this.renderJSX()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    person: state.persons[0]
})

export default connect(mapStateToProps)(PersonPage)