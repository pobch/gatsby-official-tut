import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => {
  return (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

export default ({ children }) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: 650, padding: '0 1rem' }}>
      <header>
        <Link to="/">
          <h3 style={{ display: 'inline' }}>MySweetSite</h3>
        </Link>
        <ul style={{ float: 'right' }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
