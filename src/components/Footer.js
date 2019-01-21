import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const Footer = () => (
    <div className="footer">
        <Link
            className="footer__scroll-top"
            to="app"
            smooth={true}
            duration={500}
        >
            Scroll Top
        </Link>
        <p>@Jem Alvarez - 2019</p>
    </div>
)

export default Footer