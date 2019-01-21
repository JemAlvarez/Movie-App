import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

class Navbar extends React.Component {
    burgerToggle = () => {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }
    render() {
        return (
            <nav>
                <div className="content-container">
                    <div className="navWide">
                        <div className="wideDiv">
                            <NavLink to="/" activeClassName="active" exact={true}> home </NavLink>
                            <NavLink to="/movies" activeClassName="active"> movies </NavLink>
                            <NavLink to="/shows" activeClassName="active"> shows </NavLink>
                            <NavLink to="/persons" activeClassName="active"> persons </NavLink>
                        </div>
                    </div>
                    <div className="navNarrow">
                        <p className="burger" onClick={this.burgerToggle}><i><FaBars /></i></p>
                        <div className="narrowLinks">
                            <NavLink to="/" activeClassName="active" exact={true} onClick={this.burgerToggle}> home </NavLink>
                            <NavLink to="/movies" activeClassName="active" onClick={this.burgerToggle}> movies </NavLink>
                            <NavLink to="/shows" activeClassName="active" onClick={this.burgerToggle}> shows </NavLink>
                            <NavLink to="/persons" activeClassName="active" onClick={this.burgerToggle}> persons </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar