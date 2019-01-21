import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetPersonById, startGetKnownFor } from '../actions/persons'
import RecommendationCard from './RecommendationCard'

class PersonPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(startGetPersonById(this.props.match.params.id))
        this.props.dispatch(startGetKnownFor(this.props.match.params.id))
    }
    ifNull = (ppl) => {
        return !ppl ? '-' : ppl
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
                <div className="person">
                    <div className="person__main content-container">
                        <img
                            className="person__image"
                            src={!person.profile_path ? '/images/placeholder.jpg' : `https://image.tmdb.org/t/p/w300${person.profile_path}`}
                        />
                        <div className="person__description">
                            <h2 className="person__name">{person.name}</h2>
                            <h2 className="person__heading">Biography</h2>
                            <p className="person__bio">{!person.biography ? `We don't have a biography for ${person.name}` : person.biography}</p>
                        </div>
                    </div>
                    <div className="person__info content-container">
                        <div className="info__personal">
                            <h2 className="person__heading person__heading--top">Personal Info</h2>
                            <h4 className="person__subheading">Known for</h4>
                            <p className="person__information">{this.ifNull(person.known_for_department)}</p>
                            <h4 className="person__subheading">Gender</h4>
                            <p className="person__information">{this.ifNull(this.ifNull(gender))}</p>
                            <h4 className="person__subheading">Birthday</h4>
                            <p className="person__information">{this.ifNull(person.birthday)}</p>
                            <h4 className="person__subheading">Birth Place</h4>
                            <p className="person__information">{this.ifNull(person.place_of_birth)}</p>
                        </div>
                        <div className="info__known-for">
                            <h2 className="person__heading person__heading--top">Known for</h2>
                            {this.props.knownFor.length === 0 ? (
                                <p>{`We don't have any known for, for ${person.name}`}</p>
                            ) : (
                                    <div className="known-for__container">
                                        {this.props.knownFor.map(item => (<RecommendationCard item={item} />))}
                                    </div>
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