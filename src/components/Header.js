import React from 'react';
import { Link } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';

export default () => (
	<Navbar bg='light' expand='lg'>
		<Navbar.Brand href='/'>Gatsby Bootstrap Wordpress</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='mr-auto'>
				<Nav.Link as={Link} to='/'>
					<b className='text-dark'>Home</b>
				</Nav.Link>
				<Nav.Link as={Link} to='/about'>
					<b className='text-dark'>About</b>
				</Nav.Link>
				<Nav.Link as={Link} to='/contact'>
					<b className='text-dark'>Contact</b>
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);
