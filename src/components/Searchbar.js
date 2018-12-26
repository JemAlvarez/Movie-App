import React from 'react'
import { connect } from 'react-redux'
import { history } from '../routers/AppRouter'
import { startGetAllBySearch, startGetAllSuggestion } from '../actions/multi'
import { setKeyword } from '../actions/keyword'
import { setPageNum } from '../actions/page'

class Searchbar extends React.Component {
    state = {
        error: false,
        suggest: false
    }
    onInputChange = (keyword) => {
        this.props.dispatch(setKeyword(keyword))
    }
    renderSuggestions = () => {
        if (this.state.suggest === true && this.props.suggestion.length !== 0) {
            return (
                <div>
                    {this.props.suggestion.map(sug => <p key={sug.id}>{sug.name || sug.title}</p>)}
                </div>
            )
        } else {
            return <div></div>
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (this.props.keyword.length >= 2) {
                        this.props.dispatch(startGetAllBySearch(this.props.keyword, 1))
                        this.props.dispatch(setPageNum(1))
                        history.push('/search')
                        this.setState(() => ({ error: false }))
                        this.setState(() => ({ suggest: false }))
                    } else {
                        this.setState(() => ({ error: true }))
                    }
                }}>
                    <input
                        id="search-input"
                        type="text"
                        onChange={(e) => {
                            this.onInputChange(e.target.value)
                            if (e.target.value.length >= 1) {
                                this.props.dispatch(startGetAllSuggestion(e.target.value, 1))
                                this.setState(() => ({ suggest: true }))
                            } else {
                                this.setState(() => ({ suggest: false }))
                            }
                        }}
                    />
                    {this.renderSuggestions()}
                    {this.state.error && <p>Type more than one character.</p>}
                </form>
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