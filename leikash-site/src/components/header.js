import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <h1 className="title">Top page</h1>
                    <li><Link to="/">top</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header