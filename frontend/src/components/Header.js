import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						<i className='fas fa-paw mx-2'></i>Pet Gear
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/cart'>
								<i className='fas fa-shopping-cart mx-2'></i>Cart
							</Nav.Link>
							<Nav.Link href='/logink'>
								<i className='fas fa-user mx-2'></i>Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
