import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPageNum } from '../actions/page'
import { startGetAllBySearch } from '../actions/multi'

// Search Page
class SearchPage extends React.Component {
    // Redirect to home if state "all" is empty
    componentDidMount = () => {
        setTimeout(() => {
            if (this.props.all.length === 0) {
                // this.props.history.push('/')
            }
        }, 100);
    }
    renderAll = () => {
        return this.props.all.map(all => {
            return (
                <Link
                    to={`/${all.media_type}/${all.id}`}
                    key={all.id}
                >
                    <p>{all.title || all.name}</p>
                </Link>
            )
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.all.length === 0 ? (
                        <p>Nothing found, try searching for something else.</p>
                    ) : (
                            this.renderAll()
                        )
                }
                <input
                    type="number"
                    value={this.props.page}
                    min={1}
                    onKeyDown={(e) => {
                        e.preventDefault()
                    }}
                    onChange={(e) => {
                        this.props.dispatch(setPageNum(Number(e.target.value)))
                        this.props.dispatch(startGetAllBySearch(this.props.keyword, Number(e.target.value)))
                    }}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    all: state.all,
    page: state.pageNum,
    keyword: state.keyword
})

export default connect(mapStateToProps)(SearchPage)