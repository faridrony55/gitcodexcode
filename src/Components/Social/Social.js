import React from 'react'; 
import Nav from 'react-bootstrap/Nav'
import './Social.css'
const Social = () => {
    return (
        <Nav className="social">
            <Nav.Item>
                <Nav.Link href="/home">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  href="/home">Youtube</Nav.Link>
            </Nav.Item> 
        </Nav>
    );
};

export default Social;