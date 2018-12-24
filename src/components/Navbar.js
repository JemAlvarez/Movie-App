import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'

export const Navbar = () => (
    <header>
        <div>
            <NavLink to="/" activeClassName="active" exact={true}> home </NavLink>
            <NavLink to="/discover" activeClassName="active"> discover </NavLink>
            <NavLink to="/movies" activeClassName="active"> movies </NavLink>
            <NavLink to="/shows" activeClassName="active"> shows </NavLink>
            <NavLink to="/persons" activeClassName="active"> persons </NavLink>
        </div>
        <Searchbar />
    </header>
)


export default Navbar