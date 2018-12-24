import React from 'react'
import { connect } from 'react-redux'

const HomePage = (props) => (
    <div>
        {props.movies.map(mov => <p key={mov.id}>{mov.title}</p>)}
    </div>
)

const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps)(HomePage)