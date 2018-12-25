import React from 'react'
import { connect } from 'react-redux'
import { history } from '../routers/AppRouter'
import { startGetAllBySearch } from '../actions/multi'
import { setKeyword } from '../actions/keyword'
import { setPageNum } from '../actions/page'

class Searchbar extends React.Component {
    state = {
        error: false
    }
    onInputChange = (keyword) => {
        this.props.dispatch(setKeyword(keyword))
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
                    } else {
                        this.setState(() => ({ error: true }))
                    }
                }}>
                    <input type="text" onChange={(e) => {
                        this.onInputChange(e.target.value)
                    }} />
                    {this.state.error && <p>Type more than one character.</p>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.pageNum,
    keyword: state.keyword
})

export default connect(mapStateToProps)(Searchbar)