import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import './Header.css'

const Header = () => (
  <Navbar inverse collapseOnSelect className="nav-selector">
    <Navbar.Header>
      <LinkContainer to='/'>
        <Navbar.Brand className="nav-title">Movie Collection</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to='/popular'>
          <NavItem eventKey={1}>Popular Movies</NavItem>
        </LinkContainer>
        <LinkContainer to='/upcoming'>
          <NavItem eventKey={2}>Upcoming Movies</NavItem>
        </LinkContainer>
        <LinkContainer to='/now_playing'>
          <NavItem eventKey={3}>Now Playing Movies</NavItem>
        </LinkContainer>
        <LinkContainer to='/top_rated'>
          <NavItem eventKey={4}>Top Rated Movies</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
