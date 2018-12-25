import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetMovieById } from '../actions/movies'
import { startGetShowById } from '../actions/shows'
import { startGetPersonById } from '../actions/persons'
import { setPageNum } from '../actions/page'
import { startGetAllBySearch } from '../actions/multi'

const SearchPage = (props) => (
    <div>
        {props.all.map(all => {
            let itemDispatch
            if (all.media_type === 'movie') {
                itemDispatch = startGetMovieById(all.id)
            } else if (all.media_type === 'tv') {
                itemDispatch = startGetShowById(all.id)
            } else if (all.media_type === 'person') {
                itemDispatch = startGetPersonById(all.id)
            }
            return (
                <Link
                    to={`/${all.media_type}/${all.id}`}
                    key={all.id}
                    onClick={() => {
                        props.dispatch(itemDispatch)
                    }}
                >
                    {all.title || all.name}
                </Link>
            )
        })}
        <input type="number" value={props.page} min={1} onChange={(e) => {
            props.dispatch(setPageNum(Number(e.target.value)))
            props.dispatch(startGetAllBySearch(props.keyword, Number(e.target.value)))
        }} />
    </div>
)


const mapStateToProps = (state) => ({
    all: state.all,
    page: state.pageNum,
    keyword: state.keyword
})

export default connect(mapStateToProps)(SearchPage)