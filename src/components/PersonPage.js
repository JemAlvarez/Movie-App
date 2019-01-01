import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetPersonById, startGetKnownFor } from '../actions/persons'

class PersonPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(startGetPersonById(this.props.match.params.id))
        this.props.dispatch(startGetKnownFor(this.props.match.params.id))
    }
    ifNull = (show) => {
        return !show ? '-' : show
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
                        <img
                            style={{ width: 300 }}
                            src={!person.profile_path ? '/images/placeholder.jpg' : `https://image.tmdb.org/t/p/w300${person.profile_path}`}
                        />
                        <div>
                            <h2>{person.name}</h2>
                            <h2>Biography</h2>
                            <p>{!person.biography ? `We don't have a biography for ${person.name}` : person.biography}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Personal Info</h2>
                            <h4>Known for</h4>
                            <p>{this.ifNull(person.known_for_department)}</p>
                            <h4>Gender</h4>
                            <p>{this.ifNull(this.ifNull(gender))}</p>
                            <h4>Birthday</h4>
                            <p>{this.ifNull(person.birthday)}</p>
                            <h4>Birth Place</h4>
                            <p>{this.ifNull(person.place_of_birth)}</p>
                        </div>
                        <div>
                            <h2>Known for</h2>
                            {this.props.knownFor.length === 0 ? (
                                <p>{`We don't have any known for, for ${person.name}`}</p>
                            ) : (
                                    this.props.knownFor.map(item => (
                                        <div>
                                            <Link to={`/${item.media_type}/${item.id}`}>
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                                                />
                                            </Link>
                                            <Link to={`/${item.media_type}/${item.id}`}>
                                                <h3>{item.title || item.name}</h3>
                                            </Link>
                                        </div>
                                    ))
                                )}
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
    person: state.persons[0],
    knownFor: state.knownFor
})

export default connect(mapStateToProps)(PersonPage)