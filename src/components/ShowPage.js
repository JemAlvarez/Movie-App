import React from 'react'
import { connect } from 'react-redux';

const ShowPage = (props) => (
    <div>
        show - {props.show.name}
    </div>
)

const mapStateToProps = (state) => ({
    show: state.shows
})

export default connect(mapStateToProps)(ShowPage)