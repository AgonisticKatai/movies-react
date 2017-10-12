import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const Header = () => (
  <header>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a><Link to='/'>Movie Collection</Link></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to='/popular'>Popular</Link></NavItem>
            <NavItem eventKey={2}><Link to='/upcoming'>Upcoming</Link></NavItem>
            <NavItem eventKey={3}><Link to='/nowPlaying'>Now Playing</Link></NavItem>
            <NavItem eventKey={4}><Link to='/topRated'>Top Rated</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </header>
)

export default Header
