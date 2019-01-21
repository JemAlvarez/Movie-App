import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => (
    <div className="footer">
        <Link
            className="footer__scroll-top"
            to="app"
            smooth={true}
            duration={500}
        >
            <IoIosArrowUp />
        </Link>
        <p>@Jem Alvarez - 2019</p>
    </div>
)

export default Footer