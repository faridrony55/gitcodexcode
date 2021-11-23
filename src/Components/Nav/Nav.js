import React, { Component } from 'react';    
import './Nav.css';
 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/codexcode-white.png';

class Nav extends Component {
    render() {
        return ( 
        
             <Navbar  variant="dark" expand="lg"  sticky="top">
               <Container>
                <Navbar.Brand href="/">
                  <img src={logo} alt="" />
                </Navbar.Brand>
              
                <ul className="mr-auto nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>  
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>  
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="/course">Shopify</a>  
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About Me</a>  
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="/freelancers">My Freelancers</a>  
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="/team">Team</a>  
                  </li> 
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>  
                  </li> 
                </ul>
                
                
                 
              </Container>
          
             </Navbar>
              
        );
    }
}

export default Nav;