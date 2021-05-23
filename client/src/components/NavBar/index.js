import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { Brand } from 'react-bootstrap';
// import { Link } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Book IT</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home/Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
    
  );
}

export default NavBar;