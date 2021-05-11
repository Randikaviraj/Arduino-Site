import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { grey } from '@material-ui/core/colors';
import { Navbar,Nav,Form,FormControl } from 'react-bootstrap';




export class NavBar extends Component {
    
    
    render() {
   
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><HomeIcon fontSize="large" style={{ color: grey[500] }} /></         Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#ardino">Ardino</Nav.Link>
                    <Nav.Link href="#fpga">FPGA</Nav.Link>
                    <Nav.Link href="#rest">REST-AST</Nav.Link>
                </Nav>
                <Form inline>
                    <Button  variant="outline-info" component={Link} to='/login'>Login</Button>
                    <Button  component={Link} to='/signup' className='menuButton'>signup</Button>
                </Form>
         </Navbar>
        )
    }
}

export default NavBar
