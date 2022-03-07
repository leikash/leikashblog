import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white text-center">
            <div>Leikash Blog { (new Date()).getFullYear() }</div>
            <li><Link to="/about">about</Link></li>
        </footer>
    )
}

export default Footer