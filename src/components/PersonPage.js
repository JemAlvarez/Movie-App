import React from 'react'
import { connect } from 'react-redux'
import { startGetPersonById } from '../actions/persons'

class PersonPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(startGetPersonById(this.props.match.params.id))
    }
    renderJSX = () => {
        if (!!this.props.person) {
            const person = this.props.person
            let gender = ''
            if (person.gender === 1) {
                gender = 'female'
            } else if (person.gender === 2) {
                gender = 'male'
            }
            return (
                <div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} />
                        <div>
                            <h2>{person.name}</h2>
                            <h2>Biography</h2>
                            <p>{person.biography}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Personal Info</h2>
                            <h4>Known for</h4>
                            <p>{person.known_for_department}</p>
                            <h4>Gender</h4>
                            <p>{gender}</p>
                            <h4>Birthday</h4>
                            <p>{person.birthday}</p>
                            <h4>Birth Place</h4>
                            <p>{person.place_of_birth}</p>
                        </div>
                        <div>
                            <h2>Known for</h2>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderJSX()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    person: state.persons[0]
})

export default connect(mapStateToProps)(PersonPage)