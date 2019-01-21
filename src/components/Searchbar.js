import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { history } from '../routers/AppRouter'
import { startGetAllBySearch, startGetAllSuggestion } from '../actions/multi'
import { setKeyword } from '../actions/keyword'
import { startGetShowById } from '../actions/shows'
import { startGetMovieById } from '../actions/movies'
import { startGetPersonById } from '../actions/persons'

class Searchbar extends React.Component {
    state = {
        error: false,
        suggest: false,
        focused: false
    }
    onInputChange = (keyword) => {
        this.props.dispatch(setKeyword(keyword))
    }
    resetForm = (id) => {
        document.getElementById("searchbar-form").reset()
    }
    renderSuggestions = () => {
        if (this.state.suggest === true && this.props.suggestion.length !== 0 && this.state.focused === true) {
            return (
                <div className="searchbar__suggestion-container">
                    {this.props.suggestion.map(sug =>
                        <div className="searchbar__suggestion">
                            <Link
                                to={`/${sug.media_type}/${sug.id}`}
                                key={sug.id}
                                onClick={(e) => {
                                    if (sug.media_type === 'movie') {
                                        this.props.dispatch(startGetMovieById(sug.id))
                                    } else if (sug.media_type === 'tv') {
                                        this.props.dispatch(startGetShowById(sug.id))
                                    } else if (sug.media_type === 'person') {
                                        this.props.dispatch(startGetPersonById(sug.id))
                                    }
                                }}
                            >
                                {sug.name || sug.title}
                            </Link>
                        </div>
                    )}
                </div>
            )
        } else {
            return <div></div>
        }
    }
    render() {
        return (
            <div className="searchbar">
                <div className="content-container">
                    <div className="searchbar-form__container">
                        <form
                            id="searchbar-form"
                            autoComplete="off"
                            // If word is > 2 dispatch and set states 
                            onSubmit={(e) => {
                                e.preventDefault()
                                if (this.props.keyword.length >= 2) {
                                    this.props.dispatch(startGetAllBySearch(this.props.keyword, 1))
                                    history.push('/search')
                                    this.setState(() => ({ error: false }))
                                    this.setState(() => ({ suggest: false }))
                                } else {
                                    this.setState(() => ({ error: true }))
                                }
                            }}>
                            <input
                                className="searchbar__input"
                                placeholder="Search for a movie, show, or person"
                                type="text"
                                // Change state when focused
                                onFocus={(e) => {
                                    this.setState(() => ({ focused: true }))
                                }}
                                // Change state when unfocused
                                onBlur={(e) => {
                                    setTimeout(() => {
                                        this.setState(() => ({ focused: false }))
                                    }, 150);
                                }}
                                // Dispatch and set state when value is changed
                                onChange={(e) => {
                                    this.onInputChange(e.target.value)
                                    if (e.target.value.length >= 1) {
                                        this.props.dispatch(startGetAllSuggestion(e.target.value, 1))
                                        this.setState(() => ({ suggest: true, error: false }))
                                    } else {
                                        this.setState(() => ({ suggest: false }))
                                    }
                                }}
                            />
                            {this.renderSuggestions()}
                            {this.state.error && <p className="searchbar__error">Type more than one character.</p>}
                        </form>
                        <button
                            className="searchbar__reset-btn"
                            onClick={(e) => {
                                document.getElementById("searchbar-form").reset()
                            }}
                        >
                            x
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.pageNum,
    keyword: state.keyword,
    suggestion: state.suggestion
})

export default connect(mapStateToProps)(Searchbar)