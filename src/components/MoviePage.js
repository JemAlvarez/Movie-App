import React from 'react'
import { connect } from 'react-redux';

const MoviePage = (props) => (
    <div>
        movie - {props.movie.title}
    </div>
)

const mapStateToProps = (state) => ({
    movie: state.movies
})

export default connect(mapStateToProps)(MoviePage)