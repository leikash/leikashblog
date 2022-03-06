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
        <header class="bg-green-600">
            <nav>
                <ul>
                    <h1 class="text-xl text-black-500">
                      <img src={logo.file.publicURL} alt="Leikash blog logo"/>
                    </h1>
                    <li><Link className="text-white content-center" to="/">Top</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header