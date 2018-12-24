import React from 'react'
import { connect } from 'react-redux'
import { startGetMoviesBySearch } from '../actions/movies'

class Searchbar extends React.Component {
    state = {
        keyword: ''
    }
    onInputChange = (keyword) => {
        this.setState(() => ({ keyword }))
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.dispatch(startGetMoviesBySearch(this.state.keyword))
                }}>
                    <input type="text" onChange={(e) => {
                        this.onInputChange(e.target.value)
                    }} />
                </form>
            </div>
        )
    }
}

export default connect()(Searchbar)