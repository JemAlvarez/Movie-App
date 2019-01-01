import React from 'react'
import { Link } from 'react-router-dom'

const PersonCard = ({ person, size }) => (
    <div>
        <Link to={`/person/${person.id}`}>
            <img
                style={{ width: 154 }}
                src={!person.profile_path ? '/images/placeholder.jpg' : `https://image.tmdb.org/t/p/w${size}${person.profile_path}`}
            />
        </Link>
        <div>
            <h3><Link to={`/person/${person.id}`}>{person.name}</Link></h3>
        </div>
    </div>
)

export default PersonCard