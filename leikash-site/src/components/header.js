import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'



const Header = () => {
  const logo = useStaticQuery(graphql`
    {
      file(name: { eq: "logo_leikashblog" }) {
        publicURL
      }
    }
    `
  )
    return (
        <header className='hover:underline bg-green-800 text-gray-100 flex justify-center'>
            <nav>
                <ul>
                    <h1>
                      <img src={logo.file.publicURL} alt="Leikash blog logo"/>
                    </h1>
                    <li className='text-center'><Link to="/">Top</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header