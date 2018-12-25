import React from 'react'
import { connect } from 'react-redux'
import { startGetShowById } from '../actions/shows'

class ShowPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(startGetShowById(this.props.match.params.id))
    }
    renderJSX = () => {
        if (!!this.props.show) {
            return (
                <p>{this.props.show.name}</p>
            )
        }
    }
    render() {
        return (
            <div>
                show
                {this.renderJSX()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    show: state.shows[0]
})

export default connect(mapStateToProps)(ShowPage)