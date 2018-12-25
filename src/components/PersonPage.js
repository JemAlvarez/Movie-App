import React from 'react'
import { connect } from 'react-redux';

const PersonPage = (props) => (
    <div>
        person - {props.person.name}
    </div>
)

const mapStateToProps = (state) => ({
    person: state.persons
})

export default connect(mapStateToProps)(PersonPage)