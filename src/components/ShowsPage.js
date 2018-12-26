import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetPopularShows } from '../actions/shows'
import { setPageNum } from '../actions/page'

// Popular Shows Page
class ShowsPage extends React.Component {
    componentWillMount = () => {
        this.props.dispatch(startGetPopularShows(1))
        this.props.dispatch(setPageNum(1))
    }
    renderShows = () => {
        return this.props.shows.map(show => {
            return (
                <Link
                    to={`/tv/${show.id}`}
                    key={show.id}
                >
                    <p>{show.name}</p>
                </Link>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderShows()}
                <input
                    type="number"
                    value={this.props.page}
                    min={1}
                    onKeyDown={(e) => {
                        e.preventDefault()
                    }}
                    onChange={(e) => {
                        this.props.dispatch(setPageNum(Number(e.target.value)))
                        this.props.dispatch(startGetPopularShows(Number(e.target.value)))
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.pageNum,
    shows: state.popularShows
})

export default connect(mapStateToProps)(ShowsPage)