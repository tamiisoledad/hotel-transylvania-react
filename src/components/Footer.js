import React from "react";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css'

const Footer = () => {
  return <div className="footer">
    <Nav>
      <Nav.Item>
        <p>Dirección:</p>
        <p>- Calle Drácula, 1313</p>
        <p>- Transylvania, CA 91301</p>
      </Nav.Item>
      <Nav.Item>
        <p>Teléfono:</p>
        <p>- +1 (555) 555-5555</p>
      </Nav.Item>
      <Nav.Item>
        <p>Correo electrónico:</p>
        <p>- info@hoteltransylvania.com</p>
      </Nav.Item>
    </Nav>
  </div>
}

export default Footer;